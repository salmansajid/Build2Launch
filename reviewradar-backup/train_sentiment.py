"""
Train a tiny sentiment classifier and export model.json for the web app.
Workshop demo script — keep it simple and explainable.
"""

from __future__ import annotations

import json
import re
from pathlib import Path

import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

ROOT = Path(__file__).resolve().parent
CSV_PATH = ROOT / "data" / "reviews_sample.csv"
OUT_PATH = ROOT / "public" / "model.json"


def tokenize(text: str) -> list[str]:
    return re.findall(r"[a-z0-9']+", text.lower())


def main() -> None:
    df = pd.read_csv(CSV_PATH)
    if not {"text", "label"}.issubset(df.columns):
        raise SystemExit("CSV must have columns: text,label")

    x_train, x_test, y_train, y_test = train_test_split(
        df["text"],
        df["label"],
        test_size=0.2,
        random_state=42,
        stratify=df["label"],
    )

    vectorizer = CountVectorizer(
        tokenizer=tokenize,
        token_pattern=None,
        max_features=3000,
        lowercase=True,
    )
    x_train_vec = vectorizer.fit_transform(x_train)
    x_test_vec = vectorizer.transform(x_test)

    model = LogisticRegression(max_iter=1000)
    model.fit(x_train_vec, y_train)

    preds = model.predict(x_test_vec)
    acc = accuracy_score(y_test, preds)
    print(f"Test accuracy: {acc:.1%}")

    vocabulary = {word: int(index) for word, index in vectorizer.vocabulary_.items()}
    coefficients = model.coef_[0].tolist()
    payload = {
        "vocabulary": vocabulary,
        "coefficients": coefficients,
        "intercept": float(model.intercept_[0]),
        "positive_label": 1,
        "negative_label": 0,
        "note": "CountVectorizer + LogisticRegression export for ReviewRadar workshop demo",
        "accuracy": round(float(acc), 4),
    }

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUT_PATH.write_text(json.dumps(payload), encoding="utf-8")
    print(f"Saved model to {OUT_PATH}")


if __name__ == "__main__":
    main()

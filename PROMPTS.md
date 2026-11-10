# Copy-Paste Prompts for Live Demo

Use these exactly. Edit only project name / model name if needed.

---

## 1) Idea → App scaffold (ChatGPT / Claude / DeepSeek)

```
Act as a senior Next.js engineer and workshop instructor.

Build a beginner-friendly web app called ReviewRadar.

Goal:
- User pastes a product/customer review into a text area
- Clicks "Analyze"
- App shows:
  1) Sentiment prediction: Positive or Negative + confidence %
  2) Gemini-generated explanation of why
  3) A polite suggested reply to the customer

Tech requirements:
- Next.js App Router
- TypeScript
- Tailwind CSS
- One page UI only (clean, modern, not cluttered)
- API route: POST /api/analyze
- For now, create a placeholder sentiment function that returns Positive/Negative randomly OR by simple keyword rules
- Add a second step-ready structure for loading a local ML model from /public/model.json later
- Add Gemini integration using @google/generative-ai and process.env.GEMINI_API_KEY
- Use model name: gemini-2.5-flash-lite (or the latest Flash-Lite available)
- Include .env.example
- Include clear file-by-file code
- Keep dependencies minimal

Output:
- Exact file paths
- Full code for each file
- Short terminal commands to run the app
```

---

## 2) Fix / improve UI (if needed)

```
Improve the ReviewRadar UI in page.tsx:
- Clear title and one-sentence subtitle
- Large text area
- Primary Analyze button
- Loading state while waiting
- Results cards for: Sentiment, Confidence, Explanation, Suggested Reply
- Mobile responsive
- No purple gradient clichés; use a clean blue/teal professional look
Return the full updated file only.
```

---

## 3) Dataset prep + training script

```
Create a simple Python script train_sentiment.py for a workshop demo.

Input CSV: data/reviews_sample.csv with columns:
- text
- label  (0 = negative, 1 = positive)

Requirements:
- Use scikit-learn only (CountVectorizer + LogisticRegression)
- Train/test split 80/20
- Print accuracy
- Export a browser-friendly model file to public/model.json with:
  {
    "vocabulary": { "word": index, ... },
    "idf_or_counts_note": "count vectorizer binary/counts",
    "coefficients": [ ... ],
    "intercept": number,
    "positive_label": 1,
    "negative_label": 0
  }
- Keep vocabulary size manageable (max_features=3000)
- Include requirements-train.txt
- Include commands to run:
  pip install -r requirements-train.txt
  python train_sentiment.py

Return full files.
```

---

## 4) Integrate exported ML model into Next.js

```
Update ReviewRadar so /api/analyze:
1) Loads public/model.json
2) Vectorizes the input text with the exported vocabulary (count occurrences)
3) Computes logistic regression score with coefficients + intercept
4) Returns sentiment + confidence
5) Calls Gemini Flash-Lite with the review + prediction
6) Asks Gemini for:
   - a short explanation (2-3 sentences)
   - a polite customer-service reply
Return updated API route and any helper files. Full code only.
```

---

## 5) Gemini system instruction (inside API code)

```
You are a helpful customer-feedback coach for a workshop demo app called ReviewRadar.
Given a customer review and an ML sentiment prediction, respond in JSON with keys:
explanation, suggested_reply.
Keep tone practical and kind. No markdown.
```

---

## 6) Debugging prompt (when something breaks)

```
Here is the error message and the file contents.
Explain the cause in one sentence, then give the minimal fix with full updated file code only.
Error:
<PASTE ERROR>

File:
<PASTE FILE>
```

---

## 7) Deployment helper prompt

```
Give me exact steps to deploy this Next.js app to Vercel:
- GitHub push commands
- Where to add GEMINI_API_KEY
- What to click in Vercel
- How to verify the live /api/analyze endpoint
Keep it as a short checklist.
```

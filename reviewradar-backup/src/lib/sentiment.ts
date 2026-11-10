export type SentimentModel = {
  vocabulary: Record<string, number>;
  coefficients: number[];
  intercept: number;
  positive_label: number;
  negative_label: number;
};

export type SentimentResult = {
  sentiment: "Positive" | "Negative";
  confidence: number;
  score: number;
};

function tokenize(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9']+/g) ?? [];
}

function sigmoid(value: number): number {
  return 1 / (1 + Math.exp(-value));
}

export function predictSentiment(
  text: string,
  model: SentimentModel
): SentimentResult {
  const tokens = tokenize(text);
  const features = new Array(model.coefficients.length).fill(0);

  for (const token of tokens) {
    const index = model.vocabulary[token];
    if (index !== undefined) {
      features[index] += 1;
    }
  }

  let score = model.intercept;
  for (let i = 0; i < features.length; i += 1) {
    score += features[i] * model.coefficients[i];
  }

  const probabilityPositive = sigmoid(score);
  const sentiment = probabilityPositive >= 0.5 ? "Positive" : "Negative";
  const confidence =
    sentiment === "Positive" ? probabilityPositive : 1 - probabilityPositive;

  return {
    sentiment,
    confidence: Math.round(confidence * 1000) / 10,
    score,
  };
}

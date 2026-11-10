import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { predictSentiment, SentimentModel } from "@/lib/sentiment";

export const runtime = "nodejs";

type AnalyzeBody = {
  text?: string;
};

type GeminiPayload = {
  explanation: string;
  suggested_reply: string;
};

async function loadModel(): Promise<SentimentModel> {
  const modelPath = path.join(process.cwd(), "public", "model.json");
  const raw = await readFile(modelPath, "utf-8");
  return JSON.parse(raw) as SentimentModel;
}

function fallbackGemini(sentiment: string): GeminiPayload {
  if (sentiment === "Positive") {
    return {
      explanation:
        "The review uses clearly positive language about quality, usefulness, or satisfaction.",
      suggested_reply:
        "Thank you so much for the kind feedback! We're glad it worked well for you and hope to serve you again.",
    };
  }

  return {
    explanation:
      "The review highlights problems such as quality issues, delays, or poor support.",
    suggested_reply:
      "We're sorry this fell short of your expectations. Please share your order details so we can make this right.",
  };
}

async function askGemini(
  review: string,
  sentiment: string,
  confidence: number
): Promise<GeminiPayload> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return fallbackGemini(sentiment);
  }

  const genAI = new GoogleGenerativeAI(apiKey);
  const modelName =
    process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
  const model = genAI.getGenerativeModel({
    model: modelName,
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const prompt = `You are a helpful customer-feedback coach for a workshop demo app called ReviewRadar.
Given a customer review and an ML sentiment prediction, respond in JSON with keys:
explanation, suggested_reply.
Keep tone practical and kind. No markdown.

Review: ${review}
ML sentiment: ${sentiment}
Confidence: ${confidence}%`;

  try {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    const parsed = JSON.parse(text) as GeminiPayload;
    if (!parsed.explanation || !parsed.suggested_reply) {
      return fallbackGemini(sentiment);
    }
    return parsed;
  } catch {
    return fallbackGemini(sentiment);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AnalyzeBody;
    const text = body.text?.trim() ?? "";

    if (text.length < 3) {
      return NextResponse.json(
        { error: "Please enter a longer review." },
        { status: 400 }
      );
    }

    const model = await loadModel();
    const prediction = predictSentiment(text, model);
    const gemini = await askGemini(
      text,
      prediction.sentiment,
      prediction.confidence
    );

    return NextResponse.json({
      sentiment: prediction.sentiment,
      confidence: prediction.confidence,
      explanation: gemini.explanation,
      suggestedReply: gemini.suggested_reply,
      source: {
        ml: "CountVectorizer + LogisticRegression (Kaggle-style CSV)",
        llm: process.env.GEMINI_API_KEY
          ? process.env.GEMINI_MODEL || "gemini-2.5-flash-lite"
          : "fallback-template",
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Analysis failed. Check model.json and API key." },
      { status: 500 }
    );
  }
}

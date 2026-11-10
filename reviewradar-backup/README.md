# ReviewRadar

Demo app for the **Build2Launch Vibecoding & AI Workshop**.

## What it does
1. Classifies a review as Positive/Negative with a small ML model
2. Uses Gemini to explain the prediction and draft a reply
3. Deploys cleanly on Vercel

## Setup
```bash
cd reviewradar-backup
cp .env.example .env.local
# paste your Gemini API key into .env.local

python3 -m pip install -r requirements-train.txt
python3 train_sentiment.py

npm install
npm run dev
```

Open http://localhost:3000

## Workshop tip
Use this project for the live demonstration. Show vibecoding with prompts, then walk through dataset training, Gemini integration, and deployment.

## Deploy
1. Push to GitHub
2. Import in Vercel
3. Add env var `GEMINI_API_KEY`
4. Optional: `GEMINI_MODEL=gemini-2.5-flash-lite` (or the Flash-Lite model shown in AI Studio)

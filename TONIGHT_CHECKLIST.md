# Tonight Only — Do These 8 Things

If you only have limited time tonight, do them in this order.

## 1. Accounts (15 min)
- [ ] Google AI Studio API key created and saved
- [ ] GitHub logged in
- [ ] Vercel logged in with GitHub
- [ ] Kaggle logged in
- [ ] ChatGPT or Claude or DeepSeek ready

## 2. Install tools (10 min)
- [ ] VS Code
- [ ] Node.js **20 LTS** (important: Next.js may fail on older 18.x)
  - If you use nvm: `nvm install 20 && nvm use 20`
- [ ] Python 3
- [ ] `npm` works in terminal (`node -v` should show v20.x)

## 3. Download dataset (10 min)
- [ ] Get a small sentiment CSV from Kaggle
- [ ] Trim to columns `text,label`
- [ ] Keep ~2,000–3,000 rows
- [ ] Save as `reviewradar-backup/data/reviews_sample.csv`

## 4. Build / verify backup app (45–60 min)
- [ ] Open `reviewradar-backup`
- [ ] Add `.env.local` with `GEMINI_API_KEY=...`
- [ ] Train model (`python train_sentiment.py`) or use included sample model
- [ ] `npm install && npm run dev`
- [ ] Test Analyze with one positive and one negative review

## 5. Deploy backup once (15 min)
- [ ] Push backup repo to GitHub
- [ ] Deploy on Vercel
- [ ] Add env var `GEMINI_API_KEY`
- [ ] Save live URL in notes

## 6. Rehearse once (20 min)
- [ ] Read Session 1–3 talking points out loud
- [ ] Run through demo Blocks A→F once
- [ ] Practice the failure line: “Normal in real development — switching to backup.”

## 7. Pack for tomorrow
- [ ] Laptop charger
- [ ] HDMI / USB-C adapter
- [ ] Phone hotspot as wifi backup
- [ ] Open tabs: AI Studio, VS Code, GitHub, Kaggle, Vercel, LLM chat, this playbook

## 8. Sleep
A calm trainer beats a perfect model.

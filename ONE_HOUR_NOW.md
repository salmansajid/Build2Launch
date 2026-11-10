# YOU HAVE 1 HOUR — DO ONLY THIS

Ignore every other file until this is done.

---

## Minute 0–15: Make the demo work

### 1) Get Gemini API key (5 min)
1. Open https://aistudio.google.com/apikey
2. Create API key
3. Copy it

### 2) Put key in the app (2 min)
In terminal:

```bash
cd /Users/salmansajid/Desktop/projects/docs/Build2Launch/reviewradar-backup
nvm use 20
cp .env.example .env.local
```

Open `.env.local` and paste:

```
GEMINI_API_KEY=PASTE_YOUR_KEY_HERE
GEMINI_MODEL=gemini-2.5-flash-lite
```

If AI Studio shows a different Flash-Lite name, use that exact name.

### 3) Run the app (8 min)

```bash
npm run dev
```

Open http://localhost:3000  
Test 2 reviews:
- Positive: `I love this product, amazing quality!`
- Negative: `Terrible. Broke on day one.`

If Analyze works → you are safe for the workshop.

---

## Minute 15–30: Rehearse the only flow that matters

Say this out loud once while clicking:

1. **Problem:** reviews are messy → businesses need fast understanding  
2. **Vibecoding:** describe idea → AI writes code → you test  
3. **Prompt rule:** Role + Goal + Constraints  
4. **Show ReviewRadar**  
5. **Say this line:**  
   “Gemini is generative via API. The Kaggle dataset trains a separate ML model. We combine both.”  
6. **Show dataset CSV** (`data/reviews_sample.csv`)  
7. **Say:** we trained a small classifier → `model.json`  
8. **Run Analyze** on stage  
9. **Optional:** open Vercel/GitHub if time; otherwise say deploy steps

If live coding fails, say:
> “This is normal in real development. Continuing from the prepared project.”
Then open the working ReviewRadar app.

---

## Minute 30–45: Know what to say (don’t memorize everything)

Open and skim only:
- `SPEAKING_SCRIPT.md` (read Opening + Demo + Closing)
- `workshop-slides.html` (arrow keys to present)
- `PROMPTS.md` (first prompt only, if you generate code live)

You do **not** need to memorize the playbook.

---

## Minute 45–60: Stage setup

Open these tabs before you start:
1. `workshop-slides.html` (or PDF)
2. VS Code → `reviewradar-backup`
3. http://localhost:3000 (app running)
4. Google AI Studio
5. ChatGPT/Claude
6. `SPEAKING_SCRIPT.md`
7. `PROMPTS.md`

Pack:
- charger
- HDMI/USB-C adapter
- phone hotspot

---

## Your delivery strategy (important)

With 1 hour prep, **do not try to write the whole app from scratch live**.

Best approach for today:
1. Teach Sessions 1–3 with slides (30 min)
2. Live-demo the **working ReviewRadar** (explain each part as if building) (70–80 min compressed into remaining time)
3. Optionally paste 1 prompt into ChatGPT to show vibecoding
4. Close with next steps + share handout PDF later

This still matches the workshop goal.

---

## Success checklist (before you leave)

- [ ] App runs on localhost
- [ ] Positive + negative review both work
- [ ] Slides open
- [ ] Speaking script open
- [ ] One recovery sentence ready if something breaks

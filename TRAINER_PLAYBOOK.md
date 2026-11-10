# Vibecoding & AI Workshop — Trainer Playbook
**Build2Launch by NICKHI Campus Ambassador**  
**Duration:** 2 hours | **Your role:** First-time trainer, live demo lead

---

## The one rule for tomorrow

**Do not invent live.** Prepare tonight. Tomorrow you *perform* a rehearsed demo that looks spontaneous.

If something breaks, say:  
> “This is normal in real development. Let’s switch to the backup and keep moving.”

Then switch. Never debug for more than 2–3 minutes on stage.

---

## What you will build (demo project)

### App name: **ReviewRadar**
A feedback analyzer that:
1. Takes a product/customer review as input
2. Uses a **small ML model** trained on a Kaggle sentiment dataset to predict Positive / Negative
3. Uses **Gemini 3.1 Flash-Lite** to explain the prediction and suggest a polite reply
4. Deploys to **Vercel**

**Why this project works for a first workshop**
- Fits every requirement in the brief
- Text data is faster and more reliable than images live
- Easy story for startups: “turn customer feedback into action”
- Vercel-friendly (Next.js + JSON model weights + Gemini API)

---

## Tonight checklist (do this BEFORE you sleep)

### Accounts & keys (30–40 min)
- [ ] Google account logged in
- [ ] Create API key at [Google AI Studio](https://aistudio.google.com/apikey)
- [ ] Confirm model access to **Gemini 2.5 Flash-Lite** or **Gemini 3.1 Flash-Lite** (use whatever name appears in AI Studio; say the workshop name, use the available Flash-Lite model)
- [ ] GitHub account ready
- [ ] Kaggle account ready + download the dataset tonight
- [ ] Vercel account linked to GitHub
- [ ] VS Code installed
- [ ] Node.js LTS installed (`node -v` works)
- [ ] Python 3 installed (`python3 --version` works)
- [ ] ChatGPT / Claude / DeepSeek tab open for code generation

### Dataset (download tonight)
Use this small dataset:
- **Kaggle:** “Sentiment140” is huge — avoid for live demo
- **Better:** `Sentiment Analysis Dataset` / `IMDB Dataset of 50K Movie Reviews` — still big
- **Best for live demo:** `SMS Spam Collection Dataset` OR a small CSV you trim to **2,000–5,000 rows**

**Recommended tonight prep:**
1. Download a sentiment CSV from Kaggle
2. Keep only 2 columns: `text`, `label` (0/1 or negative/positive)
3. Save a trimmed file as `data/reviews_sample.csv` (max ~3,000 rows)
4. Put it in your project folder so you don’t depend on wifi for download tomorrow

### Pre-build the “safety net” (60–90 min)
Build a **working version** of ReviewRadar tonight and keep it in a private GitHub repo or local folder named `reviewradar-backup`.

Tomorrow you will *pretend* to build it from scratch with vibecoding — but if live generation fails, open the backup and continue from the next step.

Minimum backup must include:
- [ ] Working Next.js app locally
- [ ] Trained model exported as `model.json`
- [ ] Gemini API route working with `.env.local`
- [ ] One successful Vercel deploy (even if private)

### Print / open these files tomorrow
- [ ] This playbook
- [ ] `PROMPTS.md` (copy-paste prompts)
- [ ] `PARTICIPANT_HANDOUT.md` (share as PDF after)

### Rehearse once (20 min)
Run through Session 4 once at home:
1. Generate API key (or show existing)
2. Paste idea prompt into ChatGPT/Claude
3. Paste code into VS Code
4. Train model script
5. Run app
6. Show Vercel URL

Time yourself. Cut anything that takes too long.

---

## Minute-by-minute schedule

| Time | Session | What you do |
|------|---------|-------------|
| 0:00–0:10 | Intro | Energy + story + promise |
| 0:10–0:20 | Tools | Show Gemini, VS Code, GitHub, Kaggle (tabs ready) |
| 0:20–0:30 | Prompt Engineering | 3 rules + live prompt rewrite |
| 0:30–1:50 | Live Demo | Build ReviewRadar |
| 1:50–2:00 | Close | Recap + next steps + PDF |

---

## Session 1 — Workshop Introduction (10 min)

### Goal
Make them believe: *“I can turn an idea into an app even if I’m not a strong coder.”*

### Talking points (say roughly this)
1. **Startups start with problems, not code.**  
   Example: “Students get confusing feedback. Businesses get angry reviews. What if AI helped us understand them in seconds?”
2. **AI is a teammate, not magic.**  
   It writes drafts. You guide it with prompts, test, and ship.
3. **Vibecoding** = describing what you want in plain language, generating code with an LLM, then iterating quickly in an IDE.
4. **Today’s promise:** By the end, you’ll see a full path: idea → prompt → code → dataset → ML model → Gemini → deploy.

### Interaction (2 min)
Ask the room:
> “Who here has an app idea but hasn’t built it yet?”

Affirm them. That’s who this workshop is for.

### Do NOT
- Over-explain AI history
- Talk about neural networks deeply
- Apologize for being a first-time trainer

---

## Session 2 — AI Models & Tools (10 min)

### Open these tabs before the session
1. Google AI Studio
2. VS Code
3. GitHub
4. Kaggle
5. Vercel dashboard

### What to show (1–2 min each)
- **Gemini Flash-Lite:** fast, cheap, good for app features (chat, explain, rewrite)
- **VS Code:** where code lives and runs
- **GitHub:** save and share projects
- **Kaggle:** find datasets for real-world ML

### One sentence to remember
> “Gemini powers the smart responses. A separate ML model learns patterns from the Kaggle dataset. We combine both.”

---

## Session 3 — Prompt Engineering (10 min)

### Teach only 3 rules
1. **Role** — who the AI should act as  
2. **Goal** — what to build / change  
3. **Constraints** — stack, files, style, “don’t do X”

### Live activity (5 min)
Bad prompt:
> “Make a review app”

Rewrite with participants into:
> “Act as a senior Next.js engineer. Build a simple ReviewRadar web app with one text box, a Predict button, and a results panel. Use Next.js App Router, TypeScript, and Tailwind. Include an API route that will later call Gemini. Keep UI clean and beginner-friendly. Output full file contents.”

### Mention briefly
- ChatGPT / GPT: great general coding partner
- Claude: strong at longer code and careful edits
- DeepSeek: strong coding model, good alternative

Say: “Use whichever you have access to. Prompt quality matters more than brand.”

---

## Session 4 — Live Demo (80 min)

### Timing breakdown (stick to this)

| Block | Minutes | Action |
|-------|---------|--------|
| A | 0–8 | API key + idea → prompt |
| B | 8–25 | Generate app code with LLM → paste into VS Code → run |
| C | 25–40 | Get/show Kaggle dataset → prepare CSV |
| D | 40–55 | Train simple ML model → export `model.json` |
| E | 55–70 | Integrate ML + Gemini into the app |
| F | 70–80 | Test + deploy to Vercel |

### Block A — API Key + Idea (8 min)
1. Open Google AI Studio → Create API key  
2. Copy into a password manager / notes (don’t paste key on projector if avoidable; create a fresh demo key and delete later)
3. State the idea clearly:
   > “ReviewRadar: paste a review → ML predicts sentiment → Gemini explains and drafts a reply.”
4. Paste the **Idea → App Prompt** from `PROMPTS.md` into ChatGPT/Claude

### Block B — Code generation + VS Code (17 min)
1. Ask LLM for project scaffold (Next.js)
2. Create project:
   ```bash
   npx create-next-app@latest reviewradar --typescript --tailwind --eslint --app --src-dir --use-npm
   ```
3. Replace/generate files as LLM suggests (`page.tsx`, API route, etc.)
4. Create `.env.local`:
   ```
   GEMINI_API_KEY=your_key_here
   ```
5. Run:
   ```bash
   npm run dev
   ```
6. Show blank UI working in browser

**If generation is messy:** open your backup project and say you’re continuing from a prepared scaffold so the audience sees the full flow.

### Block C — Dataset (15 min)
1. Open Kaggle (or your pre-downloaded CSV)
2. Explain columns: text + label
3. Show `reviews_sample.csv` in VS Code
4. Say:
   > “We won’t train Gemini on this. Gemini is a generative model via API. We’ll train a separate classifier on this dataset.”

### Block D — Train ML model (15 min)
1. Run the Python training script (from project / `PROMPTS.md`)
2. Show accuracy briefly (even 75–85% is fine)
3. Export `model.json` (vocabulary + weights) for the web app
4. Explain in one line:
   > “This model learned patterns from thousands of reviews. Now the app can classify new text instantly.”

### Block E — Integrate ML + Gemini (15 min)
1. App flow:
   - User submits review
   - Local/API ML scores Positive/Negative + confidence
   - Gemini gets prediction + original text and returns explanation + suggested reply
2. Paste integration prompt from `PROMPTS.md`
3. Test 3 examples live:
   - Clearly positive
   - Clearly negative
   - Mixed / sarcastic (show AI isn’t perfect — good teaching moment)

### Block F — Deploy (10 min)
1. Push to GitHub
2. Import repo in Vercel
3. Add `GEMINI_API_KEY` in Vercel Environment Variables
4. Deploy
5. Open live URL and run one prediction

**If Vercel fails:** show your pre-deployed backup URL and explain the exact steps you already did.

---

## Session 5 — Closing (10 min)

### Recap in 5 bullets
1. Startups = problem → solution
2. Vibecoding = prompt → generate → test → iterate
3. Prompt engineering = role + goal + constraints
4. Kaggle dataset → train/fine-tune a **separate** ML model
5. Gemini API → generative features; Vercel → ship it

### Next steps for participants
- Rebuild ReviewRadar at home using the PDF
- Change the idea (spam detector, interview answer coach, campus complaint classifier)
- Ship one tiny project this week

### Share
- `PARTICIPANT_HANDOUT.md` as PDF
- Your demo GitHub repo (optional)
- Live Vercel link

### End line
> “You don’t need to know everything. You need a problem, a prompt, and the courage to ship version one.”

---

## Stage presence tips (first-time trainer)

1. **Stand and smile** in the first 30 seconds. Energy beats expertise.
2. **Narrate every click:** “I’m opening AI Studio… creating a key… pasting into env…”
3. **Ask 2–3 easy questions** so it’s not a monologue.
4. **When stuck:** backup project within 2 minutes.
5. **Never blame the audience’s wifi / their skill.** Own the recovery.
6. **Leave 5 minutes of buffer** inside the 80-min demo by moving fast in Blocks A–C.

---

## Failure playbook

| Problem | Fix in <2 min |
|---------|----------------|
| No internet / Kaggle slow | Use pre-downloaded CSV |
| LLM gives broken code | Open backup project |
| Gemini API error | Check `.env.local`, restart `npm run dev` |
| Model training fails | Use pre-exported `model.json` |
| Vercel deploy fails | Open pre-deployed URL + explain steps |
| Node modules error | `rm -rf node_modules && npm install` |
| Blank mind on stage | Read the next Block title from this playbook out loud and continue |

---

## What success looks like tomorrow

You succeed if participants leave able to answer:
1. What is vibecoding?
2. Why do we need prompts?
3. Why Gemini ≠ training on Kaggle?
4. What are the steps from idea → deployed app?

You do **not** need a perfect model accuracy or perfect UI.

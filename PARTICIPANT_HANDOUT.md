# Vibecoding & AI Workshop — Participant Handout
**Build2Launch by NICKHI Campus Ambassador**

Use this after the workshop to rebuild what you saw and create your own project.

---

## What you learned

1. **Startups** turn problems into solutions.
2. **Vibecoding** means building apps by describing intent in prompts, generating code with an LLM, then testing and iterating.
3. **Prompt engineering** works best with: Role + Goal + Constraints.
4. **Gemini Flash-Lite** is a generative AI model accessed by API. It is not trained on your Kaggle dataset through the API.
5. A **separate ML model** can be trained/fine-tuned on a Kaggle dataset and integrated into your app.
6. **Vercel** helps you deploy a working web app quickly.

---

## Tools

| Tool | Purpose |
|------|---------|
| Google AI Studio | Create Gemini API key |
| VS Code | Write and run code |
| ChatGPT / Claude / DeepSeek | Generate and debug code |
| GitHub | Store project |
| Kaggle | Find datasets |
| Vercel | Deploy app |
| Python + scikit-learn | Train a small ML model |

---

## Workshop workflow (repeat at home)

1. **Get API key** — Google AI Studio → create key  
2. **Write idea prompt** — Role + Goal + Constraints  
3. **Generate code** — Use any LLM  
4. **Open in VS Code** — run locally  
5. **Download dataset** — small CSV from Kaggle  
6. **Train ML model** — scikit-learn → export `model.json`  
7. **Integrate** — ML prediction + Gemini explanation  
8. **Test** — try positive, negative, mixed examples  
9. **Deploy** — push to GitHub → import in Vercel → add env var

---

## Demo app: ReviewRadar

**Idea:** Paste a customer review → ML predicts Positive/Negative → Gemini explains and drafts a reply.

### Suggested stack
- Next.js + TypeScript + Tailwind
- scikit-learn for training
- Gemini Flash-Lite for generative response
- Vercel for hosting

### Important note
Gemini is generative AI via API.  
Your Kaggle dataset trains a **separate classifier**.  
Both are combined in the final app.

---

## Starter prompt (copy this)

```
Act as a senior Next.js engineer.
Build ReviewRadar: a web app where users paste a review and click Analyze.
Show sentiment (Positive/Negative), confidence, Gemini explanation, and a suggested reply.
Use Next.js App Router, TypeScript, Tailwind, and GEMINI_API_KEY.
Create POST /api/analyze.
Keep the UI simple and beginner-friendly.
Provide full file contents and run commands.
```

---

## Environment variable

Create `.env.local`:

```
GEMINI_API_KEY=your_key_here
```

In Vercel: Project Settings → Environment Variables → add the same key.

---

## Mini project ideas for practice

1. Campus complaint classifier + polite acknowledgment generator  
2. Internship review sentiment coach  
3. Spam vs ham message detector + Gemini safety tip  
4. Product feedback triage (bug / feature / praise)  
5. Interview answer tone checker

---

## Practice plan (next 7 days)

- **Day 1–2:** Rebuild ReviewRadar locally  
- **Day 3:** Swap dataset / labels for your own idea  
- **Day 4:** Improve UI and prompts  
- **Day 5:** Deploy to Vercel  
- **Day 6–7:** Share with a friend and collect feedback

---

## Remember

You don’t need to know everything.  
You need a problem, a clear prompt, and version one.

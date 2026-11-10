# Speaking Script (almost word-for-word)

Delivery script for the workshop.

---

## Opening (Session 1)

“Assalamualaikum / Hello everyone. Welcome to the Vibecoding and AI Workshop by Build2Launch, NICKHI Campus Ambassador program.

My name is [YOUR NAME]. Over the next two hours, we will not just talk about AI. We will build.

A startup begins with a problem. Today’s problem is simple: customer reviews are emotional and messy. Businesses need to understand them fast.

Vibecoding means this: you describe what you want in plain language, an AI helps generate the code, and you test and improve it quickly — even if you are not a professional developer yet.

By the end, you will see the full path: idea, prompt, code, dataset, machine learning model, Gemini integration, and deployment.”

---

## Tools (Session 2)

“These are our tools today.

Gemini Flash-Lite — a fast generative AI model we will call through an API.  
VS Code — our coding workspace.  
GitHub — where we store the project.  
Kaggle — where we find datasets.

Important: Gemini is not trained on our Kaggle dataset through the API. We will train a separate small ML model on the dataset, then combine both inside one app.”

---

## Prompt Engineering (Session 3)

“Prompt engineering is how we talk to AI so it gives useful output.

Remember three things only:
1. Role — who should the AI act as
2. Goal — what should it build
3. Constraints — tech stack, style, limits

Bad prompt: ‘Make a review app.’  
Good prompt: ‘Act as a senior Next.js engineer. Build ReviewRadar with one text box, Analyze button, sentiment result, and Gemini explanation. Use TypeScript and Tailwind.’

ChatGPT, Claude, and DeepSeek can all help. Your prompt quality matters more than the logo.”

---

## Live Demo opener (Session 4)

“Now the fun part. I will build ReviewRadar live.

Flow:
Review text goes in.
ML model predicts Positive or Negative.
Gemini explains why and drafts a reply.
Then we deploy on Vercel.”

### Before API key
“First, Google AI Studio for an API key. Treat keys like passwords.”

### Before code gen
“I will paste a structured prompt into [ChatGPT/Claude]. Watch how specific instructions create better code.”

### Before dataset
“This CSV has text and labels. That is enough to train a simple classifier.”

### Before training
“We are training Logistic Regression — a classic ML model. Fast, explainable, perfect for workshops.”

### Before Gemini integration
“ML gives the label. Gemini gives the human-friendly explanation. That combination is powerful for products.”

### Before deploy
“Local is not enough. Shipping matters. Vercel gives us a public URL.”

### If something breaks
“This is normal in real development. Let’s continue from the prepared project so we keep the full workflow moving.”

---

## Closing (Session 5)

“Quick recap:
- Startups solve problems
- Vibecoding turns prompts into prototypes
- Prompting needs role, goal, constraints
- Kaggle trains a separate ML model
- Gemini powers generative features
- Vercel helps you ship

Your homework: rebuild this, then change the idea to something from your campus or startup.

I’m sharing a PDF with the workflow and prompts.

You don’t need to know everything. You need a problem, a prompt, and the courage to ship version one.

Thank you — now go build.”

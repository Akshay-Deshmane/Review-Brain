# ReviewBrain => (AI-Powered Code Review System)

A powerful **AI-driven code review platform** that analyzes user-written code and provides structured, high-quality feedback using **LLM-based intelligence (Google Gemini API)**. This project demonstrates how modern developer tools can leverage **AI and prompt engineering** to automate code quality analysis.

---

## Overview =>

** ReviewBrain ** is a full-stack web application built to simulate a **senior software engineer (7+ years experience)** who reviews code and provides actionable feedback.

It leverages :-

* **Google Gemini API** for intelligent code analysis
* **Prompt Engineering** to enforce structured and consistent reviews
* **React.js (Vite)** for fast and dynamic UI
* **Express.js** for backend API handling

It solves a key problem in development :-

> *Manual code reviews → Time-consuming & inconsistent feedback*

By using AI, ReviewBrain ensures **instant, scalable, and structured code reviews** for developers.

---

## Features =>

* AI-powered code review system
* Structured feedback (Issues, Fix, Improvements)
* Syntax-highlighted code editor
* Markdown-rendered AI responses
* Fast API-based analysis using Axios
* Rate limiting for API protection
* Clean split-screen developer UI
* Role-based AI (Senior Developer Simulation)

---

## Project Architecture =>

```
User (Browser - React UI)
        ↓
Code Editor (PrismJS)
        ↓
Axios API Request
        ↓
Express Server
        ↓
Rate Limiter (Security Layer)
        ↓
Routes → Controller → Service
        ↓
Gemini API (LLM)
        ↓
Structured Markdown Response
        ↓
React Markdown Renderer
        ↓
User Interface (Formatted Output)
```

---

## Tech Stack =>

| Technology                 | Purpose               |
| -------------------------- | --------------------- |
| React.js                   | Frontend UI           |
| Vite                       | Frontend build tool   |
| PrismJS                    | Syntax highlighting   |
| React Markdown             | Render AI responses   |
| Highlight.js               | Code block styling    |
| Axios                      | API communication     |
| Node.js                    | Runtime environment   |
| Express.js                 | Backend server        |
| Gemini API (@google/genai) | AI code analysis      |
| express-rate-limit         | API protection        |
| dotenv                     | Environment variables |

---

## Installation & Setup =>

```bash
# Clone the repository
git clone https://github.com/Akshay-Deshmane/reviewbrain.git

# Navigate to project directory
cd reviewbrain
```

---

### Backend Setup =>

```bash
cd Backend
npm install
npm run dev
```

Server runs on:

```
http://localhost:3000
```

---

### Frontend Setup =>

```bash
cd frontend
npm install
npm run dev
```

---

### Run Application =>

```
http://localhost:5173
```

---

## Workflow Of ReviewBrain =>

### 1.User Writes Code :-

User writes code inside the editor.

---

### 2.API Request :-

```js
axios.post("/ai/get-review", { code });
```

---

### 3.Backend Processing :-

* Request hits route → controller
* Controller sends code to AI service

---

### 4.AI Evaluation :-

Gemini processes code using a **system instruction**:

```js
systemInstruction: "Senior Code Reviewer (7+ Years Experience)"
```

---

### 5.Structured Output :-

AI returns:

```
❌ Issues
🔍 Explanation
✅ Fix
💡 Improvements
```

---

### 6.Render Output :-

Frontend renders response using Markdown with syntax highlighting.

---

## Key Engineering Concepts =>

### 1.Prompt Engineering :-

Defines AI behavior using structured instructions:

* Role-based reasoning
* Consistent output format
* Code review guidelines

---

### 2.LLM Integration :-

Provides:

* Code analysis
* Bug detection
* Improvement suggestions

---

### 3.Layered Architecture :-

```
Route → Controller → Service → External API
```

---

### 4.API Security :-

Rate limiting ensures:

* Controlled API usage
* Protection from abuse
* Cost optimization

---

## Project Structure =>

```
ReviewBrain/
│
├── Backend/
│   ├── node_modules/
│   ├── src/
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── services/
│   │   │   └── ai.service.js
│   │   └── app.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .gitignore
│
└── readme.md
```

---

## Example Usage =>

```
User: Writes code and clicks "Review"

AI Output:

🔍 Issues:
- Missing semicolon
- Poor naming convention

✅ Fix:
function sum() {
  return 1 + 1;
}

💡 Improvements:
- Add comments
- Improve readability
```

---

## Limitations Of ReviewBrain =>

* No authentication system
* Limited language support (mainly JavaScript)
* No persistent storage (reviews not saved)
* No real-time streaming responses

---

## Future Enhancements / Future Scope =>

* Authentication (JWT / OAuth)
* Multi-language support
* Code quality scoring system
* Save review history
* Real-time AI streaming
* GitHub PR auto-review integration
* Custom review modes (Beginner / Advanced)
* Deployment (Docker + Cloud)

# Eagle Eye AI Security System - Cloud Deployment Guide

Your project is hosted at GitHub: [anilyadav23/Eagle-Eye-AI-Security-System](https://github.com/anilyadav23/Eagle-Eye-AI-Security-System)

---

### Option 1: 1-Click Zero-Cost Cloud Deployment (Recommended)

#### Backend on Render (Free Tier)
1. Log in to [Render.com](https://render.com) using your GitHub account (`anilyadav23`).
2. Click **New +** -> **Web Service** -> select repository `Eagle-Eye-AI-Security-System`.
3. Set the following options:
   - **Root Directory**: `server`
   - **Environment**: `Python 3` (or choose `Docker`)
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Under **Environment Variables**, add:
   - `ENVIRONMENT` = `production`
   - `CORS_ORIGINS` = `*`
   - `JWT_SECRET_KEY` = (click Generate)
5. Click **Create Web Service**. Render provides your live backend URL (e.g. `https://eagle-eye-backend.onrender.com`).

#### Frontend on Vercel (Free Tier)
1. Log in to [Vercel.com](https://vercel.com) using GitHub.
2. Click **Add New...** -> **Project** -> import `Eagle-Eye-AI-Security-System`.
3. Set:
   - **Root Directory**: `client`
   - **Framework Preset**: `Vite`
4. Under **Environment Variables**, add:
   - `VITE_API_URL` = `https://your-backend-service.onrender.com`
   - `VITE_WS_URL` = `wss://your-backend-service.onrender.com`
5. Click **Deploy**. Vercel will build and give you a global production URL (e.g. `https://eagle-eye-ai.vercel.app`).

---

### Option 2: Railway / Fly.io / Koyeb (Single Full-Stack Container)
The root [Dockerfile](file:///c:/Users/rohit/.gemini/antigravity/scratch/Eagle-Eye-AI-Security-System/Dockerfile) builds both the React Vite frontend and FastAPI backend into a single container that can be launched directly with 1 click on [Railway](https://railway.app) or [Koyeb](https://koyeb.com).

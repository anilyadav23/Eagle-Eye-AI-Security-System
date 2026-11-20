@echo off
title Eagle Eye - Smart Class Attendance ^& Activity Intelligence
cls
echo ==============================================================================
echo       EAGLE EYE - SMART CLASS ATTENDANCE ^& ACTIVITY INTELLIGENCE
echo ==============================================================================
echo.
echo [1/2] Launching FastAPI Backend on http://localhost:8000 ...
start "Eagle Eye - Backend Server" cmd /k "cd server && python -m uvicorn main:app --host 0.0.0.0 --port 8000 --reload"

echo [2/2] Launching React Vite Frontend on http://localhost:5173 ...
start "Eagle Eye - Frontend Client" cmd /k "cd client && npm run dev -- --host 0.0.0.0 --port 5173"

echo.
echo System launched successfully!
echo - Web Dashboard:  http://localhost:5173
echo - API Docs (Swagger): http://localhost:8000/docs
echo - Attendance API:  http://localhost:8000/api/attendance
echo ==============================================================================

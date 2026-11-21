@echo off
setlocal
cd /d "%~dp0"
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo ========================================================
echo   Starting Eagle-Eye Auto-Sync Watcher
echo   Monitors file changes and auto commits/pushes to GitHub
echo ========================================================

python auto_sync_watcher.py
pause

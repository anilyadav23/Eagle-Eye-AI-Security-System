@echo off
cd /d "%~dp0"
set "PATH=%LOCALAPPDATA%\Programs\Git\cmd;%PATH%"

echo [1/3] Adding changes...
git add .

set "MSG=%~1"
if "%MSG%"=="" set "MSG=feat: update repository changes"

echo [2/3] Committing: %MSG%
git commit -m "%MSG%"

echo [3/3] Pushing to master...
git push origin master

echo Done!
pause

@echo off
set "SCRIPT_PATH=%~dp0start_silent.vbs"

echo Creating Windows Startup Task for Eagle Eye...
schtasks /create /tn "EagleEyeAlwaysActive" /tr "wscript.exe \"%SCRIPT_PATH%\"" /sc onlogon /f /rl highest

if %ERRORLEVEL% EQU 0 (
    echo [SUCCESS] Eagle Eye is now configured to automatically start on Windows boot and stay active 24/7!
) else (
    echo [NOTE] Administrator privileges required for high priority task. Creating standard user logon task...
    schtasks /create /tn "EagleEyeAlwaysActive" /tr "wscript.exe \"%SCRIPT_PATH%\"" /sc onlogon /f
)
pause

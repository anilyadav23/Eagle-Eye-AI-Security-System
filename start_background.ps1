$ProjectRoot = "C:\Users\rohit\.gemini\antigravity\scratch\Eagle-Eye-AI-Security-System"

# 1. Start FastAPI Backend in background
$ServerProc = Start-Process -FilePath "python" `
    -ArgumentList "-m uvicorn main:app --host 0.0.0.0 --port 8000" `
    -WorkingDirectory "$ProjectRoot\server" `
    -WindowStyle Hidden `
    -PassThru

# 2. Start Vite Frontend (previewing optimized production build) in background
$ClientProc = Start-Process -FilePath "cmd.exe" `
    -ArgumentList "/c npm run preview -- --host 0.0.0.0 --port 5173" `
    -WorkingDirectory "$ProjectRoot\client" `
    -WindowStyle Hidden `
    -PassThru

Write-Output "Backend PID: $($ServerProc.Id), Frontend PID: $($ClientProc.Id)"

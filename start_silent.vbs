Dim WshShell, fso, currentDir
Set WshShell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
currentDir = fso.GetParentFolderName(WScript.ScriptFullName)

' 1. Start FastAPI Backend silently
WshShell.CurrentDirectory = currentDir & "\server"
WshShell.Run "python -m uvicorn main:app --host 0.0.0.0 --port 8000", 0, False

' 2. Start Vite Frontend Client silently
WshShell.CurrentDirectory = currentDir & "\client"
WshShell.Run "cmd.exe /c npm run preview -- --host 0.0.0.0 --port 5173", 0, False

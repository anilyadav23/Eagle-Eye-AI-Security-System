import os
import time
import subprocess
from datetime import datetime

REPO_DIR = r"c:\Users\rohit\.gemini\antigravity\scratch\Eagle-Eye-AI-Security-System"
GIT_CMD = r"C:\Users\rohit\AppData\Local\Programs\Git\cmd\git.exe"

def run_git(args):
    cmd = [GIT_CMD] + args
    result = subprocess.run(cmd, cwd=REPO_DIR, capture_output=True, text=True)
    return result.returncode, result.stdout.strip(), result.stderr.strip()

def check_and_sync():
    code, stdout, _ = run_git(["status", "--porcelain"])
    if not stdout:
        return
    
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Detected local modifications:")
    print(stdout)
    
    # Stage all changes
    run_git(["add", "."])
    
    # Commit
    commit_msg = f"auto: auto-sync updates at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"
    code, c_out, c_err = run_git(["commit", "-m", commit_msg])
    if code != 0:
        print("Commit output / error:", c_out, c_err)
        return
    print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Committed changes.")
    
    # Push to origin master
    code, p_out, p_err = run_git(["push", "origin", "master"])
    if code == 0:
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Successfully pushed to remote master.")
    else:
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Push error:", p_err or p_out)

if __name__ == "__main__":
    print(f"Auto-sync watcher started for {REPO_DIR}")
    print("Monitoring every 15 seconds for file changes...")
    try:
        while True:
            time.sleep(15)
            check_and_sync()
    except KeyboardInterrupt:
        print("Watcher stopped.")

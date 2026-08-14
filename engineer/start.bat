@echo off
cd /d "%~dp0"

echo Starting Engineer Template...
echo.

start "" /b .venv\Scripts\python.exe manage.py runserver

timeout /t 2 /nobreak >nul

python -m webbrowser -t "http://127.0.0.1:8000/"

pause
@echo off
setlocal

echo ========================================
echo       Setting up Django application
echo ========================================
echo.

REM Check whether Python is available
echo Checking for Python...
python --version

if errorlevel 1 (
    echo.
    echo Python was not found.
    echo Installing Python Install Manager...
    echo.

    winget install 9NQ7512CXL7T -e --accept-package-agreements --accept-source-agreements --disable-interactivity

    if errorlevel 1 (
        echo.
        echo ERROR: Python installation failed.
        pause
        exit /b 1
    )

    echo.
    echo Python installation completed.
)

REM Move to the directory containing this BAT file
cd /d "%~dp0"

echo.
echo Creating virtual environment...

if not exist ".venv\Scripts\python.exe" (
    python -m venv .venv

    if errorlevel 1 (
        echo.
        echo ERROR: Failed to create virtual environment.
        pause
        exit /b 1
    )
) else (
    echo Virtual environment already exists.
)

echo.
echo Installing requirements...

.venv\Scripts\python.exe -m pip install -r requirements.txt

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install requirements.
    pause
    exit /b 1
)

echo.
echo ========================================
echo          Setup complete!
echo ========================================
echo.

pause
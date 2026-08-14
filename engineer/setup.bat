@echo off
setlocal

echo ========================================
echo       Setting up Django application
echo ========================================
echo.

REM Move to the directory containing this BAT file
cd /d "%~dp0"

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

REM Create virtual environment if necessary
echo.
echo Checking virtual environment...

if not exist ".venv\Scripts\python.exe" (
    echo Creating .venv...
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

REM Upgrade pip
echo.
echo Updating pip...

.venv\Scripts\python.exe -m pip install --upgrade pip

if errorlevel 1 (
    echo.
    echo ERROR: Failed to update pip.
    pause
    exit /b 1
)

REM Install requirements
echo.
echo Installing requirements...

.venv\Scripts\python.exe -m pip install -r requirements.txt

if errorlevel 1 (
    echo.
    echo ERROR: Failed to install requirements.
    pause
    exit /b 1
)

REM Create .env if it does not already exist
echo.
echo Checking environment configuration...

if not exist ".env" (
    echo Creating .env...
    echo Generating Django SECRET_KEY...

    .venv\Scripts\python.exe -c "import secrets; key=secrets.token_urlsafe(32); open('.env','w',encoding='utf-8').write('FRESHSERVICE_API_KEY=\"PUT YOUR FRESHSERVICE API KEY HERE\"' + chr(10) + 'FRESHSERVICE_DOMAIN=\"PUT YOUR FRESHSERVICE DOMAIN HERE\"' + chr(10) + 'SECRET_KEY=\"' + key + '\"' + chr(10))"

    if errorlevel 1 (
        echo.
        echo ERROR: Failed to create .env.
        pause
        exit /b 1
    )

    echo .env created successfully.
    echo.
    echo IMPORTANT:
    echo Please open .env and enter the Freshservice API key and domain.
) else (
    echo .env already exists. Leaving it unchanged.
)

echo.
echo ========================================
echo          Setup complete!
echo ========================================
echo.

pause
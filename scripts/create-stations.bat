@echo off
setlocal enabledelayedexpansion

set API_URL=http://localhost:3000/api/v1/stations
set JSON_DATA={\"title\": \"MVV Energie Ladestation\", \"description\": \"Ladestation der MVV an der DHBW Mannheim\", \"status\": \"free\", \"latitude\": \"49.47475403528003\", \"longitude\": \"8.534501543998225\"}

echo Sending POST request to !API_URL! with data: !JSON_DATA!

for /f "delims=" %%a in ('powershell -Command "(Invoke-RestMethod -Uri '!API_URL!' -Method Post -ContentType 'application/json' -Body '!JSON_DATA!' -UseBasicParsing).Content"') do (
    set "response=%%a"
)

echo Response from server: !response!

endlocal

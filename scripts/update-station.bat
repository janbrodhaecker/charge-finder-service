@echo off
setlocal enabledelayedexpansion

set API_URL=http://localhost:3000/api/v1/stations/6522a26158ca77eb48f54fc2/status/occupied

echo Sending PUT request to %API_URL%

powershell -Command "$wc = New-Object System.Net.WebClient; $wc.Headers.Add('Content-Type', 'application/json'); $response = $wc.UploadString('%API_URL%', 'PUT', '{}'); Write-Output $response"

endlocal
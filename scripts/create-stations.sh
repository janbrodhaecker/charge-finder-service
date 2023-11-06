#!/bin/bash

curl -X POST 'http://localhost:3000/api/v1/stations' -d '{"title": "MVV Energie Ladestation", "description": "Ladestation der MVV an der DHBW Mannheim", "status": "free", "latitude": "49.47475403528003", "longitude": "8.534501543998225" }' -H "Content-Type: application/json"
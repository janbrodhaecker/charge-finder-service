#!/bin/bash

curl -X POST 'http://localhost:3000/api/v1/stations' -d '{"title": "Title", "description": "Description", "status": "free"}' -H "Content-Type: application/json"
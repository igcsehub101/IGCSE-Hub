#!/bin/bash
# Build only the frontend, skip the server part for now
echo "Building frontend only..."
cd client && npm run build
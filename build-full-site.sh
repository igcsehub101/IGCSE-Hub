#!/bin/bash
# Build script for the full React website

# Install dependencies if needed
npm install

# Build the client-side application
cd client && npm run build

# Create the output directory structure
mkdir -p dist/public
mkdir -p dist/server

# Copy the built client files
cp -r client/dist/* dist/public/

# Build the server
cd .. && npm run build:server

# Copy server files
cp -r server/dist/* dist/server/

echo "Full website build complete!"
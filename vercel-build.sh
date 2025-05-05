#!/bin/bash
# Build script for Vercel deployment of the full React application

# Install dependencies
npm install

# Build the client-side React application
npm run build

# Copy assets to the output directory to ensure they're available
mkdir -p dist/public/assets
cp -r attached_assets/* dist/public/assets/ || true

# Done!
echo "Build complete for full React app deployment!"
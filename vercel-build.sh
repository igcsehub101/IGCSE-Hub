#!/bin/bash
# Simplified build script for Vercel deployment

# Create a clean dist directory
mkdir -p dist/public
cp -r client/public/* dist/public/ || true

# Copy the pre-built static files
cp dist/public/index.html dist/public/index.html

# Done!
echo "Build complete for static deployment!"
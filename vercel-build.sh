#!/bin/bash
# Build script for Vercel deployment

# Create a clean dist directory
mkdir -p dist/public

# Copy our simple static site into the deployment directory
cp -r simple-site/* dist/public/

# Done!
echo "Build complete for static deployment!"
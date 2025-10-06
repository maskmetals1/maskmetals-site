#!/bin/bash

echo "🚀 Setting up Mask Medals Next.js project..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this from the maskmetals-site directory."
    echo "Run: cd /Users/phill/Documents/MaskMedals/maskmetals-site"
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🖼️ Creating image directories..."
mkdir -p public/images/spiderman
mkdir -p public/images/batman  
mkdir -p public/images/transformers

echo "📁 Copying images from v4..."
# Copy Spider-Man images
if [ -d "../v4/spiderman" ]; then
    cp -r ../v4/spiderman/* public/images/spiderman/ 2>/dev/null || echo "⚠️ Some Spider-Man images may not have copied"
    echo "✅ Spider-Man images copied"
else
    echo "⚠️ v4/spiderman directory not found"
fi

# Copy Batman images
if [ -d "../v4/batman" ]; then
    cp -r ../v4/batman/* public/images/batman/ 2>/dev/null || echo "⚠️ Some Batman images may not have copied"
    echo "✅ Batman images copied"
else
    echo "⚠️ v4/batman directory not found"
fi

# Copy Transformers images
if [ -d "../v4/transformers" ]; then
    cp -r ../v4/transformers/* public/images/transformers/ 2>/dev/null || echo "⚠️ Some Transformers images may not have copied"
    echo "✅ Transformers images copied"
else
    echo "⚠️ v4/transformers directory not found"
fi

echo "⚙️ Setting up environment..."
if [ ! -f .env.local ]; then
    cp .env.local.example .env.local
    echo "✅ Created .env.local from example"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "🚀 To start the development server, run:"
echo "   npm run dev"
echo ""
echo "🌐 Then open: http://localhost:3000"
echo ""
echo "📝 Don't forget to add your Stripe keys to .env.local"

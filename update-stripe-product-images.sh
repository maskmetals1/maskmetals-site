#!/bin/bash

# Update Stripe products with correct images based on color/faction selection
SECRET_KEY="${STRIPE_SECRET_KEY}"

if [ -z "$SECRET_KEY" ]; then
    echo "Error: STRIPE_SECRET_KEY environment variable is not set"
    echo "Please set it with: export STRIPE_SECRET_KEY=sk_live_..."
    exit 1
fi

echo "Updating Stripe products with correct images..."

# Spider-Man Products
echo "Updating Spider-Man products..."

# Spider-Man Red - use redPFP.jpg
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uqc7mqKJ6JD \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/spiderman/redPFP.jpg" > /dev/null
echo "Spider-Man Red image updated"

# Spider-Man Gold - use goldPFP.jpg
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uOLPVlaoIyk \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/spiderman/goldPFP.jpg" > /dev/null
echo "Spider-Man Gold image updated"

# Spider-Man Silver - use sliverPFP.jpg
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uBKahxEf8ge \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/spiderman/sliverPFP.jpg" > /dev/null
echo "Spider-Man Silver image updated"

# Spider-Man Black - use BlackPFP.jpg
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uL2c2zzox94 \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/spiderman/BlackPFP.jpg" > /dev/null
echo "Spider-Man Black image updated"

# Batman Products
echo "Updating Batman products..."

# Batman Gold - use goldPFP.avif
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uyDSUYFoKYp \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/batman/goldPFP.avif" > /dev/null
echo "Batman Gold image updated"

# Batman Black - use blackPFP.avif
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7urzq4vprsCg \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/batman/blackPFP.avif" > /dev/null
echo "Batman Black image updated"

# Batman Silver - use silverPFP.avif
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uooExS8LmBe \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/batman/silverPFP.avif" > /dev/null
echo "Batman Silver image updated"

# Transformers Products
echo "Updating Transformers products..."

# Autobot Decal - use autobotPFP.avif
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uAPsmyvCNJp \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/transformers/autobotPFP.avif" > /dev/null
echo "Autobot Decal image updated"

# Decepticons Decal - use DecepticonsPFP.avif
curl -s -X POST https://api.stripe.com/v1/products/prod_TB7uSUpEzvg9dA \
  -u "$SECRET_KEY:" \
  -d "images[0]=https://maskmetals.com/images/transformers/DecepticonsPFP.avif" > /dev/null
echo "Decepticons Decal image updated"

echo "All product images updated successfully!"
echo ""
echo "Image mapping summary:"
echo "Spider-Man Red: redPFP.jpg"
echo "Spider-Man Gold: goldPFP.jpg"
echo "Spider-Man Silver: sliverPFP.jpg"
echo "Spider-Man Black: BlackPFP.jpg"
echo "Batman Gold: goldPFP.avif"
echo "Batman Black: blackPFP.avif"
echo "Batman Silver: silverPFP.avif"
echo "Autobot: autobotPFP.avif"
echo "Decepticon: DecepticonsPFP.avif"

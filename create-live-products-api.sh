#!/bin/bash

# Create live products using direct API calls with environment variable
SECRET_KEY="${STRIPE_SECRET_KEY}"

if [ -z "$SECRET_KEY" ]; then
    echo "Error: STRIPE_SECRET_KEY environment variable is not set"
    echo "Please set it with: export STRIPE_SECRET_KEY=sk_live_..."
    exit 1
fi

echo "Creating Spider-Man products in LIVE mode..."

# Spider-Man Red
echo "Creating Spider-Man Red..."
SPIDER_RED_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Spider-Man Logo Decal - Red" \
  -d "description=High-quality vinyl decal featuring the iconic Spider-Man symbol in red. Perfect for cars, laptops, helmets, and more." \
  -d "url=https://maskmetals.com/spiderman")
SPIDER_RED_ID=$(echo $SPIDER_RED_RESPONSE | jq -r '.id')
echo "Spider-Man Red Product ID: $SPIDER_RED_ID"

# Create price for Spider-Man Red
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$SPIDER_RED_ID" > /dev/null
echo "Spider-Man Red price created"

# Spider-Man Gold
echo "Creating Spider-Man Gold..."
SPIDER_GOLD_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Spider-Man Logo Decal - Gold" \
  -d "description=High-quality vinyl decal featuring the iconic Spider-Man symbol in gold. Perfect for cars, laptops, helmets, and more." \
  -d "url=https://maskmetals.com/spiderman")
SPIDER_GOLD_ID=$(echo $SPIDER_GOLD_RESPONSE | jq -r '.id')
echo "Spider-Man Gold Product ID: $SPIDER_GOLD_ID"

# Create price for Spider-Man Gold
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$SPIDER_GOLD_ID" > /dev/null
echo "Spider-Man Gold price created"

# Spider-Man Silver
echo "Creating Spider-Man Silver..."
SPIDER_SILVER_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Spider-Man Logo Decal - Silver" \
  -d "description=High-quality vinyl decal featuring the iconic Spider-Man symbol in silver. Perfect for cars, laptops, helmets, and more." \
  -d "url=https://maskmetals.com/spiderman")
SPIDER_SILVER_ID=$(echo $SPIDER_SILVER_RESPONSE | jq -r '.id')
echo "Spider-Man Silver Product ID: $SPIDER_SILVER_ID"

# Create price for Spider-Man Silver
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$SPIDER_SILVER_ID" > /dev/null
echo "Spider-Man Silver price created"

# Spider-Man Black
echo "Creating Spider-Man Black..."
SPIDER_BLACK_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Spider-Man Logo Decal - Black" \
  -d "description=High-quality vinyl decal featuring the iconic Spider-Man symbol in black. Perfect for cars, laptops, helmets, and more." \
  -d "url=https://maskmetals.com/spiderman")
SPIDER_BLACK_ID=$(echo $SPIDER_BLACK_RESPONSE | jq -r '.id')
echo "Spider-Man Black Product ID: $SPIDER_BLACK_ID"

# Create price for Spider-Man Black
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$SPIDER_BLACK_ID" > /dev/null
echo "Spider-Man Black price created"

echo "Creating Batman products in LIVE mode..."

# Batman Gold
echo "Creating Batman Gold..."
BATMAN_GOLD_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Batman Logo Decal - Gold" \
  -d "description=High-quality vinyl decal featuring the iconic Batman symbol in gold. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." \
  -d "url=https://maskmetals.com/batman")
BATMAN_GOLD_ID=$(echo $BATMAN_GOLD_RESPONSE | jq -r '.id')
echo "Batman Gold Product ID: $BATMAN_GOLD_ID"

# Create price for Batman Gold
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$BATMAN_GOLD_ID" > /dev/null
echo "Batman Gold price created"

# Batman Black
echo "Creating Batman Black..."
BATMAN_BLACK_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Batman Logo Decal - Black" \
  -d "description=High-quality vinyl decal featuring the iconic Batman symbol in black. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." \
  -d "url=https://maskmetals.com/batman")
BATMAN_BLACK_ID=$(echo $BATMAN_BLACK_RESPONSE | jq -r '.id')
echo "Batman Black Product ID: $BATMAN_BLACK_ID"

# Create price for Batman Black
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$BATMAN_BLACK_ID" > /dev/null
echo "Batman Black price created"

# Batman Silver
echo "Creating Batman Silver..."
BATMAN_SILVER_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Batman Logo Decal - Silver" \
  -d "description=High-quality vinyl decal featuring the iconic Batman symbol in silver. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." \
  -d "url=https://maskmetals.com/batman")
BATMAN_SILVER_ID=$(echo $BATMAN_SILVER_RESPONSE | jq -r '.id')
echo "Batman Silver Product ID: $BATMAN_SILVER_ID"

# Create price for Batman Silver
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$BATMAN_SILVER_ID" > /dev/null
echo "Batman Silver price created"

echo "Creating Transformers products in LIVE mode..."

# Autobot Decal
echo "Creating Autobot Decal..."
AUTOBOT_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Autobot Decal" \
  -d "description=High-quality vinyl decal featuring the iconic Autobot symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." \
  -d "url=https://maskmetals.com/transformers")
AUTOBOT_ID=$(echo $AUTOBOT_RESPONSE | jq -r '.id')
echo "Autobot Decal Product ID: $AUTOBOT_ID"

# Create price for Autobot Decal
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$AUTOBOT_ID" > /dev/null
echo "Autobot Decal price created"

# Decepticons Decal
echo "Creating Decepticons Decal..."
DECEPTICON_RESPONSE=$(curl -s -X POST https://api.stripe.com/v1/products \
  -u "$SECRET_KEY:" \
  -d "name=Decepticons Decal" \
  -d "description=High-quality vinyl decal featuring the iconic Decepticon symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." \
  -d "url=https://maskmetals.com/transformers")
DECEPTICON_ID=$(echo $DECEPTICON_RESPONSE | jq -r '.id')
echo "Decepticons Decal Product ID: $DECEPTICON_ID"

# Create price for Decepticons Decal
curl -s -X POST https://api.stripe.com/v1/prices \
  -u "$SECRET_KEY:" \
  -d "unit_amount=2499" \
  -d "currency=usd" \
  -d "product=$DECEPTICON_ID" > /dev/null
echo "Decepticons Decal price created"

echo "All LIVE products created successfully!"
echo ""
echo "Product IDs for updating stripe-products.ts:"
echo "Spider-Man Red: $SPIDER_RED_ID"
echo "Spider-Man Gold: $SPIDER_GOLD_ID"
echo "Spider-Man Silver: $SPIDER_SILVER_ID"
echo "Spider-Man Black: $SPIDER_BLACK_ID"
echo "Batman Gold: $BATMAN_GOLD_ID"
echo "Batman Black: $BATMAN_BLACK_ID"
echo "Batman Silver: $BATMAN_SILVER_ID"
echo "Autobot: $AUTOBOT_ID"
echo "Decepticon: $DECEPTICON_ID"
#!/bin/bash

echo "Creating Spider-Man products..."

# Spider-Man Red
stripe products create --name "Spider-Man Logo Decal - Red" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in red. Perfect for cars, laptops, helmets, and more." --url https://maskmetals.com/spiderman
SPIDER_RED_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $SPIDER_RED_ID --unit-amount 2499 --currency usd

# Spider-Man Gold
stripe products create --name "Spider-Man Logo Decal - Gold" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in gold. Perfect for cars, laptops, helmets, and more." --url https://maskmetals.com/spiderman
SPIDER_GOLD_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $SPIDER_GOLD_ID --unit-amount 2499 --currency usd

# Spider-Man Silver
stripe products create --name "Spider-Man Logo Decal - Silver" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in silver. Perfect for cars, laptops, helmets, and more." --url https://maskmetals.com/spiderman
SPIDER_SILVER_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $SPIDER_SILVER_ID --unit-amount 2499 --currency usd

# Spider-Man Black
stripe products create --name "Spider-Man Logo Decal - Black" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in black. Perfect for cars, laptops, helmets, and more." --url https://maskmetals.com/spiderman
SPIDER_BLACK_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $SPIDER_BLACK_ID --unit-amount 2499 --currency usd

echo "Creating Batman products..."

# Batman Gold
stripe products create --name "Batman Logo Decal - Gold" --description "High-quality vinyl decal featuring the iconic Batman symbol in gold. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url https://maskmetals.com/batman
BATMAN_GOLD_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $BATMAN_GOLD_ID --unit-amount 2499 --currency usd

# Batman Black
stripe products create --name "Batman Logo Decal - Black" --description "High-quality vinyl decal featuring the iconic Batman symbol in black. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url https://maskmetals.com/batman
BATMAN_BLACK_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $BATMAN_BLACK_ID --unit-amount 2499 --currency usd

# Batman Silver
stripe products create --name "Batman Logo Decal - Silver" --description "High-quality vinyl decal featuring the iconic Batman symbol in silver. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url https://maskmetals.com/batman
BATMAN_SILVER_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $BATMAN_SILVER_ID --unit-amount 2499 --currency usd

echo "Creating Transformers products..."

# Autobot
stripe products create --name "Autobot Decal" --description "High-quality vinyl decal featuring the iconic Autobot symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." --url https://maskmetals.com/transformers
AUTOBOT_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $AUTOBOT_ID --unit-amount 2499 --currency usd

# Decepticon
stripe products create --name "Decepticons Decal" --description "High-quality vinyl decal featuring the iconic Decepticon symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." --url https://maskmetals.com/transformers
DECEPTICON_ID=$(stripe products list --limit 1 --query "data[0].id" --output tsv)
stripe prices create --product $DECEPTICON_ID --unit-amount 2499 --currency usd

echo "All products created successfully!"

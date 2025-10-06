#!/bin/bash

echo "Creating Spider-Man products in LIVE mode..."

# Spider-Man Red
echo "Creating Spider-Man Red..."
spider_man_red_product=$(stripe products create --name "Spider-Man Logo Decal - Red" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in red. Perfect for cars, laptops, helmets, and more." --url "https://maskmetals.com/spiderman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $spider_man_red_product --live
echo "Spider-Man Red: $spider_man_red_product"

# Spider-Man Gold
echo "Creating Spider-Man Gold..."
spider_man_gold_product=$(stripe products create --name "Spider-Man Logo Decal - Gold" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in gold. Perfect for cars, laptops, helmets, and more." --url "https://maskmetals.com/spiderman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $spider_man_gold_product --live
echo "Spider-Man Gold: $spider_man_gold_product"

# Spider-Man Silver
echo "Creating Spider-Man Silver..."
spider_man_silver_product=$(stripe products create --name "Spider-Man Logo Decal - Silver" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in silver. Perfect for cars, laptops, helmets, and more." --url "https://maskmetals.com/spiderman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $spider_man_silver_product --live
echo "Spider-Man Silver: $spider_man_silver_product"

# Spider-Man Black
echo "Creating Spider-Man Black..."
spider_man_black_product=$(stripe products create --name "Spider-Man Logo Decal - Black" --description "High-quality vinyl decal featuring the iconic Spider-Man symbol in black. Perfect for cars, laptops, helmets, and more." --url "https://maskmetals.com/spiderman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $spider_man_black_product --live
echo "Spider-Man Black: $spider_man_black_product"

echo "Creating Batman products in LIVE mode..."

# Batman Gold
echo "Creating Batman Gold..."
batman_gold_product=$(stripe products create --name "Batman Logo Decal - Gold" --description "High-quality vinyl decal featuring the iconic Batman symbol in gold. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url "https://maskmetals.com/batman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $batman_gold_product --live
echo "Batman Gold: $batman_gold_product"

# Batman Black
echo "Creating Batman Black..."
batman_black_product=$(stripe products create --name "Batman Logo Decal - Black" --description "High-quality vinyl decal featuring the iconic Batman symbol in black. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url "https://maskmetals.com/batman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $batman_black_product --live
echo "Batman Black: $batman_black_product"

# Batman Silver
echo "Creating Batman Silver..."
batman_silver_product=$(stripe products create --name "Batman Logo Decal - Silver" --description "High-quality vinyl decal featuring the iconic Batman symbol in silver. Perfect for vehicles, equipment, and any surface that needs the Dark Knight's touch." --url "https://maskmetals.com/batman" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $batman_silver_product --live
echo "Batman Silver: $batman_silver_product"

echo "Creating Transformers products in LIVE mode..."

# Autobot Decal
echo "Creating Autobot Decal..."
autobot_product=$(stripe products create --name "Autobot Decal" --description "High-quality vinyl decal featuring the iconic Autobot symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." --url "https://maskmetals.com/transformers" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $autobot_product --live
echo "Autobot Decal: $autobot_product"

# Decepticons Decal
echo "Creating Decepticons Decal..."
decepticon_product=$(stripe products create --name "Decepticons Decal" --description "High-quality vinyl decal featuring the iconic Decepticon symbol. Perfect for vehicles, equipment, and any surface that needs the Transformers touch." --url "https://maskmetals.com/transformers" --live | jq -r '.id')
stripe prices create --unit-amount 2499 --currency usd --product $decepticon_product --live
echo "Decepticons Decal: $decepticon_product"

echo "All LIVE products created successfully!"

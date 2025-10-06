#!/bin/bash

echo "Adding prices to all products..."

# Get all product IDs and add prices
stripe products list --limit 20 | grep '"id":' | sed 's/.*"id": "\([^"]*\)".*/\1/' | while read product_id; do
  if [ ! -z "$product_id" ]; then
    echo "Adding price for product: $product_id"
    stripe prices create --product $product_id --unit-amount 2499 --currency usd
  fi
done

echo "All prices added!"

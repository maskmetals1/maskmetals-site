// Stripe Product IDs for each color variant - LIVE MODE
export const STRIPE_PRODUCTS = {
  spiderman: {
    red: {
      productId: 'prod_TB7uqc7mqKJ6JD', // Spider-Man Logo Decal - Red
      priceId: 'price_1SEleO4Tjd66mXnzEUdkp2mA'
    },
    gold: {
      productId: 'prod_TB7uOLPVlaoIyk', // Spider-Man Logo Decal - Gold
      priceId: 'price_1SEleP4Tjd66mXnzIzYSeltF'
    },
    silver: {
      productId: 'prod_TB7uBKahxEf8ge', // Spider-Man Logo Decal - Silver
      priceId: 'price_1SEleP4Tjd66mXnzAcBoMgIe'
    },
    black: {
      productId: 'prod_TB7uL2c2zzox94', // Spider-Man Logo Decal - Black
      priceId: 'price_1SEleQ4Tjd66mXnzu7hMHFN1'
    }
  },
  batman: {
    gold: {
      productId: 'prod_TB7uyDSUYFoKYp', // Batman Logo Decal - Gold
      priceId: 'price_1SEleQ4Tjd66mXnzCGbu9RXV'
    },
    black: {
      productId: 'prod_TB7urzq4vprsCg', // Batman Logo Decal - Black
      priceId: 'price_1SEleR4Tjd66mXnztcfZxsSo'
    },
    silver: {
      productId: 'prod_TB7uooExS8LmBe', // Batman Logo Decal - Silver
      priceId: 'price_1SEleS4Tjd66mXnzuU48GJ7V'
    }
  },
  transformers: {
    autobot: {
      productId: 'prod_TB7uAPsmyvCNJp', // Autobot Decal
      priceId: 'price_1SEleS4Tjd66mXnzCgF7wgsB'
    },
    decepticon: {
      productId: 'prod_TB7uSUpEzvg9dA', // Decepticons Decal
      priceId: 'price_1SEleT4Tjd66mXnzcmD2jdTM'
    }
  }
}

// Helper function to get Stripe product info for a specific hero and color
export function getStripeProductInfo(hero: string, color: string): { productId: string; priceId: string } | null {
  const heroProducts = STRIPE_PRODUCTS[hero as keyof typeof STRIPE_PRODUCTS]
  if (!heroProducts) return null
  
  const colorProduct = heroProducts[color as keyof typeof heroProducts]
  if (!colorProduct) return null
  
  return colorProduct
}
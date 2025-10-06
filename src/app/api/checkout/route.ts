import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

export async function POST(request: NextRequest) {
  try {
    const { items } = await request.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items in cart' }, { status: 400 })
    }

    // Create line items for Stripe
    const lineItems = items.map((item: any) => {
      // Validate and fix image URL
      let imageUrl = item.image
      
      // If image is not a valid URL, use a placeholder or skip images
      if (!imageUrl || !imageUrl.startsWith('http')) {
        // Use a placeholder image or skip images entirely
        imageUrl = null
      }
      
      const productData: any = {
        name: item.name,
      }
      
      // Only add images if we have a valid URL
      if (imageUrl) {
        productData.images = [imageUrl]
      }
      
      return {
        price_data: {
          currency: 'usd',
          product_data: productData,
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: item.quantity,
      }
    })

    // Create Stripe checkout session with shipping options
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: `${request.nextUrl.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.nextUrl.origin}/cart`,
      shipping_address_collection: {
        allowed_countries: [
          'US', 'CA', 'MX', 'GB', 'DE', 'FR', 'IT', 'ES',
        ]
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 0,
              currency: 'usd',
            },
            display_name: 'Free Shipping',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 5,
              },
              maximum: {
                unit: 'business_day',
                value: 10,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 999,
              currency: 'usd',
            },
            display_name: 'Express Shipping (3-5 days)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 3,
              },
              maximum: {
                unit: 'business_day',
                value: 5,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: 'fixed_amount',
            fixed_amount: {
              amount: 1999,
              currency: 'usd',
            },
            display_name: 'Overnight Shipping (1-2 days)',
            delivery_estimate: {
              minimum: {
                unit: 'business_day',
                value: 1,
              },
              maximum: {
                unit: 'business_day',
                value: 2,
              },
            },
          },
        },
      ],
    } as any)

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
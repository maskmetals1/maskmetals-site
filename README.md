# Mask Medals - Premium Superhero Merchandise

A modern e-commerce website for premium superhero metal decals and merchandise. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with hero-themed pages
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed and SEO
- **E-commerce Ready**: Stripe integration prepared
- **TypeScript**: Full type safety throughout
- **Animations**: Smooth animations with Framer Motion

## 🎨 Design

- **Home Page**: Hero section with statistics and call-to-actions
- **Spider-Man Page**: Red and blue theme with web patterns
- **Batman Page**: Gold and dark theme with bat signal elements
- **Transformers Page**: Orange and cyber theme with faction selection

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Payments**: Stripe (ready for integration)

## 📦 Installation

1. **Navigate to the project directory:**
   ```bash
   cd /Users/phill/Documents/MaskMedals/maskmetals-site
   ```

2. **Make setup script executable and run it:**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Visit: http://localhost:3000

## 🔧 Configuration

### Environment Variables

Copy `.env.local.example` to `.env.local` and add your Stripe keys:

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual Stripe keys:

```env
STRIPE_PUBLISHABLE_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_key_here
```

## 📁 Project Structure

```
maskmetals-site/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── spiderman/
│   │   ├── batman/
│   │   └── transformers/
│   └── components/
│       ├── Navigation.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── HeroesSection.tsx
│       ├── ContactSection.tsx
│       ├── Footer.tsx
│       ├── HeroBanner.tsx
│       ├── ProductSection.tsx
│       ├── GallerySection.tsx
│       └── OtherProductsSection.tsx
├── public/
│   └── images/
│       ├── spiderman/
│       ├── batman/
│       └── transformers/
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 Pages

- **Home** (`/`): Landing page with hero section, about, and hero showcase
- **Spider-Man** (`/spiderman`): Spider-Man themed product page
- **Batman** (`/batman`): Batman themed product page  
- **Transformers** (`/transformers`): Transformers themed product page

## 🎨 Themes

Each hero page has its own theme:

- **Spider-Man**: Red and blue colors with web patterns
- **Batman**: Gold and dark colors with bat signal elements
- **Transformers**: Orange and cyber colors with faction selection

## 📱 Mobile Navigation

- Hamburger menu for mobile devices
- Smooth scroll navigation
- Hide/show header on scroll
- Responsive design for all screen sizes

## 🚀 Deployment

This project is ready for deployment on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Any Node.js hosting**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 📝 Notes

- All images are automatically copied from the v4 directory during setup
- Stripe integration is prepared but requires actual API keys
- The design matches the original v4 site exactly
- Mobile navigation includes hamburger menu
- All animations are smooth and professional

## 🆘 Troubleshooting

If you encounter issues:

1. **Make sure you're in the correct directory:**
   ```bash
   cd /Users/phill/Documents/MaskMedals/maskmetals-site
   ```

2. **Check if all dependencies are installed:**
   ```bash
   npm install
   ```

3. **Verify images are copied:**
   ```bash
   ls public/images/
   ```

4. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

## 📞 Support

For any issues or questions, please check the troubleshooting section above or refer to the Next.js documentation.

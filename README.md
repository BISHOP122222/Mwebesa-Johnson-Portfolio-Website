# Mwebesa Johnson Portfolio Website

A professional portfolio website for Mwebesa Johnson, co-founder of Webbuild Systems, showcasing web development and digital solutions expertise across East Africa.

> [!IMPORTANT]
> **This portfolio was built for the Google AI Developer Challenge using Google Antigravity and Gemini models.**

## 🤖 Google AI Integration
This portfolio features the **Gemini 3 Strategic Agent**, an elite technical consultant that helps visitors navigate my digital infrastructure and systems architecture expertise.
- **Development Engine:** Google Antigravity (High-velocity AI engineering)
- **AI Brain:** Gemini 3 Flash (State-of-the-art reasoning)
- **Persona:** Professional Strategic Consultant & Solutions Architect

## 🚀 Features

### ✨ Design & Branding
- **Brand Identity**: Professional design using Webbuild Systems colors (Blue #2A5BDB + Purple #7E57C2)
- **Modern Typography**: Montserrat headers + Open Sans body text
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: Toggle between light and dark themes

### 🎯 Key Sections
1. **Hero Section**: Animated introduction with professional photo and floating tech icons
2. **Services Showcase**: Comprehensive service offerings with pricing in UGX
3. **Portfolio Gallery**: Filterable project showcase (NGOs, SACCOs, E-commerce, Business)
4. **About Section**: Professional journey timeline and company information
5. **Testimonials**: Client feedback and impact statistics
6. **Contact Form**: Interactive contact form with WhatsApp integration

### 🛠️ Technical Features
- **Next.js 14**: Modern React framework with App Router
- **TypeScript**: Full type safety and better development experience
- **Framer Motion**: Smooth animations and micro-interactions
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Meta tags, structured data, and performance optimization
- **Performance**: Fast loading times with image optimization

## 🔑 Security & API Setup

To ensure peak architectural integrity, the Gemini API is handled via a secure backend proxy. 

1. Create a `.env` file in the root directory.
2. Add your Google AI Studio API Key:
   ```env
   NEXT_PUBLIC_GEMINI_API_KEY=your_api_key_here
   ```
3. The app will automatically utilize the **Gemini 3 Flash** model for all strategic consultations.

### Colors
- **Primary Blue**: #2A5BDB
- **Primary Purple**: #7E57C2
- **Accent Colors**: Gold, Green, and various shades
- **Neutral Palette**: Clean whites, grays, and dark mode support

### Typography
- **Headers**: Montserrat (Bold, Semi-bold)
- **Body**: Open Sans (Regular, Medium)
- **Hierarchy**: Clear visual hierarchy with consistent spacing

### Components
- **Cards**: Hover effects with smooth transitions
- **Buttons**: Gradient primary buttons and outlined secondary buttons
- **Forms**: Interactive form elements with validation
- **Navigation**: Sticky header with smooth scrolling

## 📱 Responsive Features

- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: Responsive grid systems for all screen sizes
- **Touch-Friendly**: Optimized for touch interactions
- **Performance**: Fast loading on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Portfolio.tsx      # Portfolio gallery
│   ├── About.tsx          # About section
│   ├── Testimonials.tsx   # Client testimonials
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer component
│   └── LoadingScreen.tsx  # Loading animation
├── public/                # Static assets
│   ├── me.jpg            # Profile photo
│   └── logo.png          # Company logo
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies and scripts
└── README.md             # Project documentation
```

## 🎯 Key Components

### Header Component
- Sticky navigation with smooth scrolling
- Dark mode toggle
- Mobile-responsive menu
- Logo and brand identity

### Hero Section
- Professional introduction
- Animated CTA buttons
- Floating tech icons
- Statistics showcase

### Portfolio Gallery
- Filterable project categories
- Interactive project cards
- Modal project details
- Technology stack display

### Contact Form
- Comprehensive contact form
- WhatsApp integration
- Form validation
- Success feedback

## 🌐 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Similar to Vercel setup
- **AWS Amplify**: Full-stack deployment
- **Traditional Hosting**: Build and upload static files

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting by Next.js
- **Bundle Analysis**: Optimized bundle sizes
- **Lighthouse Score**: 90+ performance score target

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    blue: '#2A5BDB',
    purple: '#7E57C2',
  }
}
```

### Content
- Update personal information in components
- Modify services and pricing
- Add/remove portfolio projects
- Customize testimonials

### Styling
- Modify Tailwind classes in components
- Update global styles in `globals.css`
- Customize animations in Framer Motion

## 📱 Mobile Optimization

- **Touch Interactions**: Optimized for mobile devices
- **Performance**: Fast loading on mobile networks
- **Accessibility**: Screen reader friendly
- **Responsive Images**: Optimized for different screen densities

## 🌍 SEO Features

- **Meta Tags**: Comprehensive meta information
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Rich snippets for search engines
- **Performance**: Core Web Vitals optimization

## 🔒 Security

- **Content Security Policy**: Secure headers configuration
- **Form Validation**: Client and server-side validation
- **HTTPS**: Secure connections for production
- **Input Sanitization**: Protection against XSS attacks

## 📈 Analytics & Monitoring

- **Performance Monitoring**: Core Web Vitals tracking
- **Error Tracking**: Error boundary implementation
- **User Analytics**: Optional Google Analytics integration
- **Performance Metrics**: Lighthouse CI integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support or questions:
- **Email**: milanjohnso09@gmail.com
- **Phone**: +256 744 806 676
- **Website**: webbuild.acciorg.com

## 🙏 Acknowledgments

- **Webbuild Systems**: Company branding and support
- **Ocaya Isaac**: Co-founder and business partner
- **Clients**: For their trust and testimonials
- **Open Source Community**: For the amazing tools and libraries
- **Google Developers**: For the Antigravity tool and Gemini API

---

### 🏆 Google AI Developer Challenge 2024
This project is an official submission for the Google AI Developer Challenge. 
- **Developer:** Mwebesa Johnson (Uganda)
- **Deployment:** Vercel (Production) / Google Cloud Run (Enterprise Opt)
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, Gemini 3 Flash, Antigravity.

**Built with ❤️ by Mwebesa Johnson for Webbuild Systems**

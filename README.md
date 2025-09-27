# IELTS Excellence Institute - Homepage

A modern, responsive homepage for a fictional IELTS Institute built with React.js and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Component-based Architecture**: Well-structured React components for maintainability
- **Navigation**: Mobile-friendly navbar with hamburger menu
- **Hero Section**: Compelling call-to-action with statistics and engaging visuals
- **Feature Cards**: Highlighting key services like Speaking Practice, Mock Tests, AI Band Score, and Expert Guidance
- **Social Proof**: Student testimonials with ratings and success stories
- **Professional Footer**: Complete contact information and useful links

## 🛠️ Tech Stack

- **React 18** with TypeScript for type safety
- **Tailwind CSS** for styling and responsive design
- **Lucide React** for modern, consistent icons
- **Vite** for fast development and building

## 🎨 Design Choices

### Color Scheme
- **Primary Blue (#3B82F6)**: Professional and trustworthy, commonly associated with education
- **Accent Green (#10B981)**: Success and achievement colors for testimonials and success metrics
- **Neutral Grays**: Clean, modern feel with excellent readability

### Typography & Layout
- Clean, modern fonts with proper hierarchy (headings at 120% line height, body at 150%)
- Card-based layout with subtle shadows and rounded corners
- Consistent 8px spacing system throughout
- Progressive disclosure with hover effects and animations

### Responsive Strategy
- Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop)
- Flexible grid system that adapts content layout for different screen sizes
- Mobile hamburger menu for optimal navigation experience

### User Experience
- Smooth transitions and micro-interactions for engagement
- Clear call-to-action buttons with hover effects
- Social proof through testimonials and statistics
- Professional imagery from Pexels for authentic feel

## 🚦 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [your-repo-link]
   cd ielts-institute-homepage
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Hero section with CTA
│   ├── Features.tsx    # Service feature cards
│   ├── Testimonials.tsx # Student success stories
│   └── Footer.tsx      # Footer with contact info
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Tailwind CSS imports
```

## 🎯 Key Components

- **Navbar**: Responsive navigation with mobile hamburger menu
- **Hero**: Eye-catching section with statistics, CTAs, and floating elements
- **Features**: Grid of service cards with icons and descriptions
- **Testimonials**: Social proof with student photos, ratings, and reviews
- **Footer**: Comprehensive footer with contact info and links

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layout, hamburger menu)
- **Tablet**: 768px - 1024px (2-column layouts, expanded menu)
- **Desktop**: > 1024px (full multi-column layouts, all features visible)

This homepage demonstrates modern web development practices with a focus on user experience, performance, and maintainability.
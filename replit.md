# KENZY Artist Portfolio Website

## Overview

This is a single-page artist portfolio website for KENZY, an artist, actor, and influencer. The site features a modern, dark-themed design with video backgrounds, smooth animations, and responsive navigation. Built as a static website using vanilla HTML, CSS, and JavaScript, it showcases music releases, movies, and artist information in an engaging, visually-driven format.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript (no frameworks)

**Design Philosophy**: The application follows a single-page application (SPA) pattern without using a framework. All sections are contained within a single HTML file with hash-based navigation, providing a seamless user experience without page reloads.

**Key Architectural Decisions**:

1. **Static Site Approach**
   - **Problem**: Need for a fast, lightweight portfolio site without backend complexity
   - **Solution**: Pure client-side rendering with no server-side logic
   - **Rationale**: Reduces hosting costs, maximizes performance, and simplifies deployment
   - **Pros**: Lightning-fast load times, easy hosting on any static host, no server maintenance
   - **Cons**: Limited dynamic content capabilities, no user-specific personalization

2. **Component Structure**
   - **Navigation System**: Fixed navbar with scroll-based styling changes and mobile hamburger menu
   - **Hero Section**: Full-screen video background with overlay content and platform integration links
   - **Responsive Design**: Mobile-first approach with breakpoint at 768px
   - **Pros**: Clean separation of concerns, maintainable code structure
   - **Cons**: Manual DOM manipulation without virtual DOM optimization

3. **Animation & Interaction Layer**
   - **Intersection Observer API**: Used for scroll-triggered animations and lazy loading
   - **CSS Transitions**: Hardware-accelerated transitions using cubic-bezier timing functions
   - **Scroll Events**: Navbar transformation based on scroll position
   - **Rationale**: Modern browser APIs provide smooth, performant animations without heavy libraries
   - **Pros**: Native browser support, excellent performance, no dependencies
   - **Cons**: Requires polyfills for older browsers

### Styling Architecture

**CSS Custom Properties**: Centralized theming system using CSS variables for colors, spacing, and transitions

**Color Scheme**:
- Primary: Red (#FF0000) for brand emphasis
- Background: Near-black (#0a0a0a, #000000) for dramatic contrast
- Text: White (#ffffff) and gray (#b3b3b3) for hierarchy

**Typography**: Custom font stack using Google Fonts ('Cinzel' for titles, 'Mogra' for descriptions) for distinctive branding

**Layout System**: Flexbox-based responsive layout without grid, optimized for simple section-based structure

### Navigation & Routing

**Hash-Based Navigation**: Uses anchor links with smooth scrolling behavior for section transitions

**Active State Management**: JavaScript-driven active link highlighting based on user interaction and scroll position

**Mobile Navigation**: Slide-in menu pattern with hamburger toggle and close button for mobile devices

## External Dependencies

### Content Delivery Networks (CDNs)

1. **Google Fonts**
   - **Fonts Used**: 'Cinzel' (bold weight for titles), 'Mogra' (for descriptions)
   - **Purpose**: Custom typography for brand identity
   - **Integration**: Preconnect optimization for faster font loading

### Media Assets

1. **Video Background**
   - **File**: `assets/hero-video.mp4`
   - **Purpose**: Hero section background video for visual impact
   - **Attributes**: Autoplay, muted, loop, playsinline (for mobile compatibility)

2. **Platform Integration Links**
   - **Spotify**: Music streaming platform integration
   - **Apple Music**: Alternative music platform integration
   - **Implementation**: SVG icons with external links (currently placeholder '#' links)

### Browser APIs

1. **Intersection Observer API**
   - **Purpose**: Scroll-triggered animations and content visibility detection
   - **Configuration**: 10% threshold, -100px bottom margin for early triggering

2. **Scroll Events**
   - **Purpose**: Navbar styling changes based on scroll position (100px threshold)

3. **DOM APIs**
   - **Purpose**: Dynamic class manipulation, event handling, and UI state management

### No Backend Dependencies

This is a completely static frontend application with no:
- Server-side rendering
- Database connections
- API endpoints
- Authentication systems
- Build tools or bundlers (deployed as-is)

**Note**: The site currently exists as a static replica and can be enhanced with backend features like contact forms, content management, or analytics if needed in the future.

## Recent Changes

### October 6, 2025 - Enhanced Animations & Typography Updates

**New Features & Improvements**:
- ✅ **Loading Screen**: Animated 1-100% counter with progress bar, KENZY title, subtitle, and pulsing dots on first visit
- ✅ **Spotify Card Redesign**: Replaced embed with sleek black card featuring album art, track info, and red play button
- ✅ **Typography Overhaul**: Changed to Cinzel (bold) for all titles and Mogra for all descriptions with optimized sizes
- ✅ **Mobile Navigation Fix**: Removed black space at top, navigation now sits perfectly over video background
- ✅ **Enhanced Animations**: Added parallax scrolling, glitch effects on hover, smooth fade-ins, and enhanced transitions
- ✅ **Spacing Optimization**: Reduced padding on mobile (from 100px to 50-80px) for better mobile experience
- ✅ **Improved Responsiveness**: Fine-tuned breakpoints at 1024px (tablet), 768px (mobile), and 480px (small mobile)

### October 5, 2025 - Complete Website Implementation

**Implemented Features**:
- ✅ Full-screen hero section with video background and transparent navigation overlay
- ✅ Artistic hamburger menu for mobile/tablet with smooth slide-in animation and close button
- ✅ Music Catalog section with album cards, hover effects, and platform integration buttons
- ✅ Acting Credits section with movie cards, play buttons, and "MOVIE" badges
- ✅ About section with artist portrait and biography
- ✅ Newsletter subscription form with email input
- ✅ Footer with social media icons (Instagram, TikTok, YouTube, Snapchat, Facebook)
- ✅ Responsive design with breakpoints at 1024px (tablet), 768px (mobile), and 480px (small mobile)
- ✅ Smooth scroll animations, fade-in effects, and interactive hover states
- ✅ Dark theme with red accent color (#FF0000) throughout

**File Structure**:
```
/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete CSS with responsive design and animations
├── script.js           # JavaScript for interactivity (hamburger menu, scroll effects)
└── assets/             # Placeholder images and video
    ├── hero-video.mp4          # Background video (placeholder - replace with your video)
    ├── unruly-cover.jpg        # Album cover (placeholder)
    ├── kenzy-portrait.jpg      # Artist portrait for About section (placeholder)
    ├── spoil-you.jpg           # Song cover art (placeholder)
    ├── betty-butter.jpg        # Song cover art (placeholder)
    ├── oroma.jpg              # Song cover art (placeholder)
    ├── movie1.jpg through movie6.jpg  # Movie posters (placeholders)
```

**How to Replace Placeholder Assets**:
1. Replace `assets/hero-video.mp4` with your actual music video (MP4 format recommended)
2. Replace all album cover images (`unruly-cover.jpg`, `spoil-you.jpg`, etc.) with your actual artwork
3. Replace `kenzy-portrait.jpg` with your actual portrait photo for the About section
4. Replace `movie1.jpg` through `movie6.jpg` with your actual movie posters
5. Update the platform links in `index.html` to point to your actual Spotify, Apple Music, etc. profiles

**Website Features**:
- Fully responsive across all devices (desktop, tablet, mobile)
- Smooth animations and transitions inspired by Netflix and modern artist portfolios
- Interactive elements: hamburger menu, smooth scrolling, hover effects
- Newsletter subscription form (frontend only - add backend integration as needed)
- Clean, maintainable code structure with no frameworks
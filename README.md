# Tobams Group - Frontend Intern Assessment

A pixel-perfect, fully responsive Next.js implementation of the Tobams Group website design from Figma.

## Live URL

[View Live Deployment](https://frontend-intern-assessment-ztaa.vercel.app/)

## GitHub Repository

[https://github.com/masha-a-m/frontend-intern-assessment](https://github.com/masha-a-m/frontend-intern-assessment)

## Figma Design Reference

[Original Figma Design](https://www.figma.com/design/wuqCLKk1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Tech Stack

- Framework: Next.js 14 (App Router)
- Styling: Tailwind CSS v3
- Icons: Lucide React
- Fonts: System fonts (Nunito Sans via next/font)
- Language: TypeScript
- Deployment: Vercel

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/masha-a-m/frontend-intern-assessment.git
   cd frontend-intern-assessment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run development server
   ```bash
   npm run dev
   ```

4. Open in browser
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend-intern-assessment/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Tailwind directives
├── components/
│   ├── Navbar.tsx          # Navigation with mobile menu
│   ├── MobileMenu.tsx      # Hamburger menu for mobile
│   ├── Hero.tsx            # Hero section
│   ├── LearningManagement.tsx
│   ├── CorporateTrainings.tsx
│   ├── PersonalisedTraining.tsx
│   ├── CapacityDevelopment.tsx
│   ├── ManagementDevelopment.tsx
│   ├── LearningWithCEO.tsx
│   ├── TrainingConsultant.tsx
│   ├── CallToAction.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
├── public/
│   └── images/             # All image assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── README.md
```

## Features Implemented

### Design Fidelity
- ✅ Pixel-perfect match to Figma design
- ✅ Exact colors: #571244 (primary), #EF4353 (secondary)
- ✅ Custom border radii and spacing
- ✅ All typography specifications followed

### Responsive Design
- ✅ Mobile: 425px (stacked layout, hamburger menu)
- ✅ Tablet: 768px
- ✅ Desktop: 1280px+
- ✅ Uses Tailwind responsive prefixes (sm:, md:, lg:)

### Component Structure
- ✅ 13 reusable components
- ✅ No monolithic page files
- ✅ Clean component separation

### Accessibility
- ✅ Semantic HTML5 (nav, main, section, footer)
- ✅ Alt text for all images
- ✅ Keyboard-navigable buttons and links
- ✅ ARIA labels for icon buttons

### Performance
- ✅ Next.js Image component for optimization
- ✅ Responsive image sizing
- ✅ No unused imports or dead code

## Design Decisions

1. No Google Fonts: Used system fonts to avoid network issues during build
2. Mobile-First Approach: All components built mobile-first then enhanced for larger screens
3. Component Reusability: Created modular components for maintainability
4. Custom Colors: Used exact hex values from Figma (#571244, #EF4353, #696969, etc.)
5. Responsive Images: Used `sizes` prop in Next.js Image for optimal loading

## Known Issues

None - All requirements met.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Deploy to Vercel

1. Push code to GitHub repository
2. Connect GitHub repo to Vercel
3. Vercel auto-detects Next.js settings
4. Deploy with default settings

### Manual Deployment

```bash
npm run build
vercel --prod
```

## AI Usage Disclosure

This project was developed with assistance from AI tools for:
- Debugging assistance
- README assistance

## Credits

- Design: Tobams Group (Figma)
- Development: Frontend Intern Assessment

## License

This project is for assessment purposes only.

## Contact

For questions about this assessment, please refer to the original assessment email.

---

Assessment Requirements Checklist:
- [x] Project setup with Next.js + Tailwind
- [x] Pixel-perfect Figma implementation
- [x] Fully responsive (425px, 768px, 1280px+)
- [x] Component structure (13 components)
- [x] Semantic HTML & accessibility
- [x] Live deployment on Vercel
- [x] Public GitHub repository
- [x] README with setup instructions and live URL
```

## After copying, update these placeholders:

1. Line 8: Replace `your-vercel-url` with your actual Vercel URL
2. Line 11: Replace `YOUR_USERNAME` with your GitHub username (both places)
3. Line 44: Replace `YOUR_USERNAME` with your GitHub username

## Save the README file:

```powershell
# Copy the content above and save to README.md
# Or create it with this command:
@"
[PASTE THE ENTIRE README CONTENT HERE]
"@ | Set-Content -Path "README.md"
```

Then commit and push:

```powershell
git add README.md
git commit -m "Add comprehensive README"
git push
```
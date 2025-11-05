# PFO Contribution to UN Resolution 2250 - Interactive Dashboard

## Overview
This interactive dashboard showcases the Peace and Freedom Organization's comprehensive contributions to implementing UN Security Council Resolution 2250 on Youth, Peace, and Security at international, regional, and national levels.

## Features
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Animated counters, hover effects, and smooth scrolling
- **Three-Level Impact Display**: International, Regional, and National achievements
- **Timeline Visualization**: Chronological display of major milestones
- **Resource Links**: Direct links to all referenced reports and documentation
- **Print-Friendly**: Optimized layout for printing
- **Export Functionality**: Export data in JSON format

## Files Structure
```
pfo-resolution-2250-dashboard/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Key Sections

### 1. **Hero Section**
- Quick overview with key statistics
- Five pillars of Resolution 2250
- Eye-catching design with UN-themed colors

### 2. **International Level**
- Civil Society Working Group membership
- Global report launch
- UN Resolution 2535 contribution
- Network memberships

### 3. **Regional Level**
- MENA Coalition leadership
- Regional partnerships across multiple countries
- Cross-border advocacy initiatives

### 4. **National Level (Iraq)**
- Timeline from 2016 to present
- National Coalition launch (2020)
- National Network establishment (2021)
- National Action Plan development (2024-present)

### 5. **Impact Metrics**
- Animated counters showing key numbers
- Comprehensive achievements grid
- Visual representation of impact

### 6. **Resources**
- Links to all referenced documents
- External resources and reports
- Video and press releases

## How to Upload to GitHub

### Method 1: Using GitHub Website

1. **Create a new repository on GitHub**
   - Go to https://github.com/new
   - Name your repository (e.g., `pfo-resolution-2250-dashboard`)
   - Choose "Public" visibility
   - Don't initialize with README (we already have one)
   - Click "Create repository"

2. **Upload files**
   - Click "uploading an existing file"
   - Drag and drop all three files:
     - `index.html`
     - `styles.css`
     - `script.js`
     - `README.md`
   - Add commit message: "Initial commit - PFO Resolution 2250 Dashboard"
   - Click "Commit changes"

3. **Enable GitHub Pages**
   - Go to repository Settings
   - Click "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your dashboard will be live at: `https://[your-username].github.io/pfo-resolution-2250-dashboard`

### Method 2: Using Git Command Line

```bash
# Navigate to your dashboard folder
cd /path/to/pfo-resolution-2250-dashboard

# Initialize Git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - PFO Resolution 2250 Dashboard"

# Add your GitHub repository as remote
git remote add origin https://github.com/[your-username]/pfo-resolution-2250-dashboard.git

# Push to GitHub
git branch -M main
git push -u origin main
```

After pushing, enable GitHub Pages in repository settings.

## Customization

### Changing Colors
Edit `styles.css` and modify the CSS variables at the top:
```css
:root {
    --un-blue: #009edb;
    --un-dark-blue: #1e3a8a;
    --peace-green: #4ade80;
    --gold: #f59e0b;
}
```

### Adding Content
- Edit `index.html` to add new sections
- Follow the existing structure and classes
- Update the navigation links accordingly

### Modifying Animations
- Edit `script.js` to adjust animation timings
- Modify intersection observer thresholds
- Change counter animation speeds

## Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance
- Optimized for fast loading
- Minimal dependencies (only Font Awesome CDN)
- Lazy loading for animations
- Smooth 60 FPS animations

## Features Included

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Animated metric counters
- ✅ Hover effects on cards
- ✅ Timeline entrance animations
- ✅ Parallax hero section
- ✅ Ripple button effects

### Accessibility
- ✅ Semantic HTML structure
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ High contrast color scheme
- ✅ Readable font sizes

### Additional Tools
- ✅ Print button (bottom right)
- ✅ Scroll to top button
- ✅ Export data functionality
- ✅ Mobile-responsive menu
- ✅ Loading screen animation

## Technical Details

### Dependencies
- Font Awesome 6.4.0 (CDN)
- No other external dependencies
- Pure vanilla JavaScript (no frameworks)
- Modern CSS with CSS Grid and Flexbox

### Browser Requirements
- Modern browsers with ES6 support
- CSS Grid and Flexbox support
- IntersectionObserver API support

## Credits
- **Organization**: Peace and Freedom Organization
- **Resolution**: UN Security Council Resolution 2250
- **Design**: UN-themed professional dashboard
- **Purpose**: Donor presentation and impact demonstration

## License
This dashboard is created for the Peace and Freedom Organization to showcase their contribution to UN Resolution 2250.

## Support
For any issues or questions about the dashboard:
1. Check the HTML/CSS/JS files for inline comments
2. Verify all links are working correctly
3. Test in different browsers
4. Ensure GitHub Pages is properly configured

## Version
**Version 1.0** - Initial Release
- Complete dashboard with all sections
- All animations and interactions
- Fully responsive design
- Print and export functionality

---

**Last Updated**: November 2024
**Created for**: Peace and Freedom Organization
**Purpose**: Demonstrating contributions to UN Resolution 2250 on Youth, Peace & Security
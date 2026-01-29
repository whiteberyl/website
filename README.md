# Pink Starfield Portfolio ✨

## Project Structure

```
/
├── src/
│   ├── layouts/
│   │   └── Layout.astro       # Main layout with starfield & cursor
│   └── pages/
│       ├── index.astro        # Homepage
│       ├── about.astro        # About page
│       ├── projects.astro     # Projects page
│       ├── resume.astro       # Resume page
│       └── contact.astro      # Contact page
```

### Adding Project Images

To add images to your projects:

1. Save your project images in the `public/projects/` directory
   ```
   public/
   └── projects/
       ├── prescription-module.png
       ├── parallax-ux.png
       ├── linktree-clone.png
       └── terminal-portfolio.png
   ```

2. In `src/pages/projects.astro`, uncomment the `<img>` tag and comment out the placeholder:
   ```html
   <div class="project-image">
       <!-- <div class="placeholder-image">💊</div> -->
       <img src="/projects/prescription-module.png" alt="Shopify Prescription Module">
   </div>
   ```

3. Images should be 16:9 aspect ratio (recommended: 1200x675px) for best display

### Linking Projects

Update the `href` in project links to point to your live demos or repositories:
```html
<div class="project-links">
    <a href="https://your-demo-link.com" class="project-link">Live Demo</a>
    <a href="https://github.com/whiteberyl/project-name" class="project-link">GitHub</a>
</div>
```

### Modify Starfield

The starfield settings can be adjusted in `src/layouts/Layout.astro`:
- `starCount` - Number of stars (default: 200)
- `starColors` - Array of color schemes for stars
- Parallax strength (adjust the `40` value in the parallax calculation)

## Routing

Astro uses file-based routing. The pages are automatically available at:

- `/` - Homepage (index.astro)
- `/about` - About page
- `/projects` - Projects page
- `/resume` - Resume page
- `/contact` - Contact page

## Technologies Used

- **Astro** - Static site generator
- **TypeScript** - Type safety
- **HTML5 Canvas** - Starfield animation
- **CSS3** - Styling and animations
- **Google Fonts** - Playfair Display, Cormorant Garamond, IBM Plex Mono

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this for your own portfolio!
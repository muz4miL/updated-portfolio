# US Exchange Photos

Add your photos from the YES Exchange program here.

## Recommended Images:

1. **graduation.jpg** - Your graduation ceremony at Centralia High School
2. **host-family.jpg** - Photo with your American host family
3. **community-service.jpg** - Community service activities
4. **cultural-event.jpg** - Representing Pakistan at cultural events
5. **school-friends.jpg** - Photos with school friends
6. **adventures.jpg** - Exploring Washington State / Pacific Northwest

## Image Guidelines:

- **Recommended size:** 800x600px or larger
- **Aspect ratio:** 4:3 works best
- **Format:** .jpg, .png, or .webp
- **Naming:** Use lowercase with hyphens (e.g., `graduation.jpg`)

## After Adding Images:

Update the `GalleryImage` component in `/app/experience/page.jsx` to use actual `<Image>` tags or regular `<img>` tags with your image paths.

Example:
```jsx
<img 
  src="/images/us/graduation.jpg" 
  alt="Graduation Day"
  className="w-full h-full object-cover"
/>
```

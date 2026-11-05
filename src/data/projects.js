/**
 * ============================================================
 *  PROJECTS & MEDIA. How to add your own photos and videos
 * ============================================================
 *
 * 1. Copy your files into the /public/assets/projects/ folder, for example:
 *      public/assets/projects/home-renovation/dlf-phase3-01.jpg
 *      public/assets/projects/videos/dlf-phase3-walkthrough.mp4
 *
 * 2. Reference them below with paths that START at /assets
 *    (do not include "public"):
 *      coverImage: '/assets/projects/home-renovation/dlf-phase3-01.jpg'
 *
 * 3. Save the file. The homepage, the Projects page, the Gallery
 *    (with category filters) and each project's detail page all update
 *    automatically from this one list.
 *
 * Tips
 * - Use descriptive file names: 'marble-flooring-sector-57.jpg' rather than 'IMG_2231.jpg'.
 * - Resize photos to about 1600px wide and export as .webp or .jpg (under ~300 KB).
 * - Videos: MP4 (H.264) under ~20 MB works best. For longer videos, upload to
 *   YouTube and paste the embed URL (https://www.youtube.com/embed/VIDEO_ID).
 * - Always write a meaningful `alt` text for each image. It helps accessibility and SEO.
 *
 * Field reference
 *   id            unique number
 *   slug          URL part → /projects/<slug>  (lowercase, hyphens)
 *   title         project name
 *   category      one of the GALLERY_CATEGORIES ids below
 *   serviceSlug   (optional) slug from services.js to link to the related service
 *   location      e.g. 'Sector 57, Gurugram'. Leave '' if you prefer not to show it
 *   description   short summary (1–2 sentences)
 *   details       (optional) longer paragraphs for the detail page
 *   scope         (optional) list of work items done
 *   coverImage    main image path
 *   coverAlt      alt text for the cover image
 *   galleryImages array of { src, alt }
 *   videoUrl      '' OR a local MP4 path ('/assets/projects/videos/x.mp4')
 *                 OR a YouTube/Vimeo embed URL
 *   videoPoster   (optional) image shown before a local video plays
 *   beforeAfter   (optional) { before: {src, alt}, after: {src, alt} }
 *   featured      true → shown on the homepage
 *   isSample      true → shows a small "Sample" label. DELETE samples or set false when using real projects.
 */

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'civil', label: 'Civil Work' },
  { id: 'construction', label: 'Construction' },
  { id: 'renovation', label: 'Renovation' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'flooring', label: 'Flooring' },
  { id: 'painting', label: 'Painting & Finishing' },
  { id: 'before-after', label: 'Before & After' },
];

const projects = [
  {
    id: 1,
    slug: 'independent-house-structure',
    title: 'Independent House: Structural Work',
    category: 'civil',
    serviceSlug: 'civil-construction',
    location: 'Gurugram',
    description:
      'Foundation, RCC frame and masonry for a two-storey independent house, built to the structural drawings.',
    details: [
      'SAMPLE ENTRY. Replace this text with the real story of your project: what the client needed, any site challenges, and how the work progressed.',
    ],
    scope: ['Excavation and foundation', 'RCC columns, beams and slabs', 'Brick masonry'],
    coverImage: '/assets/projects/civil-construction/project-01.svg',
    coverAlt: 'RCC frame of a two-storey house under construction',
    galleryImages: [
      { src: '/assets/projects/civil-construction/project-01.svg', alt: 'RCC frame of a two-storey house' },
      { src: '/assets/projects/civil-construction/project-02.svg', alt: 'Brick masonry walls in progress' },
    ],
    videoUrl: '',
    featured: true,
    isSample: true,
  },
  {
    id: 2,
    slug: 'builder-floor-construction',
    title: 'Builder Floor: Complete Construction',
    category: 'construction',
    serviceSlug: 'home-construction',
    location: 'Gurugram',
    description:
      'Complete construction of a builder floor, from structure through electrical, plumbing and finishing.',
    details: ['SAMPLE ENTRY. Replace with your real project details.'],
    scope: ['Structure and masonry', 'Concealed electrical and plumbing', 'Flooring and painting'],
    coverImage: '/assets/projects/construction/project-01.svg',
    coverAlt: 'Completed builder floor facade',
    galleryImages: [
      { src: '/assets/projects/construction/project-01.svg', alt: 'Completed builder floor facade' },
      { src: '/assets/projects/construction/project-02.svg', alt: 'Finished staircase and entrance' },
    ],
    videoUrl: '',
    featured: true,
    isSample: true,
  },
  {
    id: 3,
    slug: 'apartment-full-renovation',
    title: 'Apartment: Full Renovation',
    category: 'renovation',
    serviceSlug: 'home-renovation',
    location: 'Gurugram',
    description:
      'Full refurbishment of a 3BHK apartment, with new flooring, rewiring, kitchen and bathroom upgrades and repainting.',
    details: ['SAMPLE ENTRY. Replace with your real project details.'],
    scope: ['Flooring replacement', 'Rewiring', 'Kitchen and bathroom upgrade', 'Painting'],
    coverImage: '/assets/projects/home-renovation/project-01.svg',
    coverAlt: 'Renovated apartment living room',
    galleryImages: [
      { src: '/assets/projects/home-renovation/project-01.svg', alt: 'Renovated apartment living room' },
      { src: '/assets/projects/home-renovation/project-02.svg', alt: 'Renovated kitchen' },
    ],
    // Example for a local video (uncomment once the file exists):
    // videoUrl: '/assets/projects/videos/apartment-renovation-walkthrough.mp4',
    // videoPoster: '/assets/projects/home-renovation/project-01.jpg',
    videoUrl: '',
    featured: true,
    isSample: true,
  },
  {
    id: 4,
    slug: 'living-room-interior-finishing',
    title: 'Living Room: Interior Finishing',
    category: 'interiors',
    serviceSlug: 'interior-finishing',
    location: 'Gurugram',
    description:
      'Feature wall panelling, a gypsum false ceiling with cove lighting and a TV unit for a family living room.',
    details: ['SAMPLE ENTRY. Replace with your real project details.'],
    scope: ['Wall panelling', 'False ceiling', 'Carpentry'],
    coverImage: '/assets/projects/interiors/project-01.svg',
    coverAlt: 'Living room with panelled feature wall and cove ceiling',
    galleryImages: [
      { src: '/assets/projects/interiors/project-01.svg', alt: 'Panelled feature wall' },
      { src: '/assets/projects/interiors/project-02.svg', alt: 'False ceiling with cove lighting' },
    ],
    videoUrl: '',
    featured: true,
    isSample: true,
  },
  {
    id: 5,
    slug: 'marble-flooring-villa',
    title: 'Villa: Marble Flooring',
    category: 'flooring',
    serviceSlug: 'flooring-tiling',
    location: 'Gurugram',
    description: 'Marble laying and polishing across the ground floor and staircase of a villa.',
    details: ['SAMPLE ENTRY. Replace with your real project details.'],
    scope: ['Marble laying', 'Staircase cladding', 'Polishing'],
    coverImage: '/assets/projects/flooring/project-01.svg',
    coverAlt: 'Polished marble floor in a villa',
    galleryImages: [
      { src: '/assets/projects/flooring/project-01.svg', alt: 'Polished marble floor' },
      { src: '/assets/projects/flooring/project-02.svg', alt: 'Marble-clad staircase' },
    ],
    videoUrl: '',
    featured: true,
    isSample: true,
  },
  {
    id: 6,
    slug: 'exterior-repaint-waterproofing',
    title: 'House Exterior: Repainting & Waterproofing',
    category: 'painting',
    serviceSlug: 'painting-waterproofing',
    location: 'Gurugram',
    description:
      'Crack repair, terrace waterproofing and a full exterior repaint of a residential house.',
    details: ['SAMPLE ENTRY. Replace with your real project details.'],
    scope: ['Crack repair', 'Terrace waterproofing', 'Exterior painting'],
    coverImage: '/assets/projects/painting/project-01.svg',
    coverAlt: 'Freshly repainted house exterior',
    galleryImages: [
      { src: '/assets/projects/painting/project-01.svg', alt: 'Repainted house exterior' },
    ],
    beforeAfter: {
      before: { src: '/assets/projects/before-after/before-01.svg', alt: 'Exterior wall before repainting, with damp patches' },
      after: { src: '/assets/projects/before-after/after-01.svg', alt: 'Exterior wall after repainting' },
    },
    videoUrl: '',
    featured: true,
    isSample: true,
  },
];

/* ---------- Helpers (no need to edit) ---------- */

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
export const featuredProjects = () => projects.filter((p) => p.featured);
export const projectsForService = (service) =>
  projects.filter(
    (p) => p.serviceSlug === service.slug || p.category === service.galleryCategory,
  );

export const isEmbedVideo = (url = '') => /youtube\.com|youtu\.be|vimeo\.com/.test(url);

/**
 * Flattens all projects into gallery items (images + videos + before/after).
 * The gallery page uses this, so adding a project automatically adds its media.
 */
export const getGalleryItems = () => {
  const items = [];
  projects.forEach((p) => {
    p.galleryImages.forEach((img, i) =>
      items.push({
        key: `${p.slug}-img-${i}`,
        type: 'image',
        src: img.src,
        alt: img.alt,
        category: p.category,
        projectSlug: p.slug,
        projectTitle: p.title,
      }),
    );
    if (p.videoUrl) {
      items.push({
        key: `${p.slug}-video`,
        type: 'video',
        src: p.videoUrl,
        poster: p.videoPoster || p.coverImage,
        alt: `${p.title} video`,
        category: p.category,
        projectSlug: p.slug,
        projectTitle: p.title,
      });
    }
    if (p.beforeAfter) {
      ['before', 'after'].forEach((stage) =>
        items.push({
          key: `${p.slug}-${stage}`,
          type: 'image',
          src: p.beforeAfter[stage].src,
          alt: p.beforeAfter[stage].alt,
          category: 'before-after',
          stage,
          projectSlug: p.slug,
          projectTitle: p.title,
        }),
      );
    }
  });
  return items;
};

export default projects;

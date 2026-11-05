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

import ideas from './ideas.js';

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'moulding', label: 'Moulding' },
  { id: 'pvc-panels', label: 'PVC Panels' },
  { id: 'louvers', label: 'Louvers' },
  { id: 'wallpaper', label: 'Wallpaper' },
  { id: 'glass', label: 'Glass & Mirror' },
  { id: 'false-ceiling', label: 'False Ceiling' },
  { id: 'flooring', label: 'Wooden Flooring' },
  { id: 'lighting', label: 'Lighting' },
  { id: 'electrical', label: 'Electrical' },
  { id: 'painting', label: 'Painting' },
  { id: 'renovation', label: 'Renovation' },
  { id: 'interiors', label: 'Interiors' },
  { id: 'before-after', label: 'Before & After' },
];

const projects = [
  {
    id: 1,
    slug: 'wall-moulding-panelling',
    title: 'Wall Moulding & Panelling',
    category: 'moulding',
    serviceSlug: 'moulding-work',
    location: '',
    description:
      'Classic wall moulding and frame panelling that turns plain walls into elegant feature walls.',
    details: ['Decorative moulding frames installed across living-room and bedroom walls, finished smooth and painted for a clean, premium look.'],
    scope: ['Layout and marking', 'Cutting and fixing moulding profiles', 'Putty, sanding and painting'],
    coverImage: '/assets/projects/wall-moulding/wall-moulding-01.jpg',
    coverAlt: 'Living room wall with full-height moulding panels',
    galleryImages: [
      { src: '/assets/projects/wall-moulding/wall-moulding-01.jpg', alt: 'Living room wall with full-height moulding panels' },
      { src: '/assets/projects/wall-moulding/wall-moulding-02.jpg', alt: 'Cream wall with moulding frames' },
      { src: '/assets/projects/wall-moulding/wall-moulding-03.jpg', alt: 'Moulding panels around a doorway' },
      { src: '/assets/projects/wall-moulding/wall-moulding-04.jpg', alt: 'Grey wall with classic moulding and corner details' },
      { src: '/assets/projects/wall-moulding/wall-moulding-05.jpg', alt: 'Panelled wall with decorative corner moulding' },
      { src: '/assets/projects/wall-moulding/wall-moulding-06.jpg', alt: 'Moulding frames being installed on a wall' },
      { src: '/assets/projects/wall-moulding/wall-moulding-07.jpg', alt: 'Finished moulding frame on a white wall' },
      { src: '/assets/projects/wall-moulding/wall-moulding-08.jpg', alt: 'Single moulding frame on a plain wall' },
      { src: '/assets/projects/wall-moulding/wall-moulding-09.jpg', alt: 'Craftsman cutting moulding profiles on site' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 2,
    slug: 'dining-room-feature-wall',
    title: 'Dining Room: Grey Panelled Feature Wall',
    category: 'renovation',
    serviceSlug: 'home-renovation',
    location: '',
    description:
      'A dining-room makeover with a grey panelled feature wall and a decorative niche wall.',
    details: ['The dining area was upgraded with a grey moulded feature wall, framed artwork placement and a matching niche wall with display shelves.'],
    scope: ['Wall moulding and panelling', 'Niche wall with display shelves', 'Painting and finishing'],
    coverImage: '/assets/projects/dining-feature-wall/dining-feature-wall-01.jpg',
    coverAlt: 'Finished grey panelled dining room wall',
    galleryImages: [
      { src: '/assets/projects/dining-feature-wall/dining-feature-wall-01.jpg', alt: 'Finished grey panelled dining room wall' },
      { src: '/assets/projects/dining-feature-wall/dining-feature-wall-02.jpg', alt: 'Dining room with grey feature wall and artwork' },
      { src: '/assets/projects/dining-feature-wall/dining-feature-wall-03.jpg', alt: 'Grey panelled wall with moulding details' },
      { src: '/assets/projects/dining-feature-wall/dining-feature-wall-04.jpg', alt: 'Niche wall with display shelves' },
      { src: '/assets/projects/dining-feature-wall/dining-feature-wall-05.jpg', alt: 'Dining room wall during the panelling work' }
    ],
    beforeAfter: {
      before: { src: '/assets/projects/dining-feature-wall/dining-feature-wall-05.jpg', alt: 'Dining room wall while the panelling work was in progress' },
      after: { src: '/assets/projects/dining-feature-wall/dining-feature-wall-02.jpg', alt: 'Finished grey panelled dining room wall' },
    },
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 3,
    slug: 'painted-wall-mural',
    title: 'Hand-Painted Feature Wall Mural',
    category: 'painting',
    serviceSlug: 'painting-waterproofing',
    location: '',
    description:
      'A bold hand-painted sun-and-stripes mural that brings colour and character to a room.',
    details: ['A geometric yellow sun with blue stripes, painted by hand with crisp, clean edges.'],
    scope: ['Wall preparation', 'Marking the design', 'Hand painting with clean edges'],
    coverImage: '/assets/projects/painted-mural/painted-mural-01.jpg',
    coverAlt: 'Yellow sun and blue stripes mural on a wall',
    galleryImages: [
      { src: '/assets/projects/painted-mural/painted-mural-01.jpg', alt: 'Yellow sun and blue stripes mural on a wall' },
      { src: '/assets/projects/painted-mural/painted-mural-02.jpg', alt: 'Painter finishing the sun mural' },
      { src: '/assets/projects/painted-mural/painted-mural-03.jpg', alt: 'Sun mural with vertical blue stripes' },
      { src: '/assets/projects/painted-mural/painted-mural-04.jpg', alt: 'Yellow and blue painted wall' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 4,
    slug: 'false-ceiling-cove-lighting',
    title: 'False Ceiling with Cove Lighting',
    category: 'false-ceiling',
    serviceSlug: 'false-ceiling',
    location: '',
    description:
      'Designer false ceilings with layered panels, cove lighting and spotlights.',
    details: ['False ceilings combining wood-finish panels, LED cove lighting, profile lights and spotlights for a warm, modern look.'],
    scope: ['Ceiling framework', 'Panel and board work', 'Cove, profile and spot lighting'],
    coverImage: '/assets/projects/false-ceiling/false-ceiling-01.jpg',
    coverAlt: 'False ceiling with blue cut-out panels and profile lighting',
    galleryImages: [
      { src: '/assets/projects/false-ceiling/false-ceiling-01.jpg', alt: 'False ceiling with blue cut-out panels and profile lighting' },
      { src: '/assets/projects/false-ceiling/false-ceiling-02.jpg', alt: 'Wood-finish false ceiling with cove lighting around a fan' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 5,
    slug: 'mirror-decorative-wall-panels',
    title: 'Mirror & Decorative Wall Panels',
    category: 'glass',
    serviceSlug: 'glass-work',
    location: '',
    description:
      'Decorative 3D wall panels with mirror inserts for homes, showrooms and commercial spaces.',
    details: ['White 3D panel walls with mirror inserts, a diamond-pattern mirror feature, and upholstered panels with framed mirrors.'],
    scope: ['3D panel installation', 'Mirror cutting and fixing', 'Upholstered wall panels'],
    coverImage: '/assets/projects/mirror-panels/mirror-panels-01.jpg',
    coverAlt: 'White 3D wall panels with square mirror inserts',
    galleryImages: [
      { src: '/assets/projects/mirror-panels/mirror-panels-01.jpg', alt: 'White 3D wall panels with square mirror inserts' },
      { src: '/assets/projects/mirror-panels/mirror-panels-02.jpg', alt: '3D panel wall with mirror squares' },
      { src: '/assets/projects/mirror-panels/mirror-panels-03.jpg', alt: 'Commercial space with upholstered panels and a mirror door' },
      { src: '/assets/projects/mirror-panels/mirror-panels-04.jpg', alt: 'Upholstered wall panels with a framed diamond mirror' },
      { src: '/assets/projects/mirror-panels/mirror-panels-05.jpg', alt: 'Diamond-pattern mirror feature on a wall' },
      { src: '/assets/projects/mirror-panels/mirror-panels-06.jpg', alt: 'White wall panel with circular mirror cut-outs' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 6,
    slug: 'bedroom-feature-walls',
    title: 'Bedroom Feature Walls',
    category: 'wallpaper',
    serviceSlug: 'wallpaper',
    location: '',
    description:
      'Bedroom feature walls with wallpaper, fluted panels and backlit headboard walls.',
    details: ['Feature walls behind the bed using wallpaper, fluted panels and LED backlighting, plus framed wallpaper panels.'],
    scope: ['Wallpaper installation', 'Fluted and backlit panels', 'Framed wall panels'],
    coverImage: '/assets/projects/bedroom-walls/bedroom-walls-01.jpg',
    coverAlt: 'Kids\' bedroom with arched jungle wallpaper and backlit headboard',
    galleryImages: [
      { src: '/assets/projects/bedroom-walls/bedroom-walls-01.jpg', alt: 'Kids\' bedroom with arched jungle wallpaper and backlit headboard' },
      { src: '/assets/projects/bedroom-walls/bedroom-walls-02.jpg', alt: 'Backlit headboard wall with fluted panels' },
      { src: '/assets/projects/bedroom-walls/bedroom-walls-03.jpg', alt: 'Framed landscape wallpaper panel' }
    ],
    videoUrl: '',
    featured: false,
    isSample: false,
  },
  {
    id: 7,
    slug: 'furniture-door-refinishing',
    title: 'Furniture & Door Refinishing',
    category: 'painting',
    serviceSlug: 'painting-waterproofing',
    location: '',
    description:
      'Repainting and refinishing doors and furniture for a fresh, even finish.',
    details: ['Surfaces are sanded, primed and spray-painted for a smooth, uniform finish.'],
    scope: ['Sanding and surface preparation', 'Priming', 'Spray painting'],
    coverImage: '/assets/projects/refinishing/refinishing-01.jpg',
    coverAlt: 'Painter refinishing a tall door panel',
    galleryImages: [
      { src: '/assets/projects/refinishing/refinishing-01.jpg', alt: 'Painter refinishing a tall door panel' },
      { src: '/assets/projects/refinishing/refinishing-02.jpg', alt: 'Freshly painted dark grey panel' }
    ],
    videoUrl: '',
    featured: false,
    isSample: false,
  },
  {
    id: 8,
    slug: 'building-facade-lighting',
    title: 'Building Facade Lighting',
    category: 'lighting',
    serviceSlug: 'lighting',
    location: '',
    description:
      'LED outline, wall-wash and festive lighting that makes a building front stand out after dark.',
    details: ['Outdoor-rated LED profiles and fittings run along the building elevation, with concealed cable routes and separate circuits so the lights can be switched or timed independently.'],
    scope: ['Lighting layout on the elevation', 'Outdoor cabling and drivers', 'LED outline and wall-light installation', 'Testing and timer setup'],
    coverImage: '/assets/projects/facade-lighting/facade-lighting-01.jpg',
    coverAlt: 'Five-storey building front outlined with warm LED facade lighting at night',
    galleryImages: [
      { src: '/assets/projects/facade-lighting/facade-lighting-01.jpg', alt: 'Five-storey building front outlined with warm LED facade lighting at night' },
      { src: '/assets/projects/facade-lighting/facade-lighting-02.jpg', alt: 'Building front covered in blue festive string lights' },
      { src: '/assets/projects/facade-lighting/facade-lighting-03.jpg', alt: 'LED outline lighting being installed on a building elevation' },
      { src: '/assets/projects/facade-lighting/facade-lighting-04.jpg', alt: 'Up-down wall lights along a boundary wall at dusk' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 9,
    slug: 'interior-lighting',
    title: 'Interior Lighting: Cove, Wall & Chandelier',
    category: 'lighting',
    serviceSlug: 'lighting',
    location: '',
    description:
      'Cove lights, LED wall lights, pendants and chandeliers that give each room a warm, layered look.',
    details: ['Lighting planned together with the false ceiling and wall panelling, so wires are concealed and every fitting sits exactly where it was designed to.'],
    scope: ['Lighting point layout', 'Concealed wiring', 'Cove and profile light installation', 'Chandelier, pendant and wall-light fitting'],
    coverImage: '/assets/projects/interior-lighting/interior-lighting-01.jpg',
    coverAlt: 'Living room false ceiling with cove lighting and a crystal chandelier',
    galleryImages: [
      { src: '/assets/projects/interior-lighting/interior-lighting-01.jpg', alt: 'Living room false ceiling with cove lighting and a crystal chandelier' },
      { src: '/assets/projects/interior-lighting/interior-lighting-02.jpg', alt: 'Feature wall with moulding frames and vertical LED wall lights' },
      { src: '/assets/projects/interior-lighting/interior-lighting-03.jpg', alt: 'Bedroom with pendant lights on both sides of the bed' }
    ],
    videoUrl: '',
    featured: true,
    isSample: false,
  },
  {
    id: 10,
    slug: 'electrical-panels-wiring',
    title: 'Electrical Panels & Wiring',
    category: 'electrical',
    serviceSlug: 'electrical-plumbing',
    location: '',
    description:
      'Distribution boards, main panels and conduit work, wired neatly, labelled and tested.',
    details: ['From flat distribution boards to building main panels, every circuit is sized for its load, colour-coded and tested before handover.'],
    scope: ['Load planning', 'Conduit and cable laying', 'DB, MCB and RCCB installation', 'Main panel installation', 'Testing and labelling'],
    coverImage: '/assets/projects/electrical-panels/electrical-panels-01.jpg',
    coverAlt: 'Distribution board wired neatly with MCBs and colour-coded cables',
    galleryImages: [
      { src: '/assets/projects/electrical-panels/electrical-panels-01.jpg', alt: 'Distribution board wired neatly with MCBs and colour-coded cables' },
      { src: '/assets/projects/electrical-panels/electrical-panels-02.jpg', alt: 'Two distribution boards being wired inside a wall recess' },
      { src: '/assets/projects/electrical-panels/electrical-panels-03.jpg', alt: 'Close-up of MCB and RCCB wiring with heavy supply cables' },
      { src: '/assets/projects/electrical-panels/electrical-panels-04.jpg', alt: 'Main electrical panel installed in a building service area' },
      { src: '/assets/projects/electrical-panels/electrical-panels-05.jpg', alt: 'Floor-standing main panel with metering compartments' },
      { src: '/assets/projects/electrical-panels/electrical-panels-06.jpg', alt: 'Main panel and sub-boards in a building under fit-out' },
      { src: '/assets/projects/electrical-panels/electrical-panels-07.jpg', alt: 'Surface conduits and junction box run on a brick wall' }
    ],
    videoUrl: '',
    featured: false,
    isSample: false,
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
  const ideaItems = ideas.map((d, i) => ({
    key: `idea-${i}`,
    type: 'image',
    src: d.src,
    alt: d.alt,
    category: d.category,
    isIdea: true,
    credit: `Photo: ${d.author} (${d.license})`,
  }));
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
  return [...items, ...ideaItems];
};

export default projects;

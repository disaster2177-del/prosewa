/**
 * SERVICES DATA
 * Each entry powers a service card AND its dedicated page at /services/<slug>.
 *
 * To change an image: put your photo in /public/assets/services/ and update `image`.
 * `galleryCategory` links the service to matching items in the gallery/projects.
 * `related` lists slugs of other services to cross-link at the bottom of the page.
 */

const services = [
  {
    slug: 'home-renovation',
    title: 'Home Renovation & Remodeling',
    icon: 'Hammer',
    galleryCategory: 'renovation',
    image: '/assets/services/home-renovation.jpg',
    imageAlt: 'Living room being renovated with new flooring and freshly plastered walls',
    summary:
      'Renovations and layout changes that update older homes and make better use of the space.',
    metaTitle: 'Home Renovation & Remodeling in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Home renovation and remodeling in Gurugram, Delhi NCR and Noida: layout changes, room upgrades, flooring, finishes and full-home refurbishments. Request a consultation today.',
    intro: [
      'Renovation is about improving the home you already have. That can mean a full refurbishment of an older flat or house, or focused upgrades to a few rooms, finishes or fittings.',
      'Because renovation often happens in occupied homes or societies with rules, we plan the sequence of work, debris removal and working hours with you in advance. We inspect the existing structure, plumbing and wiring first, so hidden problems are found early rather than midway through.',
    ],
    workTypes: [
      'Full home refurbishment',
      'Wall removal and layout changes (subject to structural review)',
      'Room additions and balcony conversions',
      'Old flooring and tile replacement',
      'Re-plastering, painting and wall finishes',
      'Upgrading old wiring and plumbing lines',
    ],
    requirements: [
      'Property type (flat, builder floor, independent house) and location',
      'Rooms or areas to be renovated',
      'Photos of the current condition, if convenient',
      'Society / RWA rules on working hours and debris, if applicable',
    ],
    faqs: [
      {
        q: 'Can I stay in my home during the renovation?',
        a: 'It depends on the extent of the work. For partial renovations we can phase the work room by room. For large refurbishments, moving out temporarily is often more practical.',
      },
      {
        q: 'Can you remove or move walls?',
        a: 'Non-load-bearing walls can usually be changed. Any change to load-bearing elements needs review by a structural engineer before work is planned.',
      },
      {
        q: 'Do you handle debris disposal?',
        a: 'Debris handling is discussed and included in the scope so the site is managed in line with your society’s requirements.',
      },
    ],
    related: ['interior-finishing', 'moulding-work', 'wooden-flooring'],
  },
  {
    slug: 'interior-finishing',
    title: 'Interior Improvement & Finishing',
    icon: 'PaintRoller',
    galleryCategory: 'interiors',
    image: '/assets/services/interior-finishing.jpg',
    imageAlt: 'Finished modern interior with a feature wall, wooden panelling and ceiling lights',
    summary:
      'Finishing work that gives interiors a refined look: wall treatments, panelling, carpentry and detailing.',
    metaTitle: 'Interior Finishing Services in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Interior improvement and finishing in Gurugram, Delhi NCR and Noida: wall panelling, carpentry, feature walls, wardrobes and detailing for homes and offices. Request a consultation.',
    intro: [
      'Finishing determines how a space looks and feels day to day. We focus on clean lines, careful joinery and finishes that are practical to maintain.',
      'Whether you are completing a new home or refreshing an existing one, we help turn your ideas, reference images or your designer’s drawings into finished work on site.',
    ],
    workTypes: [
      'Feature walls and wall panelling',
      'Wardrobes, storage and TV units',
      'Doors, frames and architraves',
      'Wallpaper, textures and decorative finishes',
      'Partition walls and room dividers',
      'Final detailing and touch-ups',
    ],
    requirements: [
      'Rooms to be finished and their approximate sizes',
      'Reference images or design drawings',
      'Preferred materials and colour palette',
      'Whether furniture will remain in place during work',
    ],
    faqs: [
      {
        q: 'Do you work with interior designers?',
        a: 'Yes. We can execute from your designer’s drawings, or work directly from your references and requirements.',
      },
      {
        q: 'Can you match finishes to existing interiors?',
        a: 'We discuss samples with you before work starts so new finishes complement what is already in place.',
      },
      {
        q: 'Is carpentry done on site?',
        a: 'Depending on the item, carpentry may be built on site or fabricated off site and installed. We explain the approach for each item during scoping.',
      },
    ],
    related: ['moulding-work', 'pvc-panels', 'false-ceiling'],
  },
  {
    slug: 'moulding-work',
    title: 'Wall Moulding Work',
    icon: 'Frame',
    galleryCategory: 'moulding',
    image: '/assets/services/moulding-work.jpg',
    imageAlt: 'Living room wall finished with full-height decorative moulding frames',
    summary:
      'Classic wall moulding and frame panelling that turns plain walls into elegant feature walls.',
    metaTitle: 'Wall Moulding Work in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Wall moulding and panelling in Gurugram, Delhi NCR and Noida: frame moulding, wainscoting, cornices and feature walls for living rooms, bedrooms and dining areas.',
    intro: [
      'Moulding adds depth, shadow lines and a premium finish to an ordinary wall. We design and install frame moulding, wainscoting and cornice profiles for living rooms, bedrooms, dining areas and entrance lobbies.',
      'Every layout is marked out to suit your wall size, switchboards, doors and furniture, so the frames look balanced. After fixing, the joints are filled, sanded and painted for a seamless finish.',
    ],
    workTypes: [
      'Frame and box moulding on walls',
      'Wainscoting and half-wall panelling',
      'Cornice and ceiling border moulding',
      'TV and bed-back feature walls',
      'PU, PS and wooden moulding profiles',
      'Putty, sanding and painting of moulding',
    ],
    requirements: [
      'Rooms and walls you want to upgrade',
      'Approximate wall sizes and ceiling height',
      'Photos or references of designs you like',
      'Preferred finish colour (matching or contrast)',
    ],
    faqs: [
      {
        q: 'Which material is used for wall moulding?',
        a: 'We work with PU, PS (polystyrene) and wooden profiles. PU and PS are light, moisture-resistant and easy to paint; we suggest the best option for your wall and budget.',
      },
      {
        q: 'Can moulding be added to an already painted wall?',
        a: 'Yes. The moulding is fixed on the existing wall, then joints are filled and the wall is repainted so everything looks like one finish.',
      },
      {
        q: 'How long does moulding work take?',
        a: 'A single feature wall usually takes a few days including painting. A full house takes longer; we share a timeline after seeing the scope.',
      },
    ],
    related: ['pvc-panels', 'wallpaper', 'painting-waterproofing'],
  },
  {
    slug: 'pvc-panels',
    title: 'PVC Wall & Ceiling Panels',
    icon: 'PanelsTopLeft',
    galleryCategory: 'pvc-panels',
    image: '/assets/ideas/pvc-panels/pvc-panels-01.jpg',
    imageAlt: 'Dining wall finished with bold 3D wall panels',
    summary:
      'Water-resistant, low-maintenance PVC panels for feature walls, ceilings, bathrooms and balconies.',
    metaTitle: 'PVC Wall Panels & PVC Ceiling in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'PVC wall panels and PVC ceilings in Gurugram, Delhi NCR and Noida: marble-finish sheets, 3D panels and waterproof ceilings for homes, offices and shops.',
    intro: [
      'PVC panels are a quick, clean way to give walls and ceilings a finished look. They resist moisture and termites, need almost no maintenance and are a good fit for damp walls, bathrooms, balconies and kitchens.',
      'We install marble-finish PVC sheets, 3D panels and PVC ceiling strips on a proper frame or direct fixing, with matching trims and corner profiles for a neat edge.',
    ],
    workTypes: [
      'PVC marble sheets for feature walls',
      '3D and designer PVC wall panels',
      'PVC ceiling panels for rooms and balconies',
      'Bathroom and kitchen wall cladding',
      'Covering damp or uneven walls',
      'Trims, corner profiles and lighting cut-outs',
    ],
    requirements: [
      'Area to be covered and approximate size',
      'Whether the wall has damp or seepage issues',
      'Preferred design or colour references',
      'Light, switch and AC positions on the wall',
    ],
    faqs: [
      {
        q: 'Are PVC panels waterproof?',
        a: 'PVC panels do not absorb water, which makes them suitable for bathrooms and damp walls. Any active leakage should still be repaired first, so we check the wall before installing.',
      },
      {
        q: 'How long do PVC panels last?',
        a: 'Good-quality panels last for many years indoors with simple cleaning. We help you choose a thickness and grade that suits the area.',
      },
      {
        q: 'Can PVC panels be fixed on a ceiling?',
        a: 'Yes. PVC ceilings are light, quick to install and popular for balconies, bathrooms and shops.',
      },
    ],
    related: ['louvers', 'false-ceiling', 'wallpaper'],
  },
  {
    slug: 'louvers',
    title: 'Wall Louvers & Fluted Panels',
    icon: 'Columns3',
    galleryCategory: 'louvers',
    image: '/assets/services/louvers.jpg',
    imageAlt: 'Bed-back wall with fluted panels and LED backlighting',
    summary:
      'Vertical louvers and fluted panels for TV walls, bed-backs, partitions and entrance features.',
    metaTitle: 'Wall Louvers & Fluted Panels in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Wall louver and fluted panel installation in Gurugram, Delhi NCR and Noida: WPC, PVC and wooden louvers for TV units, bed-back walls, partitions and offices.',
    intro: [
      'Louvers and fluted panels add strong vertical lines and texture, making a wall look taller and more premium. They work beautifully behind TVs and beds, around pillars and as room dividers.',
      'We install WPC, PVC and wood-finish louvers in a range of colours, and can combine them with profile lights, mirrors or moulding for a complete feature wall.',
    ],
    workTypes: [
      'TV unit and bed-back louver walls',
      'WPC and PVC fluted panels',
      'Wood-finish and charcoal louvers',
      'Louver partitions and room dividers',
      'Pillar and column cladding',
      'Louvers with LED profile lighting',
    ],
    requirements: [
      'Wall or area size',
      'Colour and finish you prefer',
      'Whether you want lighting integrated',
      'Photos of the current wall',
    ],
    faqs: [
      {
        q: 'What is the difference between WPC and PVC louvers?',
        a: 'WPC (wood-plastic composite) louvers are thicker and feel more like wood; PVC louvers are lighter and more economical. Both resist moisture and termites.',
      },
      {
        q: 'Can louvers be fixed on a wall with switchboards?',
        a: 'Yes. Switchboards and sockets are cut out neatly or brought forward so they sit flush with the panels.',
      },
      {
        q: 'Do louvers need polishing?',
        a: 'No. WPC and PVC louvers come pre-finished and only need occasional dusting.',
      },
    ],
    related: ['pvc-panels', 'moulding-work', 'glass-work'],
  },
  {
    slug: 'wallpaper',
    title: 'Wallpaper Installation',
    icon: 'Wallpaper',
    galleryCategory: 'wallpaper',
    image: '/assets/services/wallpaper.jpg',
    imageAlt: "Kids' bedroom with arched jungle wallpaper and backlit headboard",
    summary:
      'Designer, textured and customised wallpapers installed with clean joints and a smooth finish.',
    metaTitle: 'Wallpaper Installation in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Wallpaper installation in Gurugram, Delhi NCR and Noida: designer, textured, 3D and customised photo wallpapers for bedrooms, living rooms, kids’ rooms and offices.',
    intro: [
      'Wallpaper is one of the fastest ways to change the mood of a room. From subtle textures to bold prints and custom murals, the right wallpaper creates a feature wall in a day.',
      'We prepare the wall properly, match patterns at every joint and trim edges cleanly around windows, switches and skirting, so the finish looks seamless.',
    ],
    workTypes: [
      'Designer and textured wallpapers',
      'Customised photo and mural wallpapers',
      "Kids' room theme wallpapers",
      'Wallpaper inside moulding frames',
      'Office and reception feature walls',
      'Wall preparation and old wallpaper removal',
    ],
    requirements: [
      'Rooms and wall sizes',
      'Design, pattern or theme you like',
      'Condition of the wall (any damp or cracks)',
      'Whether you need help choosing a design',
    ],
    faqs: [
      {
        q: 'Will wallpaper peel off over time?',
        a: 'On a dry, properly prepared wall with the right adhesive, wallpaper stays in place for years. We check the wall for damp before installing.',
      },
      {
        q: 'Can I get a customised wallpaper?',
        a: 'Yes. Custom prints can be made to your wall size, with your chosen design, photo or theme.',
      },
      {
        q: 'Can wallpaper be cleaned?',
        a: 'Most modern wallpapers are washable or wipeable. We tell you how to care for the type you choose.',
      },
    ],
    related: ['moulding-work', 'pvc-panels', 'painting-waterproofing'],
  },
  {
    slug: 'glass-work',
    title: 'Glass & Mirror Work',
    icon: 'GlassWater',
    galleryCategory: 'glass',
    image: '/assets/services/glass-work.jpg',
    imageAlt: 'Decorative wall with mirror inserts and glass detailing',
    summary:
      'Glass partitions, shower enclosures, mirror walls and decorative glass for homes and offices.',
    metaTitle: 'Glass Partitions & Mirror Work in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Glass and mirror work in Gurugram, Delhi NCR and Noida: toughened glass partitions, shower enclosures, mirror walls, glass doors and decorative glass for homes and offices.',
    intro: [
      'Glass makes spaces feel open and bright. We install toughened glass partitions, shower enclosures and frameless doors, along with mirror walls and decorative glass features.',
      'Every piece is measured on site and fixed with suitable hardware and sealants, so it is safe, aligned and easy to maintain.',
    ],
    workTypes: [
      'Toughened glass office partitions',
      'Bathroom shower enclosures',
      'Frameless glass doors',
      'Mirror walls and designer mirrors',
      'Bevelled and diamond-pattern mirror features',
      'Frosted, tinted and printed glass',
    ],
    requirements: [
      'Location and approximate size of the glass work',
      'Type of glass or mirror you have in mind',
      'Photos of the area',
      'Whether doors or openings are needed',
    ],
    faqs: [
      {
        q: 'Do you use toughened glass?',
        a: 'Yes. Partitions, doors and shower enclosures use toughened safety glass of a suitable thickness.',
      },
      {
        q: 'Can you make a mirror wall in a living room?',
        a: 'Yes. Mirror walls and diamond-pattern mirror features are cut to size and fixed securely to the wall.',
      },
      {
        q: 'Is glass work suitable for offices?',
        a: 'Glass partitions are very popular in offices because they divide space while keeping it bright and open.',
      },
    ],
    related: ['louvers', 'kitchen-bathroom-renovation', 'commercial-improvement'],
  },
  {
    slug: 'false-ceiling',
    title: 'False Ceiling',
    icon: 'Layers',
    galleryCategory: 'false-ceiling',
    image: '/assets/services/false-ceiling.jpg',
    imageAlt: 'Gypsum false ceiling with cove lighting in a modern living room',
    summary:
      'Gypsum, POP and PVC false ceilings with cove, profile and spot lighting that complete a room.',
    metaTitle: 'False Ceiling Design & Installation in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'False ceiling installation in Gurugram, Delhi NCR and Noida: gypsum and POP ceilings, cove and profile lighting, for homes and offices.',
    intro: [
      'A well-designed false ceiling hides wiring and ducts, makes room for lighting and changes how a room feels. We build gypsum and POP ceilings with neat joints and level surfaces.',
      'We coordinate the ceiling layout with your lighting plan and AC positions so that cut-outs, coves and access panels sit where they should.',
    ],
    workTypes: [
      'Gypsum board false ceilings',
      'POP ceilings and cornices',
      'Cove and profile lighting provisions',
      'Grid ceilings for offices',
      'PVC and wooden ceiling panels',
      'Access panels for AC and services',
    ],
    requirements: [
      'Rooms and approximate ceiling areas',
      'Lighting and AC plans, if decided',
      'Design references you like',
      'Ceiling height of the rooms',
    ],
    faqs: [
      {
        q: 'Gypsum or POP: which is better?',
        a: 'Both have their uses. Gypsum boards are faster to install and give a uniform finish; POP allows more freeform detailing. We can explain which suits your design.',
      },
      {
        q: 'Will a false ceiling reduce room height?',
        a: 'Yes, by the depth of the ceiling. Designs can keep this to a minimum, so we look at your room height before suggesting a layout.',
      },
      {
        q: 'Can lights be added later?',
        a: 'It is far easier to plan the lighting before the ceiling is closed, so we recommend deciding positions during design.',
      },
    ],
    related: ['pvc-panels', 'louvers', 'electrical-plumbing'],
  },
  {
    slug: 'wooden-flooring',
    title: 'Wooden Flooring',
    icon: 'Rows3',
    galleryCategory: 'flooring',
    image: '/assets/ideas/flooring/wooden-flooring-01.jpg',
    imageAlt: 'Warm laminate wooden flooring by a garden door',
    summary:
      'Laminate, engineered and SPC wooden flooring that brings warmth to bedrooms, living rooms and offices.',
    metaTitle: 'Wooden Flooring in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Wooden flooring installation in Gurugram, Delhi NCR and Noida: laminate, engineered wood and SPC flooring with underlay, skirting and finishing for homes and offices.',
    intro: [
      'Wooden flooring adds warmth and comfort underfoot, and modern laminate and SPC options are easy to maintain. It can usually be laid over the existing floor, with little dust or breakage.',
      'We level the base, lay a suitable underlay, install the planks with expansion gaps and finish the edges with matching skirting and profiles.',
    ],
    workTypes: [
      'Laminate wooden flooring',
      'Engineered wood flooring',
      'SPC and vinyl plank flooring',
      'Installation over existing tiles or marble',
      'Matching skirting and threshold profiles',
      'Wooden deck flooring for balconies',
    ],
    requirements: [
      'Rooms and approximate floor area',
      'Current floor type and condition',
      'Preferred shade and finish',
      'Whether the area gets water exposure',
    ],
    faqs: [
      {
        q: 'Can wooden flooring be laid over existing tiles?',
        a: 'In most cases, yes, as long as the existing floor is level and firm. We check the floor before suggesting this.',
      },
      {
        q: 'Laminate or SPC: which should I choose?',
        a: 'Laminate gives a natural wood feel for dry rooms; SPC is fully water-resistant and suits kitchens and high-traffic areas. We help you decide based on the room.',
      },
      {
        q: 'How long does installation take?',
        a: 'A typical room can be completed in a day. Larger homes take a few days.',
      },
    ],
    related: ['flooring-tiling', 'louvers', 'home-renovation'],
  },
  {
    slug: 'flooring-tiling',
    title: 'Flooring, Tiling & Marble Work',
    icon: 'Grid3x3',
    galleryCategory: 'flooring',
    image: '/assets/ideas/renovation/bathroom-01.jpg',
    imageAlt: 'Polished marble floor with precise joints in a living area',
    summary:
      'Precise installation of tiles, marble, granite and stone, plus polishing and floor restoration.',
    metaTitle: 'Flooring, Tiling & Marble Work in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Flooring and tiling services in Gurugram, Delhi NCR and Noida: vitrified tiles, marble, granite, stone laying and marble polishing for homes and commercial spaces.',
    intro: [
      'Floors take more wear than any other surface in a building. Good installation depends on accurate levels, proper bedding and neat joints. Those details decide how the floor looks and how long it lasts.',
      'We lay and finish a wide range of materials and help you weigh appearance, maintenance and use when choosing between them.',
    ],
    workTypes: [
      'Vitrified and ceramic tile laying',
      'Marble and granite flooring',
      'Kota and natural stone',
      'Marble polishing and restoration',
      'Staircase cladding and skirting',
      'Outdoor and terrace paving',
    ],
    requirements: [
      'Area in square feet (approximate is fine)',
      'Preferred material, or ask us for options',
      'Whether old flooring needs to be removed',
      'Rooms that must stay usable during the work',
    ],
    faqs: [
      {
        q: 'Can new tiles be laid over existing flooring?',
        a: 'Sometimes, depending on the condition and level of the existing floor and on door clearances. We check this on site before recommending an approach.',
      },
      {
        q: 'Do you supply the tiles or marble?',
        a: 'We can work with material you purchase, or discuss sourcing as part of the scope. Either way is recorded clearly in the quotation.',
      },
      {
        q: 'How do I choose between marble and tiles?',
        a: 'It depends on your budget, the look you want, maintenance and where the floor is. We can explain the trade-offs during the consultation.',
      },
    ],
    related: ['wooden-flooring', 'home-renovation', 'kitchen-bathroom-renovation'],
  },
  {
    slug: 'painting-waterproofing',
    title: 'Painting, Plastering & Waterproofing',
    icon: 'Droplets',
    galleryCategory: 'painting',
    image: '/assets/services/painting-waterproofing.jpg',
    imageAlt: 'Freshly painted exterior wall with smooth plaster finish',
    summary:
      'Surface preparation, plastering, interior and exterior painting, and waterproofing against seepage.',
    metaTitle: 'Painting, Plastering & Waterproofing in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Painting, plastering and waterproofing services in Gurugram, Delhi NCR and Noida: interior and exterior painting, putty, terrace and wall waterproofing, and seepage treatment.',
    intro: [
      'A paint finish is only as good as the surface under it. We prepare walls properly, repairing cracks, applying plaster and putty where needed and treating damp, before the paint goes on.',
      'The monsoon and summer heat in Delhi NCR are hard on terraces, external walls and wet areas. Where waterproofing is needed, we identify the likely source of seepage before choosing a treatment.',
    ],
    workTypes: [
      'Interior wall and ceiling painting',
      'Exterior facade painting',
      'Internal and external plastering',
      'Wall putty and surface preparation',
      'Terrace and roof waterproofing',
      'Damp and seepage treatment',
    ],
    requirements: [
      'Interior, exterior or both',
      'Approximate number of rooms or wall area',
      'Visible damp, cracks or peeling paint',
      'Preferred shades or finishes',
    ],
    faqs: [
      {
        q: 'Why does paint peel on damp walls?',
        a: 'Moisture behind the surface pushes the paint off. The source of the moisture needs to be fixed first, otherwise the problem returns.',
      },
      {
        q: 'When is the best time for exterior painting or waterproofing?',
        a: 'Dry weather is generally preferred. We can plan the schedule around the season and the condition of the surface.',
      },
      {
        q: 'Do you move furniture during interior painting?',
        a: 'We discuss covering and moving furniture during planning so your belongings are protected.',
      },
    ],
    related: ['moulding-work', 'wallpaper', 'false-ceiling'],
  },
  {
    slug: 'kitchen-bathroom-renovation',
    title: 'Kitchen & Bathroom Renovation',
    icon: 'Bath',
    galleryCategory: 'renovation',
    image: '/assets/ideas/renovation/kitchen-01.jpg',
    imageAlt: 'Renovated bathroom with large-format wall tiles and a glass shower partition',
    summary:
      'Kitchens and bathrooms rebuilt with proper waterproofing, plumbing and durable finishes.',
    metaTitle: 'Kitchen & Bathroom Renovation in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Kitchen and bathroom renovation in Gurugram, Delhi NCR and Noida: waterproofing, plumbing, tiling, sanitaryware and modular kitchen fit-outs. Discuss your project with us.',
    intro: [
      'Kitchens and bathrooms are the most-used and most technical rooms in a home. A good renovation gets the parts you cannot see right first: plumbing lines, slopes, drainage and waterproofing. Only then come the tiles and fittings.',
      'We plan the layout with you, including the positions of fixtures, outlets and storage, and then complete the plumbing, electrical, tiling and finishing work in the right order.',
    ],
    workTypes: [
      'Complete bathroom rebuilds',
      'Bathroom waterproofing and leak repair',
      'Wall and floor tiling',
      'Sanitaryware and CP fitting installation',
      'Kitchen platform, sink and backsplash work',
      'Modular kitchen installation support',
    ],
    requirements: [
      'Number of kitchens / bathrooms and approximate sizes',
      'Any existing leakage or seepage issues',
      'Preferred tiles, fittings or brands',
      'Photos of the current space, if convenient',
    ],
    faqs: [
      {
        q: 'Why is waterproofing important in bathroom renovation?',
        a: 'Without proper waterproofing, water can seep into walls and into ceilings below. We treat floors and wet-wall areas before tiling.',
      },
      {
        q: 'Can I reuse my existing fittings?',
        a: 'Fittings in good condition can often be reused. We will tell you honestly if something is better replaced.',
      },
      {
        q: 'Can you change the bathroom layout?',
        a: 'Layout changes are often possible but depend on drainage positions and the floor below. We assess this during the site visit.',
      },
    ],
    related: ['glass-work', 'pvc-panels', 'electrical-plumbing'],
  },
  {
    slug: 'electrical-plumbing',
    title: 'Electrical & Plumbing Work',
    icon: 'Plug',
    galleryCategory: 'renovation',
    image: '/assets/services/electrical-plumbing.svg',
    imageAlt: 'Concealed conduit and plumbing lines installed before plastering',
    summary:
      'Concealed wiring, distribution boards, water supply and drainage lines, installed neatly and safely.',
    metaTitle: 'Electrical & Plumbing Work in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Electrical and plumbing services in Gurugram, Delhi NCR and Noida for renovation and interior projects: concealed wiring, DB upgrades, water supply, drainage and fixture installation.',
    intro: [
      'Electrical and plumbing systems are hidden in walls and floors, so mistakes are expensive to fix later. We plan routes, points and loads carefully during renovation or renovation.',
      'From new concealed installations to replacing old lines in existing homes, we try to make the systems both safe and easy to maintain.',
    ],
    workTypes: [
      'Concealed electrical wiring and conduits',
      'Distribution board and MCB upgrades',
      'Switch, socket and lighting points',
      'Water supply lines (CPVC / PPR)',
      'Drainage and sewer line work',
      'Fixture, geyser and pump installation',
    ],
    requirements: [
      'New installation or replacement of existing lines',
      'Number of rooms / points needed',
      'Any current problems (tripping, low pressure, leaks)',
      'Appliance and load requirements',
    ],
    faqs: [
      {
        q: 'Should old wiring be replaced during renovation?',
        a: 'If the wiring is old or was not designed for modern loads, replacing it during renovation is far easier than later. We assess the condition on site.',
      },
      {
        q: 'Can you fix low water pressure?',
        a: 'Low pressure can come from pipe sizing, blockages, tank height or the pump. We look for the cause before recommending a fix.',
      },
      {
        q: 'Do you provide a point layout before wiring?',
        a: 'Yes. We go through switch, socket and light positions with you room by room before conduits are laid.',
      },
    ],
    related: ['kitchen-bathroom-renovation', 'false-ceiling', 'home-renovation'],
  },
  {
    slug: 'commercial-improvement',
    title: 'Office & Shop Interiors',
    icon: 'Building2',
    galleryCategory: 'interiors',
    image: '/assets/services/commercial-improvement.jpg',
    imageAlt: 'Renovated commercial office space with glass partitions and ceiling grid',
    summary:
      'Fit-outs, repairs and upgrades for shops, offices and commercial buildings, planned around your business.',
    metaTitle: 'Office & Shop Interiors in Gurugram, Delhi NCR & Noida',
    metaDescription:
      'Office and shop interiors in Gurugram, Delhi NCR and Noida: fit-outs, glass partitions, false ceilings, panelling, flooring and painting. Request a consultation.',
    intro: [
      'Commercial spaces need work that looks professional, holds up to heavy use and causes as little disruption to business as possible. We plan the scope, sequence and working hours around your operations.',
      'From a single shopfront refresh to upgrading a whole floor, we bring together the interior, finishing and services trades under one plan.',
    ],
    workTypes: [
      'Office and shop fit-outs',
      'Partitions and false ceilings',
      'Commercial flooring and tiling',
      'Facade repair and repainting',
      'Washroom and pantry upgrades',
      'Electrical and plumbing upgrades',
    ],
    requirements: [
      'Property type and approximate area',
      'Building or mall rules on working hours',
      'Your target completion or opening date',
      'Layout drawings, if available',
    ],
    faqs: [
      {
        q: 'Can work be done outside business hours?',
        a: 'Where building rules allow, work can be scheduled to reduce disruption. We discuss this while planning.',
      },
      {
        q: 'Do you handle multi-trade fit-outs?',
        a: 'Yes. We coordinate glass, ceiling, panelling, flooring, painting, electrical and plumbing work under a single scope.',
      },
      {
        q: 'Can you work in occupied commercial buildings?',
        a: 'Yes, with planning for access, dust control and debris removal in line with building management requirements.',
      },
    ],
    related: ['glass-work', 'false-ceiling', 'louvers'],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;

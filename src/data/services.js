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
    slug: 'civil-construction',
    title: 'Civil Construction',
    icon: 'HardHat',
    galleryCategory: 'civil',
    image: '/assets/services/civil-construction.svg',
    imageAlt: 'Reinforced concrete columns and beams under construction at a residential site',
    summary:
      'Structural and civil work, from foundations and RCC frames to boundary walls and site development.',
    metaTitle: 'Civil Construction Contractor in Gurugram',
    metaDescription:
      'Civil construction services in Gurugram: foundations, RCC structures, brickwork, boundary walls and site development. Discuss your project and request a consultation.',
    intro: [
      'Civil work sets the strength and lifespan of a building. We handle the structural side of residential and small commercial projects in Gurugram: excavation, foundations, RCC columns, beams and slabs, masonry and the site work around them.',
      'We work from your approved structural drawings and coordinate with your architect or structural engineer, so the work on site follows the design. If you are still at the planning stage, we can talk through the scope and the steps involved before any work begins.',
    ],
    workTypes: [
      'Excavation and foundation work',
      'RCC columns, beams and slabs',
      'Brick and block masonry',
      'Boundary walls and retaining walls',
      'Staircases, lintels and chajjas',
      'Site levelling, drainage and paving',
    ],
    requirements: [
      'Plot location and approximate size',
      'Approved architectural / structural drawings, if available',
      'Number of floors planned',
      'Preferred start date and any site-access constraints',
    ],
    faqs: [
      {
        q: 'Do you work from my architect’s structural drawings?',
        a: 'Yes. Structural work should follow drawings prepared by a qualified engineer. We review them with you and coordinate with your architect or engineer during execution.',
      },
      {
        q: 'Can you take on only part of the civil work?',
        a: 'Yes. Tell us which stages you need, for example only the foundation and frame or only masonry, and we will discuss whether it fits our scope.',
      },
      {
        q: 'How is a civil work estimate prepared?',
        a: 'Estimates depend on the drawings, quantities, material specifications and site conditions. We prepare a quotation after understanding these, usually following a site visit.',
      },
    ],
    related: ['home-construction', 'painting-waterproofing', 'commercial-improvement'],
  },
  {
    slug: 'home-construction',
    title: 'Complete Home Construction',
    icon: 'Home',
    galleryCategory: 'construction',
    image: '/assets/services/home-construction.svg',
    imageAlt: 'Newly built two-storey residential house with a modern facade',
    summary:
      'End-to-end construction of independent homes and builder floors, from the structure to the final finishes.',
    metaTitle: 'Home Construction Services in Gurugram',
    metaDescription:
      'Complete home construction in Gurugram, from structure and masonry to plumbing, electrical and finishing. Share your plans and request a free consultation.',
    intro: [
      'Building a home involves many trades working in sequence: civil, plumbing, electrical, flooring, carpentry, painting and more. We manage these stages together, so you have one point of contact instead of coordinating several contractors yourself.',
      'We begin by understanding your plot, your drawings, your budget range and how you plan to use each floor. The scope, materials and stages are then discussed and agreed in writing before work starts.',
    ],
    workTypes: [
      'Independent houses and villas',
      'Builder floors and multi-storey homes',
      'Structure, masonry and plastering',
      'Concealed electrical and plumbing',
      'Flooring, tiling, doors and windows',
      'Painting and final finishing',
    ],
    requirements: [
      'Plot location, size and orientation',
      'Architectural plans or a rough layout of rooms and floors',
      'Material and finish preferences',
      'Approximate budget range and target timeline',
    ],
    faqs: [
      {
        q: 'Do you help with building drawings and approvals?',
        a: 'Building plan approvals and drawings are prepared by licensed architects and engineers. We can work with your chosen professional and build to the approved plans.',
      },
      {
        q: 'Can I choose my own materials and brands?',
        a: 'Yes. Material choices are discussed during scoping and recorded in the quotation so both sides are clear on the specification.',
      },
      {
        q: 'How long does it take to build a house?',
        a: 'Timelines depend on the built-up area, the number of floors, the design and material availability. We give an estimated schedule once the scope is finalised.',
      },
    ],
    related: ['civil-construction', 'interior-finishing', 'electrical-plumbing'],
  },
  {
    slug: 'home-renovation',
    title: 'Home Renovation & Remodeling',
    icon: 'Hammer',
    galleryCategory: 'renovation',
    image: '/assets/services/home-renovation.svg',
    imageAlt: 'Living room being renovated with new flooring and freshly plastered walls',
    summary:
      'Renovations and layout changes that update older homes and make better use of the space.',
    metaTitle: 'Home Renovation & Remodeling in Gurugram',
    metaDescription:
      'Home renovation and remodeling in Gurugram: layout changes, room upgrades, flooring, finishes and full-home refurbishments. Request a consultation today.',
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
    related: ['interior-finishing', 'kitchen-bathroom-renovation', 'flooring-tiling'],
  },
  {
    slug: 'interior-finishing',
    title: 'Interior Improvement & Finishing',
    icon: 'PaintRoller',
    galleryCategory: 'interiors',
    image: '/assets/services/interior-finishing.svg',
    imageAlt: 'Finished modern interior with a feature wall, wooden panelling and ceiling lights',
    summary:
      'Finishing work that gives interiors a refined look: wall treatments, panelling, carpentry and detailing.',
    metaTitle: 'Interior Finishing Services in Gurugram',
    metaDescription:
      'Interior improvement and finishing in Gurugram: wall panelling, carpentry, feature walls, wardrobes and detailing for homes and offices. Request a consultation.',
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
    related: ['false-ceiling', 'painting-waterproofing', 'home-renovation'],
  },
  {
    slug: 'kitchen-bathroom-renovation',
    title: 'Kitchen & Bathroom Renovation',
    icon: 'Bath',
    galleryCategory: 'renovation',
    image: '/assets/services/kitchen-bathroom-renovation.svg',
    imageAlt: 'Renovated bathroom with large-format wall tiles and a glass shower partition',
    summary:
      'Kitchens and bathrooms rebuilt with proper waterproofing, plumbing and durable finishes.',
    metaTitle: 'Kitchen & Bathroom Renovation in Gurugram',
    metaDescription:
      'Kitchen and bathroom renovation in Gurugram: waterproofing, plumbing, tiling, sanitaryware and modular kitchen fit-outs. Discuss your project with us.',
    intro: [
      'Kitchens and bathrooms are the most-used and most technical rooms in a home. A good renovation gets the parts you cannot see right first: plumbing lines, slopes, drainage and waterproofing. Only then come the tiles and fittings.',
      'We plan the layout with you, including the positions of fixtures, outlets and storage, and then complete the civil, plumbing, electrical and finishing work in the right order.',
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
    related: ['electrical-plumbing', 'flooring-tiling', 'home-renovation'],
  },
  {
    slug: 'flooring-tiling',
    title: 'Flooring, Tiling & Marble Work',
    icon: 'Grid3x3',
    galleryCategory: 'flooring',
    image: '/assets/services/flooring-tiling.svg',
    imageAlt: 'Polished marble floor with precise joints in a living area',
    summary:
      'Precise installation of tiles, marble, granite and stone, plus polishing and floor restoration.',
    metaTitle: 'Flooring, Tiling & Marble Work in Gurugram',
    metaDescription:
      'Flooring and tiling services in Gurugram: vitrified tiles, marble, granite, stone laying and marble polishing for homes and commercial spaces.',
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
    related: ['home-renovation', 'kitchen-bathroom-renovation', 'commercial-improvement'],
  },
  {
    slug: 'painting-waterproofing',
    title: 'Painting, Plastering & Waterproofing',
    icon: 'Droplets',
    galleryCategory: 'painting',
    image: '/assets/services/painting-waterproofing.svg',
    imageAlt: 'Freshly painted exterior wall with smooth plaster finish',
    summary:
      'Surface preparation, plastering, interior and exterior painting, and waterproofing against seepage.',
    metaTitle: 'Painting, Plastering & Waterproofing in Gurugram',
    metaDescription:
      'Painting, plastering and waterproofing services in Gurugram: interior and exterior painting, putty, terrace and wall waterproofing, and seepage treatment.',
    intro: [
      'A paint finish is only as good as the surface under it. We prepare walls properly, repairing cracks, applying plaster and putty where needed and treating damp, before the paint goes on.',
      'Gurugram’s monsoon and summer heat are hard on terraces, external walls and wet areas. Where waterproofing is needed, we identify the likely source of seepage before choosing a treatment.',
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
    related: ['civil-construction', 'interior-finishing', 'false-ceiling'],
  },
  {
    slug: 'false-ceiling',
    title: 'False Ceiling & Wall Finishing',
    icon: 'Layers',
    galleryCategory: 'interiors',
    image: '/assets/services/false-ceiling.svg',
    imageAlt: 'Gypsum false ceiling with cove lighting in a modern living room',
    summary:
      'Gypsum and POP false ceilings, cove lighting and decorative wall finishes that complete a room.',
    metaTitle: 'False Ceiling & Wall Finishing in Gurugram',
    metaDescription:
      'False ceiling installation in Gurugram: gypsum and POP ceilings, cove and profile lighting, and decorative wall finishes for homes and offices.',
    intro: [
      'A well-designed false ceiling hides wiring and ducts, makes room for lighting and changes how a room feels. We build gypsum and POP ceilings with neat joints and level surfaces.',
      'We coordinate the ceiling layout with your lighting plan and AC positions so that cut-outs, coves and access panels sit where they should.',
    ],
    workTypes: [
      'Gypsum board false ceilings',
      'POP ceilings and cornices',
      'Cove and profile lighting provisions',
      'Grid ceilings for offices',
      'Wall paneling and textures',
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
    related: ['interior-finishing', 'electrical-plumbing', 'painting-waterproofing'],
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
    metaTitle: 'Electrical & Plumbing Work in Gurugram',
    metaDescription:
      'Electrical and plumbing services in Gurugram for new construction and renovation: concealed wiring, DB upgrades, water supply, drainage and fixture installation.',
    intro: [
      'Electrical and plumbing systems are hidden in walls and floors, so mistakes are expensive to fix later. We plan routes, points and loads carefully during construction or renovation.',
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
    related: ['kitchen-bathroom-renovation', 'home-construction', 'false-ceiling'],
  },
  {
    slug: 'commercial-improvement',
    title: 'Commercial Property Improvement',
    icon: 'Building2',
    galleryCategory: 'construction',
    image: '/assets/services/commercial-improvement.svg',
    imageAlt: 'Renovated commercial office space with glass partitions and ceiling grid',
    summary:
      'Fit-outs, repairs and upgrades for shops, offices and commercial buildings, planned around your business.',
    metaTitle: 'Commercial Property Improvement in Gurugram',
    metaDescription:
      'Commercial property improvement in Gurugram: office and shop fit-outs, civil repairs, flooring, ceilings, painting and services upgrades. Request a consultation.',
    intro: [
      'Commercial spaces need work that looks professional, holds up to heavy use and causes as little disruption to business as possible. We plan the scope, sequence and working hours around your operations.',
      'From a single shopfront refresh to upgrading a whole floor, we bring together the civil, finishing and services trades under one plan.',
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
        a: 'Yes. We coordinate civil, ceiling, flooring, painting, electrical and plumbing work under a single scope.',
      },
      {
        q: 'Can you work in occupied commercial buildings?',
        a: 'Yes, with planning for access, dust control and debris removal in line with building management requirements.',
      },
    ],
    related: ['civil-construction', 'false-ceiling', 'flooring-tiling'],
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);

export default services;

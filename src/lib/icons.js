import {
  HardHat,
  Home,
  Hammer,
  PaintRoller,
  Bath,
  Grid3x3,
  Droplets,
  Layers,
  Plug,
  Building2,
  Wrench,
} from 'lucide-react';

/** Maps the `icon` string in services.js to a Lucide icon component. */
const iconMap = { HardHat, Home, Hammer, PaintRoller, Bath, Grid3x3, Droplets, Layers, Plug, Building2 };

export const getIcon = (name) => iconMap[name] || Wrench;

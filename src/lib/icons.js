import {
  Home,
  Hammer,
  PaintRoller,
  Bath,
  Grid3x3,
  Droplets,
  Layers,
  Plug,
  Building2,
  Frame,
  PanelsTopLeft,
  Columns3,
  Wallpaper,
  GlassWater,
  Rows3,
  Lightbulb,
  Wrench,
} from 'lucide-react';

/** Maps the `icon` string in services.js to a Lucide icon component. */
const iconMap = {
  Home, Hammer, PaintRoller, Bath, Grid3x3, Droplets, Layers, Plug, Building2,
  Frame, PanelsTopLeft, Columns3, Wallpaper, GlassWater, Rows3, Lightbulb,
};

export const getIcon = (name) => iconMap[name] || Wrench;

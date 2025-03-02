import { User } from './user';

export enum Materials {
  GLASS = 'Glass',
  WOOD = 'Wood',
  METAL = 'Metal',
  PLASTIC = 'Plastic',
  PAPER = 'Paper',
  BRICK = 'Brick',
  ROCK = 'Rock',
  CERAMIC = 'Ceramic',
  GROUND = 'Ground',
  WOODFLOOR = 'Wood Floor',
  LEATHER = 'Leather',
  FABRIC = 'Fabric',
  CARPET = 'Carpet',
  CONCRETE = 'Concrete',
  MARBLE = 'Marble',
  ASPHALT = 'Asphalt',
  GRAVEL = 'Gravel',
  GRASS = 'Grass',
  SNOW = 'Snow',
  PARKET = 'Parket'
}

export enum Platforms {
  MAX = '3dsMax',
  BLENDER = 'Blender',
  SKETCHUP = 'Sketch Up',
  RHINO = 'Rhino'
}

export enum Styles {
  MODERN = 'Modern',
  CLASSIC = 'Classic',
  NEOCLASSIC = 'Neo Classic'
}

export interface Model {
  id: number;
  name: string;
  creationDate: Date;
  publishDate: Date | null;
  platform: Platforms[];
  polygonCount: number;
  styles: Styles;
  materials: Materials[];
  isAllowedToPublish: boolean;
  isTextured: boolean;
  categoryId: number;
  creator?: User;
  creatorId?: number;
}
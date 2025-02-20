import {
  RenderEngine,
  Materials,
  Styles,
  Platforms,
} from 'src/types/Model.type';
export interface Model {
  name: string;
  creationDate: Date;
  publishDate: Date;
  platform: Platforms[];
  polygonCount: number;
  style: Styles;
  materials: Materials[Materials];
  Manufacturer: string;
  size: number;
  isAllowedToPublish: boolean;
  renderEngine: RenderEngine;
  isTextured: boolean;
  artist: string;
}

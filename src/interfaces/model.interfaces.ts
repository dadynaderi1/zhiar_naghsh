export interface Model {
  name: string;
  creationDate: Date;
  publishDate: Date;
  platform: string;
  polygonCount: number;
  style: Styles;
  materials: Materials;
  size: number;
  isAllowedToPublish: boolean;
  renderEngine: string;
}

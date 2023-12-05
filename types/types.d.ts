export interface projectDescriptionType {
  name: string;
  version: string;
  description: string;
  author: string;
}

export interface projectDescriptionTypeConIndex extends projecDesciptionType {
  [key: string]: string;
}

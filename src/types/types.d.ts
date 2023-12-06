export type EnvironmentVariables = {
  DB_URI: string
};

export interface projectDescriptionType {
  name: string;
  version: string;
  description: string;
  author: string;
}

export interface projectDescriptionTypeConIndex extends projecDesciptionType {
  [key: string]: string;
}

export interface Nota {
  content: string;
  date: Date;
  important: boolean;
}

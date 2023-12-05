export type EnvironmentVariables = {
  DB_URI_DEV: string;
  DB_URI_PRODUCCION: string;
  DB_URI_TEST: string;
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

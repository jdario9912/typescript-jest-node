export type EnvironmentVariables = {
  DB_URI: string;
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

export type NotaRequest = Omit<Nota, "date">;

export interface NotaGuardada extends Nota {
  _id: string;
}

export type NotaRequestInvalida = Omit<NotaRequest, "content" | "important">;

export type NotaActualizadaRequest = Pick<Nota, "content" | "important">;

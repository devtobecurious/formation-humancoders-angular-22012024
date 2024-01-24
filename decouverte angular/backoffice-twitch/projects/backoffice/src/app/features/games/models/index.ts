import { TypeOrUndefined } from "../../../core/custom-types";

export interface Game {
  id: number;
  date: Date;
  state: string;
  videoGame: string
}

export type GameOrUndefined = TypeOrUndefined<Game>;

export type Games = Game[];

export interface Person {
  name: string
}

export type People = Person[];

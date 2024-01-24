import { TypeOrUndefined } from "../../../core/custom-types";

export type GameState = 'success' | 'echec';

export interface Game {
  id: number;
  date: Date;
  //state: string;
  // state: 'success' | 'echec';
  state: GameState,
  videoGame: string
}

export type GameOrUndefined = TypeOrUndefined<Game>;

export type Games = Game[];

export interface Person {
  name: string
}

export type People = Person[];

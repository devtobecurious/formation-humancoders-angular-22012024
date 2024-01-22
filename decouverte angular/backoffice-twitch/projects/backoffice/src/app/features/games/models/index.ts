export interface Game {
  id: number;
  date: Date;
  state: string;
  videoGame: string
}

export type Games = Game[];

export interface Statistic {
  annee: number;
  mois: number;
  partiesGagnees: number;
  partiesPerdues: number;
}

export type Statistics = Statistic[];

export type StatisticsOrUndefined = Statistics | undefined;

export function getFakeList(): Statistics {
  return [
    { annee: 2023, mois: 8, partiesGagnees: 1, partiesPerdues: 250 },
    { annee: 2023, mois: 12, partiesGagnees: 3, partiesPerdues: 20 }
  ]
}

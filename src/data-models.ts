export enum Teams {
  Arizona = "ARI",
  Atlanta = "ATL",
  Carolina = "CAR",
  Chicago = "CHI",
  Dallas = "DAL",
  Detroit = "DET",
  GreenBay = "GB",
  LosAngelesRams = "LAR",
  Minnesota = "MIN",
  NewOrleans = "NO",
  NewYorkGiants = "NYG",
  Philadelphia = "PHI",
  SanFrancisco = "SF",
  Seattle = "SEA",
  TampaBay = "TB",
  Washington = "WASH",
  Baltimore = "BAL",
  Buffalo = "BUF",
  Cincinnati = "CIN",
  Cleveland = "CLE",
  Denver = "DEN",
  Houston = "HOU",
  Indianapolis = "IND",
  Jacksonville = "JAC",
  KansasCity = "KC",
  LosAngelesChargers = "LAC",
  Miami = "MIA",
  NewEngland = "NE",
  NewYorkJets = "NYJ",
  Oakland = "OAK",
  Pittsburgh = "PIT",
  Tennessee = "TEN"
}

export enum Positions {
  RB = "RB",
  QB = "QB",
  WR = "WR",
  K = "K",
  DEF = "DEF",
  TE = "TE"
}

export class Team {
  /**
   *
   */
  constructor(
    public name: string,
    public abbr: string,
    mainColor?: string,
    secondaryColor?: string,
    manager?: string
  ) {}
}

export enum City {
  ARI = "Arizona",
  ATL = "Atlanta",
  CAR = "Carolina",
  CHI = "Chicago",
  DAL = "Dallas",
  DET = "Detroit",
  GB = "Green Bay",
  LAR = "Los Angeles",
  MIN = "Minnesota",
  NO = "New Orleans",
  NYG = "New York",
  PHI = "Philadelphia",
  SF = "San Francisco",
  SEA = "Seattle",
  TB = "Tampa Bay",
  WASH = "Washington",
  BAL = "Baltimore",
  BUF = "Buffalo",
  CIN = "Cincinnati",
  CLE = "Cleveland",
  DEN = "Denver",
  HOU = "Houston",
  IND = "Indianapolis",
  JAC = "Jacksonville",
  KC = "Kansas City",
  LAC = "Los Angeles",
  MIA = "Miami",
  NE = "New England",
  NYJ = "New York",
  OAK = "Oakland",
  PIT = "Pittsburgh",
  TEN = "Tennessee"
}

export enum Position {
  RB = "RB",
  QB = "QB",
  WR = "WR",
  K = "K",
  DEF = "DEF",
  TE = "TE"
}

export class Player {
  constructor(
    public first_name: string,
    public last_name: string,
    public plays_for: City,
    public position: Position,
    public manager: Manager
  ) {}
}

export class Manager {
  /**
   *
   */
  constructor(public manager_name: string, public team: Team[]) {}
}

export class NFLTeam {
  /**
   *
   */
  constructor(
    public city: City,
    public abbr: string,
    public mascot: string,
    public players: Player[]
  ) {}
}

export class Team {
  constructor(public max_players: number, public players: Player[]) {}
}

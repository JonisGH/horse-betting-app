export type RaceHorse = {
  name: string;
};

export type RaceStart = {
  number: number;
  horse: RaceHorse;
};

export type Race = {
  id: string;
  starts: RaceStart[];
};

export type Track = {
  id: number;
  name: string;
};

export type Favorite = {
  raceId: string;
  legNumber: number;
  start: {
    number: number;
    name: string;
    distribution: number;
  };
};

export type UpcomingEntry = {
  id: string;
  newBettingSystem: boolean;
  startTime: string;
  tracks: Track[];
  favorites: Favorite[];
  addOns: string[];
  races: Race[];
};

export type ResultEntry = {
  id: string;
  tracks: Track[];
  totalToWin: number;
  startTime: string;
  addOns: string[];
};

export type BettingData = {
  betType: string;
  upcoming: UpcomingEntry[];
  results: ResultEntry[];
};

export type GoodObject = {
  trackId: string;
};

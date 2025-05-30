export type SimplifiedHorse = {
  startNumber: number;
  horseName: string;
  driverFirstName: string;
  driverLastName: string;
  trainerFirstName: string;
  trainerLastName: string;
  fatherName: string;
};

export type SimplifiedRace = {
  number: number;
  name: string;
  startTime: string;
  horses: SimplifiedHorse[];
};

export type SimplifiedTrack = {
  id: string;
  startTime: string;
  trackName: string;
};

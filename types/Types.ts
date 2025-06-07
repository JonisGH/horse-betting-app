export type SimplifiedHorse = {
  startNumber: number;
  horseName: string;
  driverFirstName: string;
  driverLastName: string;
  trainerFirstName: string;
  trainerLastName: string;
  fatherName: string;
};

export type SimplifiedGame = {
  number: number;
  name: string;
  startTime: string;
  horses: SimplifiedHorse[];
};

export type SimplifiedProduct = {
  id: string;
  startTime: string;
  name: string;
};

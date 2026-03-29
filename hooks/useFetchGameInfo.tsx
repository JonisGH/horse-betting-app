import { useEffect, useState } from 'react';
import type { SimplifiedGame } from '../types/Types';
import { formatDate } from '../utils/formatDate';

type RaceStartApi = {
  number: number;
  horse: {
    name: string;
    trainer: { firstName: string; lastName: string };
    pedigree: { father: { name: string } };
  };
  driver: { firstName: string; lastName: string };
};

type RaceApi = {
  startTime: string;
  number: number;
  name: string;
  starts: RaceStartApi[];
};

type GameApiResponse = {
  races: RaceApi[];
};

const useFetchRaceInfo = (trackId: string) => {
  const [data, setData] = useState<SimplifiedGame[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!trackId) return;

    const fetchData = async () => {
      const baseUrl = import.meta.env.VITE_GAMES_URL;

      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}${trackId}`);
        if (!res.ok) throw new Error(`Failed to fetch data for ${trackId}`);
        const json = (await res.json()) as GameApiResponse;

        const simplifiedRaces: SimplifiedGame[] = json.races.map((race: RaceApi) => {
          const { time } = formatDate(race.startTime);

          return {
            number: race.number,
            name: race.name,
            startTime: time,
            horses: race.starts.map((start: RaceStartApi) => ({
              startNumber: start.number,
              horseName: start.horse.name,
              driverFirstName: start.driver.firstName,
              driverLastName: start.driver.lastName,
              trainerFirstName: start.horse.trainer.firstName,
              trainerLastName: start.horse.trainer.lastName,
              fatherName: start.horse.pedigree.father.name,
            })),
          };
        });

        setData(simplifiedRaces);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred while fetching race info.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trackId]);

  return { data, loading, error };
};

export default useFetchRaceInfo;

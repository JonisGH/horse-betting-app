/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import type { SimplifiedGame } from '../types/Types';
import { formatDate } from '../utils/formatDate';

const useFetchRaceInfo = (trackId: string) => {
  const [data, setData] = useState<SimplifiedGame[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!trackId) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://www.atg.se/services/racinginfo/v1/api/games/${trackId}`);
        if (!res.ok) throw new Error(`Failed to fetch data for ${trackId}`);
        const json = await res.json();

        const simplifiedRaces: SimplifiedGame[] = json?.races.map(
          (race: { startTime: string; number: any; name: any; starts: any[] }) => {
            const { time } = formatDate(race.startTime);

            return {
              number: race.number,
              name: race.name,
              startTime: time,
              horses: race.starts.map(
                (start: {
                  number: any;
                  horse: {
                    name: any;
                    trainer: { firstName: any; lastName: any };
                    pedigree: { father: { name: any } };
                  };
                  driver: { firstName: any; lastName: any };
                }) => ({
                  startNumber: start.number,
                  horseName: start.horse.name,
                  driverFirstName: start.driver.firstName,
                  driverLastName: start.driver.lastName,
                  trainerFirstName: start.horse.trainer.firstName,
                  trainerLastName: start.horse.trainer.lastName,
                  fatherName: start.horse.pedigree.father.name,
                }),
              ),
            };
          },
        );

        setData(simplifiedRaces);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [trackId]);

  return { data, loading, error };
};

export default useFetchRaceInfo;

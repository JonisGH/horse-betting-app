/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useState } from 'react';
import type { SimplifiedProduct } from '../types/Types';
import { formatDate } from '../utils/formatDate';

const useFetchProductInfo = (betType: string) => {
  const [data, setData] = useState<SimplifiedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!betType) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.atg.se/services/racinginfo/v1/api/products/${betType}`,
        );
        if (!res.ok) throw new Error(`Failed to fetch data for ${betType}`);
        const json = await res.json();

        const simplifiedProducts: SimplifiedProduct[] = json?.upcoming.map(
          (upcomingEntry: { id: any; startTime: string; tracks: { name: any }[] }) => ({
            id: upcomingEntry.id,
            startTime:
              formatDate(upcomingEntry.startTime).date +
              ' ' +
              formatDate(upcomingEntry.startTime).time,
            name: upcomingEntry.tracks[0]?.name ?? 'no name',
          }),
        );

        setData(simplifiedProducts);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [betType]);

  return { data, loading, error };
};

export default useFetchProductInfo;

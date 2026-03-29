import { useEffect, useState } from 'react';
import type { SimplifiedProduct } from '../types/Types';
import { formatDate } from '../utils/formatDate';

type ProductTrack = {
  name: string;
};

type ProductUpcomingApi = {
  id: string;
  startTime: string;
  tracks: ProductTrack[];
};

type ProductApiResponse = {
  upcoming: ProductUpcomingApi[];
};

const useFetchProductInfo = (betType: string) => {
  const [data, setData] = useState<SimplifiedProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!betType) return;

    const fetchData = async () => {
      const baseUrl = import.meta.env.VITE_PRODUCT_URL;

      setLoading(true);
      try {
        const res = await fetch(`${baseUrl}${betType}`);
        if (!res.ok) throw new Error(`Failed to fetch data for ${betType}`);
        const json = (await res.json()) as ProductApiResponse;

        const simplifiedProducts: SimplifiedProduct[] = json.upcoming.map(
          (upcomingEntry: ProductUpcomingApi) => ({
            id: upcomingEntry.id,
            startTime:
              formatDate(upcomingEntry.startTime).date +
              ' ' +
              formatDate(upcomingEntry.startTime).time,
            name: upcomingEntry.tracks[0]?.name ?? 'no name',
          }),
        );

        setData(simplifiedProducts);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred while fetching product info.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [betType]);

  return { data, loading, error };
};

export default useFetchProductInfo;

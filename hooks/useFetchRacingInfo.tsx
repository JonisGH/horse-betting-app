import { useEffect, useState } from 'react';

export const useFetchRacingInfo = (betType: string) => {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /* const prunedData = data?.map((cleanData) => {
    return {betType: cleanData.betType};
  }); */

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
        setData(json);
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

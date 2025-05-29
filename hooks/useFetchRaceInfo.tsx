import { useEffect, useState } from 'react';

const useFetchRaceInfo = (trackId: string) => {
  const [data, setData] = useState<string | null>(null);
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
        setData(json);
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

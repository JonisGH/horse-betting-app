import React, { useState, useEffect } from 'react';
import Table from '../components/Table/Table';
import RaceTrack from '../components/RaceTrack/RaceTrack';
import Dropdown from '../components/Dropdown/Dropdown';
import Flex from '../components/Flex/Flex';
import useFetchGameInfo from '../hooks/useFetchGameInfo';
import useFetchProductInfo from '../hooks/useFetchProductInfo';
import type { SimplifiedGame, SimplifiedHorse, SimplifiedProduct } from '../types/Types';
import './App.css';

function App() {
  const [mostRecentProduct, setMostRecentProduct] = useState<SimplifiedProduct | null>(null);
  const [selectedBetType, setSelectedBetType] = useState('');
  const [trackId, setTrackId] = useState('');

  const { data, loading } = useFetchProductInfo(selectedBetType);
  const { data: raceData } = useFetchGameInfo(trackId);

  useEffect(() => {
    if (data && !loading) {
      const sorted: SimplifiedProduct[] = [...data].sort(
        (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
      );
      const latestProduct = sorted[0];

      if (latestProduct) {
        setMostRecentProduct(latestProduct);
        setTrackId(latestProduct.id);
      }
    }
  }, [data, loading]);

  const handleSelectBetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBetType(e.target.value);
  };

  return (
    <Flex direction="column" gap={'2px'} align="flex-start">
      {!selectedBetType && <small>Choose a bet type</small>}
      <Flex direction="row" gap={'25px'} align="center">
        <Dropdown
          propOptions={[{ value: 'V75' }, { value: 'V86' }, { value: 'GS75' }]}
          onChange={handleSelectBetType}
        />
        <h3>{selectedBetType}</h3>
      </Flex>

      {mostRecentProduct && <RaceTrack track={mostRecentProduct} />}

      {raceData ? (
        raceData.map((race: SimplifiedGame, raceIndex: number) => {
          const tableHeader = [race.startTime, race.name];

          const tableData: SimplifiedHorse[] = race.horses.map((horse: SimplifiedHorse) => ({
            startNumber: horse.startNumber,
            horseName: horse.horseName,
            driverFirstName: horse.driverFirstName,
            driverLastName: horse.driverLastName,
            trainerFirstName: horse.trainerFirstName,
            trainerLastName: horse.trainerLastName,
            fatherName: horse.fatherName,
          }));

          return <Table header={tableHeader} data={tableData} key={raceIndex} />;
        })
      ) : (
        <Table header={[]} />
      )}
    </Flex>
  );
}

export default App;

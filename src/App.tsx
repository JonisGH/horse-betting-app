import React, { useState, useEffect } from 'react';
import useFetchTrackInfo from '../hooks/useFetchTrackInfo';
import useFetchRaceInfo from '../hooks/useFetchRaceInfo';
import Table from '../components/Table/Table';
import RaceTrack from '../components/RaceTrack/RaceTrack';
import Dropdown from '../components/Dropdown/Dropdown';
import Flex from '../components/Flex/Flex';
import type { SimplifiedRace, SimplifiedTrack } from '../types/Types';
import './App.css';

function App() {
  const [selectedBetType, setSelectedBetType] = useState('');
  const [trackId, setTrackId] = useState('');
  const [mostRecentTrack, setMostRecentTrack] = useState<SimplifiedTrack | null>(null);

  const { data, loading } = useFetchTrackInfo(selectedBetType);
  const { data: raceData } = useFetchRaceInfo(trackId);

  console.log('Most Recent Track:', mostRecentTrack);
  console.log('RaceData:', raceData);

  useEffect(() => {
    if (data.length > 0 && !loading) {
      const sorted = [...data].sort(
        (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
      );

      const mostRecent = sorted[0];

      if (mostRecent) {
        setMostRecentTrack(mostRecent);
        setTrackId(mostRecent.id); // triggers useFetchRaceInfo
      }
    }
  }, [data, loading]);

  const handleSelectBetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBetType(e.target.value);
  };

  return (
    <Flex direction="column" gap={'10px'} align="flex-start">
      {/* Bet Type Selector */}
      <Flex direction="row" gap={'25px'} align="center">
        <Dropdown
          propOptions={[{ value: 'V75' }, { value: 'V86' }, { value: 'GS75' }]}
          onChange={handleSelectBetType}
        />
        <h3>{selectedBetType}</h3>
      </Flex>

      {/* Most Recent RaceTrack */}
      {mostRecentTrack && <RaceTrack track={mostRecentTrack} />}

      {/* Race Tables for this track */}
      {raceData &&
        raceData.map((race: SimplifiedRace, raceIndex: number) => {
          const tableHeader = [race.startTime, race.name];

          const tableData = race.horses.map((horse) => [
            horse.startNumber,
            horse.horseName,
            `${horse.driverFirstName} ${horse.driverLastName}`,
          ]);

          return (
            <div key={raceIndex} style={{ marginBottom: '2rem' }}>
              <Table header={tableHeader} data={tableData} />
            </div>
          );
        })}
    </Flex>
  );
}

export default App;

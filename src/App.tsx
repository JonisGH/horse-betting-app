import React, { useState } from 'react';
import useFetchTrackInfo from '../hooks/useFetchTrackInfo';
import Table from '../components/Table/Table';
import Dropdown from '../components/Dropdown/Dropdown';
import Flex from '../components/Flex/Flex';
import './App.css';

function App() {
  const [selectedBetType, setSelectedBetType] = useState('');
  const { data } = useFetchTrackInfo(selectedBetType);

  const handleSelectBetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBetType(e.target.value);
  };

  return (
    <>
      <Flex direction="row" align="center" gap={25}>
        <Dropdown
          propOptions={[{ value: 'V75' }, { value: 'V86' }, { value: 'GS75' }]}
          onChange={(e) => handleSelectBetType(e)}
        />
        <h3>{selectedBetType}</h3>
      </Flex>

      <Table data={data ?? undefined} />
    </>
  );
}

export default App;

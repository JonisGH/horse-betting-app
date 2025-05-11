import React, { useState } from 'react';
import { useFetchRacingInfo } from '../hooks/useFetchRacingInfo';
import Table from '../components/Table/Table';
import Dropdown from '../components/Dropdown/Dropdown';
import Flex from '../components/Flex/Flex';
import Spinner from '../components/Spinner/Spinner';
import './App.css';

function App() {
  const [selectedBetType, setSelectedBetType] = useState('');
  const { data, loading, error } = useFetchRacingInfo(selectedBetType);
  console.log(data, ' DATA');

  const handleSelectBetType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBetType(e.target.value);
  };

  const RenderData = () => {
    if (loading) return <Spinner />;
    if (error) return <h2>{error}</h2>;
  };

  return (
    <>
      <Flex direction="row" justify="space-between">
        <Dropdown
          propOptions={[{ value: 'V75' }, { value: 'V86' }, { value: 'GS75' }]}
          onChange={(e) => handleSelectBetType(e)}
        />
        <h3>{selectedBetType}</h3>
      </Flex>

      <Table>{<RenderData />}</Table>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import './Table.css';
import Flex from '../Flex/Flex';
import type { BettingData, Track } from '../../types/Types';
import { useFormatDate } from '../../hooks/useFormatDate';

type TableProps = {
  children?: React.ReactNode;
  data?: BettingData;
};

type MostRecentResultType = {
  id: string;
  startTime: string;
  tracks: Track[];
};

const Table = (props: TableProps) => {
  const { data } = props;
  const [mostRecentResult, setMostRecentResult] = useState<MostRecentResultType | undefined>();
  const { time, date } = useFormatDate(mostRecentResult?.startTime);
  console.log(data, ' DATA');
  console.log(mostRecentResult, ' MOST RECENT RESULTS');

  useEffect(() => {
    const filteredResults = data?.upcoming.sort(
      (a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime(),
    )[0];

    if (filteredResults)
      setMostRecentResult({
        id: filteredResults.id,
        startTime: filteredResults.startTime,
        tracks: filteredResults.tracks,
      });
    console.log(filteredResults?.races, ' RACES ');
  }, [data]);

  return (
    <div className="tableContainer">
      <Flex className="resultContainer" direction="column" align="center">
        {mostRecentResult?.tracks?.map((field) => {
          return (
            <div key={field.id}>
              <Flex gap={12} align="center" className="bottomBorder">
                <h3>{field.name}</h3> -<b>{time}</b>
                <i>{date}</i>
              </Flex>
              {/* TODO: Make better containers (Rejs info div should display races.name from games endpoint) */}
              <div style={{ width: '100%', background: '#333', color: '#f8f8f8' }}>REJS INFO</div>
              {/* TODO: fetch info from games endpoint here for more horse data */}
            </div>
          );
        })}
      </Flex>
      {props.children}
    </div>
  );
};

export default Table;

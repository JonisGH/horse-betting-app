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

  useEffect(() => {
    const filteredResults = data?.results
      .filter((result) => result.id.startsWith(`${data.betType}_`))
      .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())[0];

    if (filteredResults)
      setMostRecentResult({
        id: filteredResults.id,
        startTime: filteredResults.startTime,
        tracks: filteredResults.tracks,
      });
  }, [data]);

  return (
    <div className="tableContainer">
      <Flex direction="column">
        <Flex className="resultContainer" direction="row" justify="space-evenly">
          <Flex gap={12} align="center">
            {mostRecentResult?.tracks?.map((field) => {
              return <h3>{field.name}</h3>;
            })}
            -<b>{time}</b>
            <i>{date}</i>
          </Flex>
        </Flex>
      </Flex>
      {props.children}
    </div>
  );
};

export default Table;

import React, { useState } from 'react';
import './Table.css';
import type { SimplifiedHorse } from '../../types/Types';

type TableProps = {
  header: string[];
  data?: SimplifiedHorse[];
};

const Table = (props: TableProps) => {
  const { header, data } = props;
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  const handleRowClick = (rowIndex: number) => {
    setExpandedRow(expandedRow === rowIndex ? null : rowIndex);
  };

  return (
    <div className="table">
      <div className="tableRow tableHeader">
        {header.map((head, index) => (
          <div key={index} className="tableCell">
            {head}
          </div>
        ))}
      </div>

      {data
        ? data.map((horse, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <div
                className="tableRow"
                onClick={() => handleRowClick(rowIndex)}
                style={{ cursor: 'pointer' }}
              >
                <div className="tableCell">
                  <span style={{ fontWeight: 'bold' }}>{horse.startNumber}</span>
                </div>
                <div className="tableCell">{horse.horseName}</div>
                <div className="tableCell">
                  <span style={{ fontStyle: 'oblique' }}>
                    {horse.driverFirstName} {horse.driverLastName}
                  </span>
                </div>
                <span className="chevron">{expandedRow === rowIndex ? '▼' : '▶'}</span>
              </div>
              {expandedRow === rowIndex && (
                <div className={`tableRow expandableRow expanded`}>
                  <div className="tableCell expandedCell" style={{ gridColumn: 'span 4' }}>
                    Trainer: {horse.trainerFirstName} {horse.trainerLastName} <br />
                    Father: {horse.fatherName}
                  </div>
                </div>
              )}
            </React.Fragment>
          ))
        : Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="tableRow">
              <div className="tableCell"></div>
              <div className="tableCell"></div>
              <div className="tableCell"></div>
            </div>
          ))}
    </div>
  );
};

export default Table;

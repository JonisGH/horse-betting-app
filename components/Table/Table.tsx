import './Table.css';

type TableProps = {
  header: string[];
  data: Array<Array<string | number>>;
};

const Table = (props: TableProps) => {
  const { header, data } = props;

  return (
    <div className="table">
      <div className="tableRow tableHeader">
        {header.map((head, index) => (
          <div key={index} className="tableCell">
            {head}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="tableRow">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="tableCell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;

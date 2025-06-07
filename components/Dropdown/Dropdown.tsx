import React from 'react';
import './Dropdown.css';

type PropOption = {
  value: string | number;
  name?: string;
};

type DropdownProps = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  propOptions: PropOption[];
};

const Dropdown = (props: DropdownProps) => {
  const { propOptions, onChange } = props;
  return (
    <select className="dropdown" onChange={onChange}>
      <option value=""></option>
      {propOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name ?? option.value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

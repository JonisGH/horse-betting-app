import React from 'react';
import styles from '../Dropdown/Dropdown.module.css';

type PropOption = {
  value: string | number;
  name?: string;
};

type DropdownProps = {
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  propOptions: PropOption[];
};

const Dropdown = ({ propOptions, onChange }: DropdownProps) => {
  return (
    <select className={styles.dropdown} onChange={onChange}>
      <option value="">...</option>
      {propOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name ?? option.value}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;

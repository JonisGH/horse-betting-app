import React from 'react';
import styles from './Table.module.css';

type TableProps = { children?: React.ReactNode };

const Table = (props: TableProps) => {
  return <table className={styles.tableContainer}>{props.children}</table>;
};

export default Table;

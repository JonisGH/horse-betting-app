import React from 'react';

type FlexProps = {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  gap?: string | number;
  wrap?: 'nowrap' | 'wrap';
  className?: string;
  style?: React.CSSProperties;
};

const Flex = (props: FlexProps) => {
  return (
    <div
      className={props.className}
      style={{
        display: 'flex',
        flexDirection: props.direction,
        justifyContent: props.justify,
        alignItems: props.align,
        gap: props.gap,
        whiteSpace: props.wrap,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};

export default Flex;

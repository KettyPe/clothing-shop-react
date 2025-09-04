import React from 'react';

interface Props extends React.SVGAttributes<SVGElement> {}

function ArrowDownIcon(props: Props) {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 1.00012L7 7.00012L1 1.00012"
        stroke="#666666"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ArrowDownIcon;

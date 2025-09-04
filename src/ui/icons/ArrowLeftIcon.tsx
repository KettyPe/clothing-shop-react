import React from 'react';

interface Props extends React.SVGAttributes<SVGElement> { }

function ArrowLeftIcon(props: Props) {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width="6"
               height="10"
               viewBox="0 0 6 10"
               fill="none"
               {...props}
          >
               <path
                    d="M5 9L1 5L5 0.999999"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
               />
          </svg>
     );
}

export default ArrowLeftIcon;
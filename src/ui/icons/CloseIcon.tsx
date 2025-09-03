import React from 'react';

interface Props extends React.SVGAttributes<SVGElement> { }

function CloseIcon(props: Props) {
     return (
          <svg
               xmlns="http://www.w3.org/2000/svg"
               width="9"
               height="10"
               viewBox="0 0 9 10"
               fill="none"
               {...props}
          >
               <path
                    d="M1 8.5L8 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
               />
               <path
                    d="M8 8.5L1 1.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
               />
          </svg>
     );
}

export default CloseIcon;
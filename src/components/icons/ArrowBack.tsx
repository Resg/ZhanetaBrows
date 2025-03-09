import React from 'react';

export const ArrowBack: React.FC<React.SVGAttributes<SVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="40 -960 960 960"
      width="24px"
      fill="#1f1f1f"
      {...props}
    >
      <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  );
};

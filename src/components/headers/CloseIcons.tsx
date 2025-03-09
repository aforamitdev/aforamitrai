import React from 'react';

type Props = {};

function CloseIcons({}: Props) {
  return (
    <div className="flex items-center">
      <div style={{ color: '#F2695B' }}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
        </svg>
      </div>
      <div style={{ color: '#F6BD4B' }}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
        </svg>
      </div>
      <div style={{ color: '#63C85A' }}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default CloseIcons;

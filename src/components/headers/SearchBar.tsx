import React from 'react';

type Props = {};

function SearchBar({}: Props) {
  return (
    <div className="flex w-full justify-center">
      <div className="w-1/2">
        <div className="border-[1px] py-0.5 rounded-sm w-full items-center justify-center flex  relative">
          <div className="pt-0.5 text-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="mx-2"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21A12 12 0 0 1 3.5 6A12 12 0 0 0 12 3" />
                <path d="M11 11a1 1 0 1 0 2 0a1 1 0 1 0-2 0m1 1v2.5" />
              </g>
            </svg>
          </div>
          <input className="text-gray-600 w-full flex " value={'amitrai.me'} />
          <div className="absolute right-0 mx-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 32 32"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M29 16c0 6-5 13-13 13S3 22 3 16S8 3 16 3c5 0 9 3 11 6m-7 1l7-1l1-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

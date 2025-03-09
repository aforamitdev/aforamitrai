import React from 'react';
import CloseIcons from './CloseIcons';
import BackIcons from './BackIcons';
import SearchBar from './SearchBar';
import { Button, Inset } from '@radix-ui/themes';
import { BiMessageDots } from 'react-icons/bi';
import { FaVideo } from 'react-icons/fa';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="bg-white  py-3   w-full rounded-t-2xl">
      <div className="flex justify-between w-full items-center px-2 ">
        <div className="flex">
          <CloseIcons />
          <BackIcons />
        </div>
        <SearchBar />
        <div className="flex items-center space-x-3 text-gray-700 mx-1">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M8 16.5h8q.213 0 .356-.144t.144-.357t-.144-.356T16 15.5H8q-.213 0-.356.144t-.144.357t.144.356T8 16.5m3.5-5.12L9.754 9.64q-.14-.14-.341-.15q-.202-.01-.371.16q-.155.156-.155.35t.16.354l2.388 2.388q.242.242.565.242t.566-.242l2.388-2.388q.14-.14.153-.341t-.157-.371q-.156-.155-.347-.158t-.357.156L12.5 11.38V7q0-.213-.144-.356t-.357-.144t-.356.144T11.5 7zm.503 9.62q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924t-1.925-2.856T3 12.003t.709-3.51Q4.417 6.85 5.63 5.634t2.857-1.925T11.997 3t3.51.709q1.643.708 2.859 1.922t1.925 2.857t.709 3.509t-.708 3.51t-1.924 2.859t-2.856 1.925t-3.509.709M12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-8"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="border mx-3 rounded-t-md mt-3">
        <Inset clip="padding-box" side="top" pb="current">
          <img
            src="https://images.unsplash.com/photo-1617050318658-a9a3175e34cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            alt="Bold typography"
            style={{
              display: 'block',
              objectFit: 'cover',
              width: '100%',
              height: 160,
              backgroundColor: 'var(--gray-5)'
            }}
          />
        </Inset>
      </div>
      <div className="mx-3 h-28">
        <div className="flex justify-between relative">
          <div className="flex absolute items-end -top-16 left-10">
            <div className="  border-4 border-white rounded-sm">
              <img src="/profile.jpg" className="object-cover h-32 w-32" />
            </div>
            <div className="mx-2">
              <h1 className="text-3xl">AMIT RAI</h1>
              <h2 className="text-sm">
                I'm am Product Developer based in Mumbai.
              </h2>
            </div>
          </div>
          <div className="absolute right-0 py-5 space-x-2">
            <Button size={'2'}>
              <FaVideo />
              Video Call
            </Button>
            <Button size={'2'} variant="outline">
              <BiMessageDots />
              Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

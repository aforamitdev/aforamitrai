import Image from 'next/image';
import React from 'react';

const MImage = ({
  children,
  height = '100%',
  width = '100%',
  row,
  altText,
  src,
  tw,
}: {
  children: React.ReactNode;
  height: string;
  width: string;
  row: string;
  altText: string;
  src: string;
  tw: String;
}) => {
  console.log(children, height, width, row, altText);
  return (
    <div>
      <div>{altText}</div>
      <div className={`relative ${tw}`}>
        <Image src={src} fill className={`absolute`} alt={altText} />
      </div>
    </div>
  );
};

export default MImage;

/* eslint-disable @next/next/no-img-element */
import { AspectRatio } from "@radix-ui/themes";
import Image from 'next/image';
import React from 'react';

const MImage = ({
  children,
  height = 1,
  width = 1,
  altText,
  src,
}: {
  children: React.ReactNode;
  height: number;
  width: number;
  row: string;
  altText: string;
  src: string;
  tw: String;
}) => {
  return (
    <AspectRatio ratio={height / width} >
      <img src={src} style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 'var(--radius-2)',
      }}

        alt={altText} />
    </AspectRatio>
  );
};

export default MImage;

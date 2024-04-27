/* eslint-disable react/no-unescaped-entities */
import Linkedin from '@/components/profile/linkedin/Linkedin';
import { Text } from '@radix-ui/themes';
import React from 'react';

type Props = {};

function page({}: Props) {
  return (
    <div>
      <div className='text-3xl font-bold'>
        <Text>It's me Amit</Text>
      </div>
      <div>
        <Text>
          I'm Amit Rai, product developer with over 4 years of experience,
          currently working at KatanaPIM a world wide Product Managment system .
        </Text>
        <br />
        <Text>
          I'm a Dynamic and detail-oriented Developer with a knack for
          conceptualizing and delivering elegant, user-friendly solutions
          effectively and efficiently. Enjoy building powerful web applications,
          learning new technologies, and improving overall knowledge.
        </Text>

        <br />

        {/* image */}

        <div className='text-3xl font-bold pt-3'>More about Amit</div>
        <div>
          <Text>
            He holds a bachelor;s degrees in Information technologies from
            University of Mumbai. He love to explore new places, new food and Of
            course new cultures.
          </Text>
        </div>
      </div>
    </div>
  );
}

export default page;

'use client';
import Script from 'next/script';
import React from 'react';

type Props = {};

function Linkedin({}: Props) {
  return (
    <div>
      <Script src='https://platform.linkedin.com/badges/js/profile.js' />
      <div
        className='badge-base LI-profile-badge'
        data-locale='en_US'
        data-size='large'
        data-theme='light'
        data-type='HORIZONTAL'
        data-vanity='aforamit'
        data-version='v1'
      >
        <a
          className='badge-base__link LI-simple-link'
          href='https://in.linkedin.com/in/aforamit?trk=profile-badge'
        />
      </div>{' '}
    </div>
  );
}

export default Linkedin;

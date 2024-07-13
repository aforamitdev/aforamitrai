'use client';
import { Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import React, { useEffect, useState } from 'react';
import { IoInformation } from 'react-icons/io5';

type Props = {};

const ContactForm = (props: Props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);
  const handleContactMe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('/api/telegram', {
      method: 'POST',
      body: JSON.stringify({ name, email, message }),
    })
      .then(async (res) => {
        const response = await res.json();
        setSuccess(Boolean(res.status));
      })
      .catch((err) => {
        setSuccess(false);
      });
  };

  useEffect(() => {
    const tm = setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return () => {
      tm;
    };
  }, [success]);

  return (
    <div>
      {success && (
        <div className='py-5'>
          <Callout.Root>
            <Callout.Icon>
              <IoInformation />
            </Callout.Icon>
            <Callout.Text>
              contact request success, will get back to you in few mins.
            </Callout.Text>
          </Callout.Root>
        </div>
      )}
      <form onSubmit={(e) => handleContactMe(e)}>
        <div className='flex justify-between gap-x-3'>
          <TextField.Root
            variant='soft'
            size={'3'}
            placeholder='Name'
            className='w-full'
            name='name'
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField.Root
            variant='soft'
            size={'3'}
            placeholder='Email'
            className='w-full'
            name='email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='py-5'>
          <TextArea
            placeholder='Message'
            variant='soft'
            className='h-32'
            name='message'
            required
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>
        <Button size={'3'} className='w-full'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;

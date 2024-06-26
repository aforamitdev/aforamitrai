import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Card, Inset, Theme } from '@radix-ui/themes';
import Header from '@/components/headers/Header';
import Footer from '@/components/footer/Footer';
import AppContextProvider from '@/Providers/AppProvider';
import { GoogleAnalytics } from '@next/third-parties/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Amitkumar rai ',
  description: 'AmitKumar rai -Product developer ',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.variable}>
        <Head>
          <input type='hidden' name='form-name' value='contact' />
        </Head>
        <AppContextProvider>
          <Theme accentColor='iris' hasBackground>
            <Inset className='bg-slate-100 min-h-screen'>
              <div className='max-w-7xl  mx-auto  '>
                <header>
                  <div className='flex w-full  '>
                    <Header />
                  </div>
                </header>
                <div className='flex w-full flex-col'>
                  <div className='mx-7 py-2 mt-5 shadow-md'>
                    <Card variant='ghost' className='bg-white'>
                      {children}
                    </Card>
                  </div>
                </div>
                <div className='py-4'>
                  <Footer />
                </div>
              </div>
            </Inset>
          </Theme>
        </AppContextProvider>
      </body>
      <GoogleAnalytics gaId='G-VZT7R52VQD' />
    </html>
  );
}

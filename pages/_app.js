import React, {useEffect} from 'react';
import dynamic from 'next/dynamic';
import '../styles/global.css';

export default function App({Component, pageProps: {session, ...pageProps}}) {
  useEffect(() => {
    window.jimo = [];
    const s = document.createElement('script');

    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://undercity.usejimo.com/jimo-invader.js';
    window['JIMO_PROJECT_ID'] = '48512554-0bcc-4e06-aad3-f65867aa11ed'; // Update this

    document.getElementsByTagName('head')[0].appendChild(s);
  }, []);

  const _refiner = dynamic(() => import('refiner-js'), {ssr: false});
  _refiner('setProject', '431bd1e0-bd0f-11ed-8bb0-a7f70ccf4803');
  _refiner('identifyUser', {
    id: 'USER-ID-ABC-123', // Replace with your user ID
    email: 'jane@awesome.com', // Replace with user Email
    name: 'Jane Doe', // Replace with user name
  });

  return (
    <Component {...pageProps} />
  );
}

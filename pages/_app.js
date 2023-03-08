import React, {useEffect} from 'react';
import {SessionProvider} from 'next-auth/react';

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

  return (
    //<SessionProvider session={session}>
    <Component {...pageProps} />
    //</SessionProvider>
  );
}

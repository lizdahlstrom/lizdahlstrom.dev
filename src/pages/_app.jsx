import React from 'react';
import Theme from '../styles/theme';
/* eslint-disable react/jsx-props-no-spreading */

export default function App({ Component, pageProps }) {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  );
}

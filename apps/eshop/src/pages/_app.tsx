import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      // Trigger GTM pageview
      window.dataLayer?.push({ event: 'pageview', url });
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Clean up event listener
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}

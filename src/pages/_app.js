import 'normalize.css'
import '../styles/globals.scss'

import Layout from 'Layout';
import { useRouter } from 'next/router';
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const routeChange = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions. Keep an eye on this
      // issue and remove this code when resolved:
      // https://github.com/vercel/next.js/issues/17464

      const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
          elem.removeAttribute("media");
        });
      };
      tempFix();
    };

    router.events.on("routeChangeComplete", routeChange );
    router.events.on("routeChangeStart", routeChange );

    return () => {
      router.events.off('routeChangeComplete', routeChange)
      router.events.off('routeChangeStart', routeChange)
    }
  })

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

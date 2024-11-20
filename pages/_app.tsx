import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'; // Import the Head component
import Script from 'next/script';
import { getPublicBrand } from '../lib/utils';


//  export const metadata = {
//   title: {
//    absolute: getPublicBrand(),
//   }
// };
export const metadata = {
  title: "Portfolio",
  description: "Full-stack Dev",
};

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>

      <Script async src="https://www.googletagmanager.com/gtag/js?id=gtag('config', 'G-EM01G3PYRV')" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-EM01G3PYRV');
        `}
      </Script>
      <Script type="text/javascript">
        {`(function(c,l,a,r,i,t,y){
          c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jg5g9jg4pr");`}
      </Script>
      


      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

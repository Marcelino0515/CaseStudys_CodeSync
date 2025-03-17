import { Lato } from 'next/font/google'; // Import Lato instead of Manrope
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';

const lato = Lato({ 
  subsets: ['latin'], 
  weight: ['100', '300', '400', '700', '900'], // Specify available weights
  display: 'swap' // Optional for better loading
});

export const metadata = {
  title: {
    default: 'Codesync LLC',
    template: '%s | Codesync',
  },
  description: 'AI Startup and TechnologyTop IT Services in Saudi Arabia | AI Development, App Development &amp; ERP Solutions | CodeSync LLC',
  metadataBase: new URL('https://codesync.sa'),
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
  ],
  openGraph: {
    title: 'Codesync LLC',
    description: 'AI Startup and TechnologyTop IT Services in Saudi Arabia | AI Development, App Development &amp; ERP Solutions | CodeSync LLC',
    siteName: 'Codesync',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script strategy="afterInteractive" id="microsoft-clarity">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "p1nfykbzy6");
          `}
        </Script>
      </head>
      <body className={lato.className}>
        <Header />
        <main> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
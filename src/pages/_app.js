import '@/styles/reset.css.js';
import '@/styles/globals.css.js';
import { GlobalLayout } from '@/components/layouts/GlobalLayout';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}

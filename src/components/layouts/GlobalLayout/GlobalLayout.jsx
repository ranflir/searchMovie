import Link from 'next/link.js';
import * as styles from './GlobalLayout.css.js';
import { Noto_Sans_KR } from 'next/font/google';
import clsx from 'clsx';

const notoSansKr = Noto_Sans_KR({
  weight: ['500'],
  subsets: ['latin'],
});

export default function GlobalLayout({ children }) {
  return (
    <div className={clsx(styles.container, notoSansKr.className)}>
      <header className={styles.header}>
        <Link href="/" className={styles.headerLink}>
          NEXT CINEMA
        </Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>ranflir</footer>
    </div>
  );
}

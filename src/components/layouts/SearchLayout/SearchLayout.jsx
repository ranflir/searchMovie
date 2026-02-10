import { useRouter } from 'next/router';
import { useState } from 'react';
import * as styles from './SearchLayout.css.js';

export default function SearchLayout({ children }) {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [prevSearch, setPrevSearch] = useState('');

  const q = typeof router.query.q === 'string' ? router.query.q : '';

  if (router.isReady && prevSearch !== q) {
    setSearch(q);
    setPrevSearch(q);
  }

  const onChangeSearch = (event) => {
    setSearch(event.target.value);
  };

  const onSubmit = () => {
    const next = search.trim();
    if (!next || q === next) return;

    router.push({ pathname: '/search', query: { q: next } });
  };

  const onKeydown = (event) => {
    if (event.key !== 'Enter') return;
    onSubmit();
  };

  return (
    <div>
      <div className={styles.container}>
        <input
          className={styles.input}
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onKeydown}
          placeholder="검색어를 입력하세요..."
        />

        <button className={styles.button} onClick={onSubmit}>
          검색
        </button>
      </div>
      {children}
    </div>
  );
}

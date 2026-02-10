import { useRouter } from 'next/router';
import MovieItem from '@/components/MovieItem';
import SearchLayout from '@/components/layouts/SearchLayout';
import { fetchMovies } from '@/lib/movie.server';
import * as styles from '@/styles/home.css.js'; // 스타일 추가

// 3️⃣ Props로 서버에서 가져온 movies를 받습니다!
export default function Search({ movies }) {
  const router = useRouter();
  const { q } = router.query; // 브라우저 주소창에서 검색어 읽기

  return (
    <div className={styles.container}>
      <section>
        {/* 4️⃣ 검색어가 있을 때만 제목을 보여줍니다 */}
        <h3>{q ? `'${q}' 검색 결과` : '모든 영화'}</h3>

        <div className={styles.list}>
          {/* 5️⃣ mock 데이터가 아닌, 서버에서 받은 movies를 사용합니다 */}
          {movies.length > 0 ? (
            movies.map((movie) => <MovieItem key={movie.id} {...movie} />)
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </section>
    </div>
  );
}

Search.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

// 1️⃣ 사용자가 접속하면 서버에서 가장 먼저 실행됩니다.
export const getServerSideProps = async (context) => {
  const { q } = context.query; // 쿼리 스트링 꺼내기 (q)

  // 2️⃣ lib/movie.js의 함수를 이용해 서버에서 API를 호출합니다.
  const movies = await fetchMovies({ q });

  return {
    props: {
      movies, // 이 값이 위의 Search 컴포넌트의 인자로 들어갑니다.
    },
  };
};

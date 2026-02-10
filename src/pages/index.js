import * as styles from '@/styles/home.css.js';
import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import { useEffect } from 'react';

// 3️⃣ Props로 서버 데이터를 받음
export default function Home({ nowPlaying, allMovies, data }) {
  
  // 5️⃣ Client Side에서만 실행 (Browser)
  useEffect(() => {
    // window, document 등은 여기서 안전하게 사용 가능
    console.log('Client Side Execution:', window.location.href);
  }, []);

  // 2️⃣, 4️⃣ Server & Client 모두 실행 (Hydration)
  // 서버에서 HTML 만들 때 한 번, 브라우저에서 리액트가 연결될 때 한 번 실행됩니다.
  console.log('Server & Client Execution:', data);

  return (
    <div className={styles.container}>
      <section>
        <h3>지금 상영중인 영화</h3>
        <div className={styles.list}>
          {nowPlaying.map((movie) => (
            <MovieItem key={`rec-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>

      <section>
        <h3>등록된 모든 영화</h3>
        <div className={styles.list}>
          {allMovies.map((movie) => (
            <MovieItem key={`all-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

// 레이아웃 설정 (SearchLayout 적용)
Home.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

// 1️⃣ Server Side Execution (Server Only)
// 이 함수는 오직 '서버'에서만 실행됩니다.
export const getServerSideProps = async (context) => {
  try {
    console.log("Server Side Execution (URL):", context.req.url);

    // 여러 API를 동시에 호출 (Promise.all로 속도 최적화)
    const [nowPlayingResponse, allMoviesResponse] = await Promise.all([
      fetch(`${process.env.API_URL}/api/movies/now-playing`),
      fetch(`${process.env.API_URL}/api/movies`),
    ]);

    const [{ movies: nowPlaying }, { movies: allMovies }] = await Promise.all([
      nowPlayingResponse.json(),
      allMoviesResponse.json()
    ]);

    // 데이터 가공: '상영 중'인 영화는 '모든 영화' 목록에서 제외
    const nowPlayingIds = nowPlaying.map((movie) => movie.id);
    const filteredMovies = allMovies.filter(
      (movie) => !nowPlayingIds.includes(movie.id),
    );
    
    const data = "Next Cinema SSR Mode";

    // 컴포넌트의 Props로 데이터 전달
    return {
      props: {
        nowPlaying: nowPlaying.slice(0, 6), // 상위 6개만
        allMovies: filteredMovies,
        data,
      },
    };
  } catch (error) {
    console.error("API Fetch Error:", error);
    // 에러 발생 시 빈 배열을 넘겨 페이지가 깨지지 않게 방어
    return {
      props: {
        nowPlaying: [],
        allMovies: [],
        data: "Error Mode",
        error: "BACKEND_UNAVAILABLE",
      },
    };
  }
};
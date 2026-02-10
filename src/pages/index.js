import * as styles from '@/styles/home.css.js';
import SearchLayout from '@/components/layouts/SearchLayout';
import MovieItem from '@/components/MovieItem';
import { useEffect } from 'react';
// API 함수를 불러옵니다. (파일명이 movie.server.js라면 아래와 같이 작성)
import { fetchMovies, fetchNowPlayingMovies } from "@/lib/movie.server";

// 3️⃣ Props로 빌드 타임에 준비된 데이터를 받음
export default function Home({ nowPlaying, allMovies, data }) {
  
  // 5️⃣ Client Side에서만 실행 (Browser 전용)
  useEffect(() => {
    console.log('Client Side Execution:', window.location.href);
  }, []);

  // 4️⃣ 브라우저에서 실행될 때 서버(빌드 시점)에서 만든 data를 출력
  console.log('Hydration Check - Data:', data);

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

// 레이아웃 설정
Home.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

// ✅ SSG (Static Site Generation)
// 이 함수는 '빌드 타임(pnpm build)'에 단 한 번만 실행되어 HTML을 미리 만듭니다.
export const getStaticProps = async () => {
  // 1️⃣ 빌드 타임에 터미널에 찍히는 로그 (사용자가 접속할 때는 안 보임!)
  console.log("Build Time Execution: Home Page Created");

  try {
    // 🚀 서버에서 데이터 가져오기 (병렬 요청)
    const [nowPlaying, allMovies] = await Promise.all([
      fetchNowPlayingMovies(),
      fetchMovies(),
    ]);
    
    // 데이터 가공 로직 (중복 제거 등)
    const nowPlayingIds = nowPlaying.map((movie) => movie.id);
    const filteredMovies = allMovies.filter(
      (movie) => !nowPlayingIds.includes(movie.id),
    );
    
    const data = 'Next Cinema SSG Mode'; // 모드 명칭 변경
    
    // 2️⃣ 미리 만든 데이터를 Props로 전달
    return {
      props: {
        nowPlaying: nowPlaying.slice(0, 6),
        allMovies: filteredMovies,
        data,
      },
    };
  } catch (error) {
    console.error("SSG Build Error:", error);
    // 빌드 시 에러가 나면 빈 배열을 넘겨 페이지가 깨지지 않게 방어합니다.
    return {
      props: {
        nowPlaying: [],
        allMovies: [],
        error: "BACKEND_UNAVAILABLE"
      }
    };
  }
};
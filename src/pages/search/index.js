// src/pages/search/index.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SearchLayout from "@/layouts/SearchLayout";
import MovieItem from "@/components/MovieItem";
import { fetchSearchMovies } from "@/lib/movie.client"; // ✅ 클라이언트 전용 Helper 사용

export default function Search() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { q } = router.query;

  useEffect(() => {
    // 1️⃣ 라우터가 준비되지 않았거나 검색어가 없으면 중단
    if (!router.isReady || !q) return;

    // 2️⃣ AbortController: 이전 요청 취소로 경쟁 상태(Race Condition) 해결
    const controller = new AbortController();

    setIsLoading(true);

    const fetchSearchResults = async () => {
      try {
        // 3️⃣ Client-Side Fetcher 호출 (controller.signal 전달)
        const movieData = await fetchSearchMovies(q, controller.signal);
        setMovies(movieData);
        // 여기서 로딩을 끄지 않음 (finally에서 처리)
      } catch (error) {
        // 중요: AbortError는 에러가 아닌 '취소'이므로 무시해야 함
        if (error.name === "AbortError") return;
        console.error(error);
      } finally {
        // 3️⃣ 유효한(취소되지 않은) 요청인 경우에만 로딩 종료
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchSearchResults();

    // Cleanup: 쿼리가 바뀌거나 언마운트되면 이전 요청 "진짜로 취소"
    return () => {
      controller.abort();
    };
  }, [router.isReady, q]);

  return (
    <div>
      {/* 4️⃣ 로딩 상태 표시 (UX) */}
      {isLoading ? (
        <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
      ) : (
        movies.map((movie) => <MovieItem key={movie.id} {...movie} />)
      )}

      {/* 검색 결과가 없을 때의 UI */}
      {!isLoading && movies.length === 0 && q && (
        <div style={{ padding: "20px", textAlign: "center" }}>검색 결과가 없습니다.</div>
      )}
    </div>
  );
}

Search.getLayout = (page) => <SearchLayout>{page}</SearchLayout>;
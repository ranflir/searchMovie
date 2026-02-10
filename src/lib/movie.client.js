// src/lib/movie.client.js (새로 생성)
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_URL is not set.");
}

export async function fetchSearchMovies(q, signal) {
  // 1️⃣ 검색어 인코딩 (한글, 특수문자 처리를 위해 encodeURIComponent 필수)
  const safeQ = encodeURIComponent(q);

  // 2️⃣ signal 전파 (취소 기능)
  const res = await fetch(`${BASE_URL}/api/movies/search?q=${safeQ}`, { signal });
  if (!res.ok) throw new Error("Fetch failed");
  const data = await res.json();
  return data.movies || [];
}
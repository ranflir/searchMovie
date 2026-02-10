import { useRouter } from 'next/router';
import MovieDetail from '@/components/MovieDetail';
import movies from '@/mock/movies.json';

export default function MoviePage() {
  const router = useRouter();
  const { id } = router.query;

  const movie = movies.find((m) => m.id === Number(id));

  if (!movie) return <div>Loading...</div>;

  return <MovieDetail {...movie} />;
}

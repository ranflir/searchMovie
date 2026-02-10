import { useRouter } from 'next/router';

import MovieItem from '@/components/MovieItem';
import movies from '@/mock/movies.json';
import SearchLayout from '@/components/layouts/SearchLayout';

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Search.getLayout = (page) => {
  return <SearchLayout>{page}</SearchLayout>;
};

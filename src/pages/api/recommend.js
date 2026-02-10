// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const movies = [
    { title: '인셉션', genre: 'SF' },
    { title: '다크 나이트', genre: '액션' },
    { title: '인터스텔라', genre: 'SF' },
    { title: '라라랜드', genre: '로맨스' },
    { title: '기생충', genre: '스릴러' },
  ];

  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  res.status(200).json(randomMovie);
}

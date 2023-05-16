const baseURL =
  `${process.env.baseURL}/api/home-article`;

const getArticleHome = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  const data =  await res.json()
  return data;
};

export { getArticleHome };

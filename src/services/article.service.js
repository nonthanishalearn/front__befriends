
const baseURL = `${process.env.baseURL}/api/articles`;

const getAllArticle = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

const getArticle = async (_slug) => {
  let url = `${baseURL}/${_slug}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getAllArticle, getArticle };

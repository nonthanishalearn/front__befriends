

const baseURL =
  `${process.env.baseURL}/api/reviews`;

const getAllReview = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

const getReview = async (_id) => {
  let url = `${baseURL}/?id=${_id}`;
  const res = await fetch(url);
  return res.json();
};

export { getAllReview, getReview };

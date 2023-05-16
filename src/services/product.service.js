
const baseURL =
  `${process.env.baseURL}/api/products`;

const getAllProduct = async () => {
  let url = `${baseURL}?populate=*`;
  const response = await fetch(url);
  return response.json();
};

const getProduct = async (_id) => {
  let url = `${baseURL}/${_id}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getAllProduct, getProduct };

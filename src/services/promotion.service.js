

const baseURL =
  `${process.env.baseURL}/api/promotions`;

const getAllPromotion = async () => {
  let url = `${baseURL}?populate=*`;
  const response = await fetch(url);
  return response.json();
};

const getPromotion = async (_id) => {
  let url = `${baseURL}/${_id}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getAllPromotion, getPromotion };

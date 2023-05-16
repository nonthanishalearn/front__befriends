
const baseURL =
  `${process.env.baseURL}/api/home-promotion`;

const getPromotionHome = async () => {
  let url = `${baseURL}?populate=*`;
  const response = await fetch(url) ;
  return response.json();
};

export { getPromotionHome };

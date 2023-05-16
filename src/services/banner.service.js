
const baseURL =
  `${process.env.baseURL}/api/banners`;

const getAllBanner = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

const getBanner = async (_id) => {
  let url = `${baseURL}/${_id}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getAllBanner, getBanner };

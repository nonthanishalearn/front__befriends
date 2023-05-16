
const baseURL =
  `${process.env.baseURL}/api/services`;

const getAllService = async () => {
  let url = `${baseURL}?populate=*`;
  const response = await fetch(url);
  return response.json();
};

const getService = async (_id) => {
  let url = `${baseURL}/${_id}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getAllService, getService };

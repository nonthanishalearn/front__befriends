
const baseURL =
  `${process.env.baseURL}/api/contact`;

const getContact = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getContact };

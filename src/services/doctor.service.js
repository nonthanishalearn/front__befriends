
const baseURL =
  `${process.env.baseURL}/api/doctors`;

const getAllDoctor = async () => {
  let url = `${baseURL}?populate=*`;
  const response = await fetch(url);
  return response.json();
};

export { getAllDoctor };

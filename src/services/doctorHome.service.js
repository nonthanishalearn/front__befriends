
const baseURL =
  `${process.env.baseURL}/api/home-doctor`;

const getDoctorHome = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getDoctorHome };

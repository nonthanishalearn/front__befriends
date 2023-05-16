
const baseURL =
  `${process.env.baseURL}/api/schedules`;

const getSchedule = async () => {
  let url = `${baseURL}?populate=*`;
  const res = await fetch(url);
  return res.json();
};

export { getSchedule };

const url = 'https://api.weather.gov';
const auth = async () => {
  const res = await fetch(url);

  console.log(await  res.json());
};

auth();

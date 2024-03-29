const client_key = 'AGFCU3ZUHNPYGFJC836ZVQ9CC';
const geoLocation = 'Tehran,IR';
const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${geoLocation}?key=${client_key}`;
const weather = async () => {
  const res = await fetch(url);
  const data = await res.json();
  const time = data;

  console.log(data.days[0]);
};

weather();

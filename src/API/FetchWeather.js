import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "c3d8e7f2513dd67d45c80051f29482bc";

export const FetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return data;
};

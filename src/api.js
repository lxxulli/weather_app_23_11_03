import axios from "axios";

const instane = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    units: "metric",
    lang: "kr",
    appid: "6f519bd47eff56b36536a05bb4c15a38",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = 35.15805555399276;
  // const lon = 129.0597635917639;

  const [_, lat, lon] = queryKey;

  return instane
    .get(`weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.data);
  // instane는 변수명이라 변경 가능
  // () 안에는 요청하고자 하는 값
};

// api = 서버, 백엔드
// then = 요청하고난 다음에
// response가 길어서 res로 쓰기도 함

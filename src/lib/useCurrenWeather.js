import { useEffect, useState } from "react";

export const useCurrenWeather = () => {
  const defalutLat = 35.15805555399276;
  const defalutLon = 129.0597635917639;
  const [lat, setLat] = useState(defalutLat);
  const [lon, setLon] = useState(defalutLon);

  const location = (pos) => {
    const {
      coords: { latitude, longithde },
    } = pos;
    setLat(latitude);
    setLon(longithde);
  };
  console.log(lat, lon);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location);
    // - 현재 위치기반으로 위도, 경도값을 가져올 수 있음
  }, [lat, lon]);

  return {
    lat,
    lon,
  };
};

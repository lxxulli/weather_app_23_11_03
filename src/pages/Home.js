import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import styled from "styled-components";
import { useCurrenWeather } from "../lib/useCurrenWeather";
import { Loading } from "../components/Loading";

const Wrap = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background: linear-gradient(
    0deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(178, 213, 255, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 100px 20px;
  color: white;
`;
const Location = styled.div`
  font-size: 30px;
  font-weight: 700;
`;
const Temp = styled.div`
  font-size: 70px;
  font-weight: 600;
`;
const Dese = styled.div`
  font-size: 18px;
`;
const Separ = styled.div`
  width: 50px;
  height: 5px;
  background-color: white;
`;
const ConWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Con = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  border-right: 1px solid white;
  &:last-child {
    border-right: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10pxs;
  }
  p {
    font-size: 18px;
  }
`;

export const Home = () => {
  const { lat, lon } = useCurrenWeather();
  console.log(lat, lon);

  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });
  // - api에 요청할 때 사용한 hook
  // - 비동기 사용 시 상태를 관리하는 hook
  // - useQuery를 사용할 땐 반드시 QueryClientProvider를 설정해줘야 됨

  console.log(isLoading);

  // const {
  //   name,
  //   main: { temp },
  // } = data;
  //  비구조화 활당을 이용하면 코드가 짧아짐

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrap>
          <Location>{data?.name}</Location>
          <Temp>{Math.round(data?.main?.temp)}º</Temp>
          <Dese>{data?.weather[0]?.description}</Dese>

          <Separ></Separ>

          <ConWrap>
            <Con>
              <h3>체감온도</h3>
              <p>{Math.round(data?.main?.feels_like)}º</p>
            </Con>
            <Con>
              <h3>최저온도</h3>
              <p>{Math.round(data?.main?.temp_min)}º</p>
            </Con>
            <Con>
              <h3>최고온도</h3>
              <p>{Math.round(data?.main?.temp_max)}º</p>
            </Con>
          </ConWrap>
        </Wrap>
      )}
    </>
  );
};

// () = 당장 실행, 호출한다는 뜻

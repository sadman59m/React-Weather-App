import Axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatheComponent from "./modules/WeatherInfoComponent";

const API_KEY = "3076b3921a5fccc473d8286a56bd48f3";

const Container = styled.div`
  font-family: 'montserrat';
  display: flex;
  flex-direction: column;
  width: 380px;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  background: white;
`;


const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response =
      await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    updateWeather(response.data);
    console.log(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {weather ? <WeatheComponent weather={weather} />
        : <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />}
    </Container>
  );
}

export default App;

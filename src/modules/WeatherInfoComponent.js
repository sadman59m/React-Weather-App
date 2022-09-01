import styled from "styled-components";

export const WeatherIcons = {
    "01d": "/icons/sunny.svg",
    "01n": "/icons/night.svg",
    "02d": "/icons/day.svg",
    "02n": "/icons/cloudy-night.svg",
    "03d": "/icons/cloudy.svg",
    "03n": "/icons/cloudy.svg",
    "04d": "/icons/perfect-day.svg",
    "04n": "/icons/cloudy-night.svg",
    "09d": "/icons/rain.svg",
    "09n": "/icons/rain-night.svg",
    "10d": "/icons/rain.svg",
    "10n": "/icons/rain-night.svg",
    "11d": "/icons/storm.svg",
    "11n": "/icons/storm.svg",
    "13d": "/icons/snow.svg",
    "13n": "/icons/snow.svg",
    "50d": "/icons/haze.svg",
    "50n": "/icons/haze.svg",
}

const WeatherInfoIcons = {
    sunrise: "/icons/temp.svg",
    sunset: "/icons/temp.svg",
    Humidity: "/icons/humidity.svg",
    Wind: "/icons/wind.svg",
    Pressure: "/icons/pressure.svg"
}

const WeatheCondition = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

const Condition = styled.span`
    margin: 10px auto;
    font-size: 14px;

    & span {
        font-size: 28px;
    }
`;

const WeatherIcon = styled.img`
    width: 100px;
    height: 100px;
    margin: 10px auto;
`;

const Location = styled.div`
    font-size: 28px;
    font-weight: bold;
    margin: 5px 10px 10px 10px;
`;

const WeatherInfoLabel = styled.span`
    font-size: 14px;
    font-weight: bold;
    text-align: start;
    width: 90%;
`;

const WeatherInfoContainer = styled.div`
    display: felx;
    flex-direction: row;
    justify-content: space-between;
    align-itmes: center;
    width: 90%;
    flex-wrap: wrap;
    font-size: 50px;
`;


const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 25px;
    justify-content: space-evenly;
    align-items: center;
`;

const InfoIcon = styled.img`
    width: 36px;
    height: 36px;
`;

const InfoLabel = styled.span`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 10px;

    & span {
        font-size: 12px;
        text-transformation: capitalize;
    }
`;



const WeatherInfoComponent = (props) => {

    const { name, value } = props;
    return (
        <InfoContainer>
            <InfoIcon src={WeatherInfoIcons[name]} />
            <InfoLabel>
                {value}
                <span>{name}</span>
            </InfoLabel>
        </InfoContainer>
    );
}


const WeatheComponent = (props) => {
    const { weather } = props;
    const isDay = weather?.weather[0].icon?.includes('d');
    const getTime = (Timestamp) => {
        return `${new Date(Timestamp * 1000).getHours()} : ${new Date(Timestamp * 1000).getMinutes()}`;
    }
    return (
        <>
            <WeatheCondition>
                <Condition><span>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span> {`| ${weather?.weather[0].description}`}</Condition>
                <WeatherIcon src={WeatherIcons[weather?.weather[0].icon]} />
            </WeatheCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent
                    name={isDay ? "sunset" : "sunrise"}
                    value={getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}
                />
                <WeatherInfoComponent name="Humidity" value={weather?.main?.humidity} />
                <WeatherInfoComponent name="Wind" value={weather?.wind?.speed} />
                <WeatherInfoComponent name="Pressure" value={weather?.main?.pressure} />
            </WeatherInfoContainer>
        </>
    );
}

export default WeatheComponent;
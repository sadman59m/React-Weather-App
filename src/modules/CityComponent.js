import styled from "styled-components";

const WeatherLogo = styled.img`
    weight: 140px;
    height: 140px;
    margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
    font-size: 18px;
    font-weight: bold;
    color: black;
    margin: 10px auto;
`;

const SearchCity = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: row;
    border: black solid 1px;
    border-radius: 2px;
    color: black;

    & input {
        padding: 10px;
        font-size: 14px;
        font-weight: 600;
        outline: 0;
        border: 0;
        opacity: .9;
    }

    & button {
        cursor: pointer;
        outline: 0;
        border: 0;
        color: white;
        background-color: #000;
        padding: 10px;
        font-size: 14px;
    }

    & button:hover {
        color: white;
        background-color: #222;
    }
`;


const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
            <WeatherLogo src="/icons/perfect-day.svg" />
            <ChooseCityLabel>Find Weather Of Your City</ChooseCityLabel>
            <SearchCity onSubmit={fetchWeather}>
                <input placeholder="city" onChange={(e) => updateCity(e.target.value)} />
                <button type="submit">Search</button>
            </SearchCity>
        </>
    );
}

export default CityComponent;
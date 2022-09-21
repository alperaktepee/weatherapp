import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    country: "",
    description: "",
    temp:273,
    temp_min: 273,
    temp_max: 273,
    humidity: 0,
  });
 const [dataLoaded,setDataLoaded]=useState(false);
  const searchWeather = () => {
    Axios.get(
     "your api key will come here"
    ).then((response) => {
      console.log(response.data);
      setWeatherData({
        description: response.data.weather[0].description,
        temp: response.data.main.temp,
        temp_min: response.data.main.temp_min,
        temp_max: response.data.main.temp_max,
        humidity: response.data.main.humidity,
        country: response.data.sys.country,
      });
    });
    setDataLoaded(true);
  };
  return (
    <div className="App">
      <h1> Current Weather</h1>
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button onClick={searchWeather}>Search</button>
      </div>
      <div className="displayDataContainer">
        {dataLoaded &&
        <div className="data">
          <h3>COUNTRY : {weatherData.country}</h3>
          <h3>DESCRIPTION : {weatherData.description}</h3>
          <h3>TEMPERATURE: {weatherData.temp-273}°C</h3>
          <h3>MIN TEMPERATURE: {weatherData.temp_min - 273}°C</h3>
          <h3>MAX TEMPERATURE : {weatherData.temp_max - 273}°C</h3>
          <h3>HUMIDITY : {weatherData.humidity}</h3>
        </div>
}
      </div>
    </div>
  );
}

export default App;

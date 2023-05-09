import { useEffect } from "react";
import { getCoordinates } from "./services/getCoordinates";

import "./App.css"
import { getCurrentWeather } from "./services/getCurrentWeather";
import { useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);
const [isCelsius, setisCelsius] = useState(true);
  useEffect(() => {
const loadWeather = async() => {
const coordinates = await getCoordinates();
console.log(" coordinates ", coordinates)
if (coordinates) {
const weatherData = await getCurrentWeather(coordinates.latitude, coordinates.longitude);
console.log (weatherData)
setWeather(weatherData);
 } else{

 }
};

loadWeather();
  },[]);

  return (
    <>
    <h1>Weather App</h1>
    { weather ? (
      <>
    <article>
      <h2>{weather.weather.main}</h2>
      <p>{weather.weather.description}</p>
      <p>{isCelsius ? weather.temperature.celsius.toFixed(2) :weather.temperature.farenheit.toFixed(2)}{" "} 
      ˚{isCelsius ? "C" : "F"}</p>
      <div>
        <img src = {weather.weather.icon} alt={weather.weather.description} />
      </div>

    <p>
      {weather.city} , {weather.country}
    </p>
    </article>

    <button onClick={() =>setisCelsius(!isCelsius)}>Change {isCelsius ? "F" : "C"}</button>
    </>
    ) : (
     <p>Loading weather...</p>
    )}
     </>
  );
}

export default App

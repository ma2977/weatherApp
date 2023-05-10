import { useEffect } from "react";
import { getCoordinates } from "./services/getCoordinates";
import cardImg from "./assets/card/card.png";
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
    <div className="search">
      <input type= "text" placeholder= "Search location..."className="search" />
    </div>
    <div className="containerCard">
    { weather ? (
      
      <>
    <div className="card_slanted">
      
       <p className="temperatureGrades">{isCelsius ? weather.temperature.celsius.toFixed(2) :weather.temperature.farenheit.toFixed(2)}{" "} 
      ˚{isCelsius ? "C" : "F"}</p>
      <h4>{weather.weather.main}</h4>
      <h4>{weather.weather.description}</h4>
     
       <div className="weatherIcon">
        <img src = {weather.weather.icon} alt={weather.weather.description} />
   </div>
    <h2>
      {weather.city} , {weather.country}
    </h2>
    
    
    </div>
    
   
    
    
    <button onClick={() =>setisCelsius(!isCelsius)}>Change to {isCelsius ? "F" : "C"}</button>
   
   </>
    ) : (
     <p>Loading weather...</p>
    )}
    </div> </>
  
  );
} 
export default App

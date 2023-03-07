import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./current-weather/current-weather";
import AirPollution from "./air-pollution/air-pollution";
import CurrentPollen from "./pollen/pollen";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./components/search/api";
import { POLLEN_API_URL, POLLEN_API_KEY , pollenApiOptions} from "./components/search/api";
import "./App.css";
import { store, persistor } from './redux/store'
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'
import Main from "./containers/Main"



function App() {

//null states full current status's

  const [currentWeather, setCurrentWeather] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [pollenLevels, setPollen] = useState(null);
;

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    //fetch API data for different stats using lat and lon.

    const currentWeather = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    
    const currentAirPollution = fetch(
      `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    const currentPollen = fetch(
      `${POLLEN_API_URL}/airquality?lat=${lat}&lon=${lon}&fields=precipitation`,pollenApiOptions


    );
  

    Promise.all([currentWeather, currentAirPollution, currentPollen])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const airPollutionResponse = await response[1].json();
        const pollenResponse = await response[2].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setAirPollution({ city: searchData.label, ...airPollutionResponse });
        setPollen({ city: searchData.label, ...pollenResponse });
      })
      .catch(console.log);
  };

  return (
  <div>
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {airPollution && <AirPollution data={airPollution} /> }
      {pollenLevels && <CurrentPollen data ={pollenLevels}/>}
    </div>

     <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>

  </div>

  );
}

export default App;

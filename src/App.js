import "./App.css";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="App">
      <h1>Find a forecast</h1>
      <WeatherSearch />
      <br />
      <br />
      <div>
        <a href="https://github.com/HanLander/react-weather-app">Github</a>
      </div>
    </div>
  );
}

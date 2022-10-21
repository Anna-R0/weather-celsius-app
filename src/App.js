import { waitForElementToBeRemoved } from "@testing-library/react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      Weather App
      <footer>
        This project was coded by Anna Ro and is
        <a
          href="https://github.com/Anna-R0/weather-celsius-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-sourced at github
        </a>
      </footer>
    </div>
  );
}

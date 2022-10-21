import { waitForElementToBeRemoved } from "@testing-library/react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by Anna Ro and is {""}
          <a
            href="https://github.com/Anna-R0/weather-celsius-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on github
          </a>
        </footer>
      </div>
    </div>
  );
}

import { useState } from "react";
import { FetchWeather } from "./API/FetchWeather";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if(e.key === "Enter") {
      const data = await FetchWeather(query);

      console.log(data);
    }
  }

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
    </div>
  );
}

export default App;

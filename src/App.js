import "./App.css";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({});

  const clickHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("https://quotes.rest/qod?language=en");
    const data = await response.json();
    const fetchedQuote = data.contents.quotes[0];

    setQuote(fetchedQuote);
  };

  return (
    <div className="layout">
      <div className="container">
        <blockquote className="quote">
          {quote.quote}
        </blockquote>
        <div className="author">{quote.author}</div>
        <button className="btn" onClick={clickHandler}>
          Get The Quote Of The Day
        </button>
      </div>
    </div>
  );
}

export default App;

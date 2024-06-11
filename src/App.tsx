import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState<string[]>([]);

  const fetchQuote = async () => {
    try {
      const response = await axios.get(
        "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
      );
      setQuote(response.data[0]);
    } catch (error) {
      console.error("Error fetching quote", error);
    }
  };

  const saveQuote = (quote: string) => {
    if (savedQuotes.indexOf(quote) === -1)
      setSavedQuotes([...savedQuotes, quote]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <h1>Quotes</h1>
      <Card quote={quote} />
      <button onClick={() => saveQuote(quote)}>Save Quote</button>
      <button onClick={fetchQuote}>New Quote</button>
      <h2>Saved Quotes</h2>
      <ul>
        {savedQuotes.map((savedQuote, index) => (
          <li key={index}>{savedQuote}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

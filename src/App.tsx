import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const App = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState<string[]>([]);

  useEffect(() => {
    fetchQuote();
    const saved = localStorage.getItem("savedQuotes")?.split(",") as string[];
    if (saved) {
      setSavedQuotes(saved);
    }
    // console.log(saveQuote)
  }, []);

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
    const updatedSavedQuotes = [...savedQuotes, quote];
    if (localStorage.getItem("savedQuotes")?.split(",").indexOf(quote) === -1) {
      console.log(savedQuotes);
      setSavedQuotes(updatedSavedQuotes);
      localStorage.setItem("savedQuotes", updatedSavedQuotes.toString());
    }
  };

  return (
    <div className="app">
      <h1>Quotes</h1>
      <Card quote={quote} onSave={saveQuote} />
      <button onClick={()=>saveQuote(quote)}>Save Quote</button>
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

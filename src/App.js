import './App.css';
import QuoteBox from './components/QuoteBox.jsx';
import { quotes } from './Quotes';
import { useState } from 'react';

const randomQuotes = [];
const length = quotes.length
for (let i=0; i<length; i++)
{
  const j = Math.floor(Math.random() * quotes.length);
  const quote = quotes.splice(j, 1);
  randomQuotes.push(quote[0]);
}

function App()
{
  const [index, updateIndex] = useState(0);
  function nextQuote()
  {
    updateIndex((index + 1) % randomQuotes.length);
  }

  return (
    <div className="App" >
      <QuoteBox
      quote={randomQuotes[index]}
      nextQuote={nextQuote}
      />
    </div>
  );
}

export default App;

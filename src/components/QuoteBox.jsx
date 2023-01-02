import React from 'react';
import '../css/quote-box.css'

function QuoteBox({quote, nextQuote})
{
  const quoteText = quote.text.replace(/ /g,'%20');
  const quoteAuthor = quote.author.replace(/ /g,'%20');
  return (
    <div id='quote-box-container' style={{backgroundColor: quote.col}}>
      <div id='quote-box' style={{color: quote.col}}>
        <p id='text' >
          <i className="bi bi-quote"></i> {quote.text}
        </p>
        <p id="author">
          - {quote.author}
        </p>
        <div id='buttons-container'>
          <a
          href={`https://twitter.com/compose/tweet?text=${quoteText}%0D%0D-%20${quoteAuthor}`}
          target="_blank"
          id="tweet-quote"
          style={{backgroundColor: quote.col}}>
            <i className="bi bi-twitter"></i>
          </a>
          <button
          id="new-quote"
          style={{backgroundColor: quote.col}}
          onClick={nextQuote}>
            New quote
          </button>
        </div>
      </div>
      <p id='credits'>by <a href="https://github.com/gino-llano" target="_blank">Gino Llano</a></p>
    </div>
  );
}

export default QuoteBox;
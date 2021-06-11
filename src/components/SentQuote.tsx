import React from "react";
import Quote from "./Quote";
import './QuoteCard.css';

const SentQuote = () => {
    return (
        <div className="quote-card" data-testid="sent-quote">
            <Quote />
        </div>
    );
};

export default SentQuote;

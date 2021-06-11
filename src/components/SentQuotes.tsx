import React from "react";
import './QuoteCardLayout.css'
import SentQuote from "./SentQuote";

const SentQuotes = () => {
    return (
        <div>
            <h4 data-testid="sent-quotes">sent quotes</h4>
            <div className="quote-card-layout">
                {/*.map the quotes here*/}
                <SentQuote /><SentQuote />
            </div>
        </div>
    );
};

export default SentQuotes;


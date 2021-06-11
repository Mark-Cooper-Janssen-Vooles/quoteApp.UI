import React from "react";
import DraftQuoteActions from "./DraftQuoteActions";
import Quote from "./Quote";
import './QuoteCard.css';

const DraftQuote = () => {
    return (
        <div className="quote-card">
            <Quote />
            <DraftQuoteActions />
        </div>
    );
};

export default DraftQuote;

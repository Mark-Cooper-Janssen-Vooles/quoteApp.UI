import React from "react";
import Quote from "./Quote";
import './QuoteCard.css';
import DraftQuoteActions from "./DraftQuoteActions";

const SentQuote = (props: any) => {
    return (
        <div className="quote-card" data-testid="sent-quote">
            <p style={{textAlign: "left"}}>Message: {props.quote.Message}</p>
            <p style={{textAlign: "left"}}>Price: {props.quote.Price}</p>
        </div>
    );
};

export default SentQuote;

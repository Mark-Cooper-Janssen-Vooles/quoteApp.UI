import React from "react";
import Quote from "./Quote";
import './QuoteCard.css';
import DraftQuoteActions from "./DraftQuoteActions";

const SentQuote = (props: any) => {
    return (
        <div className="quote-card" data-testid="sent-quote">
            <p style={{textAlign: "left"}}>Message: {props.quote.message}</p>
            <p style={{textAlign: "left"}}>Price: {props.quote.price}</p>
        </div>
    );
};

export default SentQuote;

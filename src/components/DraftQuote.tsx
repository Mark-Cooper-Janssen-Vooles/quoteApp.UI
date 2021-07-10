import React from "react";
import DraftQuoteActions from "./DraftQuoteActions";
import Quote from "./Quote";
import './QuoteCard.css';

const DraftQuote = (props: any) => {
    return (
        <div className="quote-card">
            <p style={{textAlign: "left"}}>Message: {props.quote.Message}</p>
            <p style={{textAlign: "left"}}>Price: {props.quote.Price}</p>
            <DraftQuoteActions />
        </div>
    );
};

export default DraftQuote;

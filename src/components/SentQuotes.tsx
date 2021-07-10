import React from "react";
import './QuoteCardLayout.css'
import SentQuote from "./SentQuote";

const SentQuotes = (props: any) => {
    return (
        <div>
            <h4 data-testid="sent-quotes">sent item{props.sentQuotes.length > 1 && 's'}</h4>
            <div className="quote-card-layout">
                {/*.map the quotes here*/}
                {props.sentQuotes && props.sentQuotes.map((sentQuote: any) => {
                    return <SentQuote quote={sentQuote} key={sentQuote.id}/>
                })}
            </div>
        </div>
    );
};

export default SentQuotes;


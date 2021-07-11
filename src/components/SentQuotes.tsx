import React from "react";
import './QuoteCardLayout.css'
import SentQuote from "./SentQuote";

const SentQuotes = (props: any) => {
    return (
        <div>
            <h4 data-testid="sent-quotes">sent item{props.sentItems.length > 1 && 's'}</h4>
            <div className="quote-card-layout">
                {/*.map the quotes here*/}
                {props.sentItems && props.sentItems.map((sentItem: any) => {
                    return <SentQuote quote={sentItem} key={sentItem.id}/>
                })}
            </div>
        </div>
    );
};

export default SentQuotes;


import React from "react";
import DraftQuote from "./DraftQuote";
import './QuoteCardLayout.css'

const DraftQuotes = (props: any) => {
    console.log(props.draftquotes);

    return (
        <div>
            <h4 data-testid="component-header">draft quotes</h4>
            <div className="quote-card-layout">
                {/*.map the quotes here*/}
                {props.draftquotes && props.draftquotes.map((quote: any) => {
                    console.log(quote);
                    return <DraftQuote quote={quote}/>
                })}
            </div>

        </div>
    );
};

export default DraftQuotes;


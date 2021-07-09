import React from "react";
import DraftQuote from "./DraftQuote";
import './QuoteCardLayout.css'

const DraftQuotes = (props: any) => {
    console.log(props.draftquotes);

    return (
        <div>
            <h4 data-testid="component-header">draft item{props.draftquotes.length > 1 && 's'}</h4>
            <div className="quote-card-layout">
                {/*.map the quotes here*/}
                {props.draftquotes && props.draftquotes.map((draftQuote: any) => {
                    console.log(draftQuote);
                    return <DraftQuote quote={draftQuote}/>
                })}
            </div>

        </div>
    );
};

export default DraftQuotes;


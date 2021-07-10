import React from "react";
import DraftQuote from "./DraftQuote";
import './QuoteCardLayout.css'

const DraftQuotes = (props: any) => {
    return (
        <div>
            <h4 data-testid="component-header">draft item{props.draftquotes.length > 1 && 's'}</h4>
            <div className="quote-card-layout">
                {props.draftquotes && props.draftquotes.map((draftItem: any) => {
                    return <DraftQuote item={draftItem} key={draftItem.id}/>
                })}
            </div>
        </div>
    );
};

export default DraftQuotes;


import React from "react";
import DraftQuote from "./DraftQuote";
import './QuoteCardLayout.css'

const DraftItems = (props: any) => {
    return (
        <div>
            <h4 data-testid="component-header">draft item{props.draftItems.length > 1 && 's'}</h4>
            <div className="quote-card-layout">
                {props.draftItems && props.draftItems.map((draftItem: any) => {
                    return <DraftQuote item={draftItem} key={draftItem.id} quoteId={props.quoteId}/>
                })}
            </div>
        </div>
    );
};

export default DraftItems;


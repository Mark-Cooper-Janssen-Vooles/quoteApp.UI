import React from "react";
import DraftQuote from "./DraftQuote";
import './DraftQuotes.css'

const DraftQuotes = () => {
    return (
        <div>
            <h4 data-testid="component-header">draft quotes</h4>
            <div className="draft-quote-layout">
                {/*.map the quotes here*/}
                <DraftQuote /><DraftQuote /><DraftQuote /><DraftQuote />
            </div>

        </div>
    );
};

export default DraftQuotes;


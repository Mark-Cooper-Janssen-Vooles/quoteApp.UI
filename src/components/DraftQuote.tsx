import React from "react";
import DraftQuoteActions from "./DraftQuoteActions";

const DraftQuote = () => {
    return (
        <div>
            <div data-testid="quote-info">
                <p>existing quote 1</p>
                <p>to: </p>
                <p>amount: </p>
                <p>contact: </p>
            </div>

            <DraftQuoteActions />
        </div>
    );
};

export default DraftQuote;

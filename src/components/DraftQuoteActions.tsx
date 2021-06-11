import React from "react";

const DraftQuoteActions = () => {
    return (
        <div data-testid="quote-actions">
            <button>edit quote</button>
            <button>delete quote</button>
            <button>finalise and send</button>
        </div>
    );
};

export default DraftQuoteActions;

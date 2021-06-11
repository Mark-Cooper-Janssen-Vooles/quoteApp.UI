import React from "react";

const Quote = () => {
    return (
        <div data-testid="quote-info">
            <p>quote 1</p>
            <p style={{textAlign: "left"}}>to: </p>
            <p style={{textAlign: "left"}}>amount: </p>
            <p style={{textAlign: "left"}}>contact: </p>
        </div>
    );
};

export default Quote;

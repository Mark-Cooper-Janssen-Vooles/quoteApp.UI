import React from "react";

const Quote = (props: any) => {
    return (
        <div data-testid="quote-info">
            <p>quote 1</p>
            {/*<p style={{textAlign: "left"}}>to: {props.quote.Message}</p>*/}
            {/*<p style={{textAlign: "left"}}>amount: {props.quote.Price}</p>*/}
            {/*<p style={{textAlign: "left"}}>contact: </p>*/}
        </div>
    );
};

export default Quote;

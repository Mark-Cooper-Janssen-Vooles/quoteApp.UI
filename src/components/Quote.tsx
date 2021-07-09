import React from "react";
import DraftQuotes from "./DraftQuotes";
import SentQuotes from "./SentQuotes";

const Quote = (props: any) => {
    console.log(props.quote.DraftItems);
    return (
        <div data-testid="quote-info" style={{borderStyle: "solid", margin: "10px", padding: "5px", width: "80%"}}>
            <p>{props.quote.Contact.Name}</p>
            <p>{props.quote.Contact.Email}</p>
            {props.quote.DraftItems && <DraftQuotes draftquotes={props.quote.DraftItems} style={{align: "left"}} />}
            {props.quote.Items && <SentQuotes sentQuotes={props.quote.Items} style={{align: "left"}} />}
            <p />
            <button>Delete Quote</button>
            <p />
        </div>
    );
};

export default Quote;

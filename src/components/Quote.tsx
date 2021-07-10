import React from "react";
import DraftQuotes from "./DraftQuotes";
import SentQuotes from "./SentQuotes";
import ItemForm from "./ItemForm";
import {getQuotesRequest, setItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

const Quote = (props: any) => {
    const addQuote = () => {
        props.setItemFormActive(!props.itemFormActive)
    }

    return (
        <div data-testid="quote-info" style={{borderStyle: "solid", margin: "10px", padding: "5px", width: "80%"}}>
            <p>{props.quote.Contact.Name}</p>
            <p>{props.quote.Contact.Email}</p>
            <button onClick={addQuote}>Add new draft item</button>

            {props.itemFormActive ?
                <ItemForm quote={props.quote}/>
                : <></>}

            {props.quote.DraftItems && <DraftQuotes draftquotes={props.quote.DraftItems} style={{align: "left"}} />}
            {props.quote.Items && <SentQuotes sentQuotes={props.quote.Items} style={{align: "left"}} />}
            <p />
            <button>Delete Quote</button>
            <p />
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        itemFormActive: state.quote.itemFormActive
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getQuotesRequest: () => dispatch(getQuotesRequest()),
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quote)
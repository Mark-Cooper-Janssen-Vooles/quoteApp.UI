import React from "react";
import DraftItems from "./DraftItems";
import SentQuotes from "./SentQuotes";
import ItemForm, {Mode} from "./ItemForm";
import {deleteQuote, getQuotesRequest, setItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

const Quote = (props: any) => {
    const showNewItemForm = () => {
        props.setItemFormActive(!props.itemFormActive)
    }

    const deleteQuote = () => {
        if (window.confirm("Are you sure you want to delete this quote?")) {
            props.deleteQuote(props.quote.id)
        }
        props.getQuotesRequest(); // reload the dom
    }

    return (
        <div data-testid="quote-info" style={{borderStyle: "solid", margin: "10px", padding: "5px", width: "80%"}}>
            <p>{props.quote.Contact.Name}</p>
            <p>{props.quote.Contact.Email}</p>
            <button onClick={showNewItemForm}>Add new draft item</button>

            {props.itemFormActive ?
                <ItemForm quote={props.quote} mode={Mode.NEW_ITEM} />
                : <></>}

            {props.quote.DraftItems && <DraftItems draftItems={props.quote.DraftItems} quoteId={props.quote.id} style={{align: "left"}} />}
            {props.quote.Items && <SentQuotes sentItems={props.quote.Items} style={{align: "left"}} />}
            <p />
            <button onClick={deleteQuote}>Delete Quote</button>
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
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show)),
        deleteQuote: (quoteId: string) => dispatch(deleteQuote(quoteId)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quote)
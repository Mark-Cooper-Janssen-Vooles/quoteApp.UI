import React from "react";
import DraftQuoteActions from "./DraftQuoteActions";
import './QuoteCard.css';
import {setEditItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import ItemForm, { Mode } from "./ItemForm";

const DraftQuote = (props: any) => {
    const showItemFormEdit = props.itemFormEditActive.editing && props.itemFormEditActive.itemId == props.item.id

    return (
        <div className="quote-card">
            { showItemFormEdit ?
                <div>
                    <ItemForm item={props.item} quoteId={props.quoteId} mode={Mode.EDIT_ITEM}/>
                </div>
                :
                <div>
                    <p style={{textAlign: "left"}}>Message: {props.item.message}</p>
                    <p style={{textAlign: "left"}}>Price: {props.item.price}</p>
                    <DraftQuoteActions itemId={props.item.id} quoteId={props.quoteId}/>
                </div>
            }
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        itemFormEditActive: state.quote.itemFormEditActive
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setEditItemFormActive: (show: boolean) => dispatch(setEditItemFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DraftQuote)
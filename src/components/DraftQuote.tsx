import React from "react";
import DraftQuoteActions from "./DraftQuoteActions";
import './QuoteCard.css';
import {setEditItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

const DraftQuote = (props: any) => {
    const showItemFormEdit = props.itemFormEditActive.editing && props.itemFormEditActive.itemId == props.item.id

    return (
        <div className="quote-card">
            { showItemFormEdit ?
                <div>
                    edit form here
                    {/*//reuse itemForm but pass the quote stuff to fill it out to start.*/}
                </div>
                :
                <div>
                    <p style={{textAlign: "left"}}>Message: {props.item.Message}</p>
                    <p style={{textAlign: "left"}}>Price: {props.item.Price}</p>
                    <DraftQuoteActions itemId={props.item.id} />
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
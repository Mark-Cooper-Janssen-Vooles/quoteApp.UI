import React from "react";
import {getQuotesRequest} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

const DraftQuoteActions = () => {
    const activateEditItemForm = () => {
        // need a new state here "itemFormEditActive" => switch it to true
    }

    return (
        <div data-testid="quote-actions">
            <button onClick={activateEditItemForm}>edit item</button>
            <button>delete item</button>
            <button>finalise and send</button>
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
        getQuotesRequest: () => dispatch(getQuotesRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DraftQuoteActions)
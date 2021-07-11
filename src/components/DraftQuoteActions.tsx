import React, {useState} from "react";
import {
    deleteItem,
    setEditItemFormActive
} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

const DraftQuoteActions = (props: any) => {
    const [errorMessage, setErrorMessage] = useState({ active: false, message: ''});

    const activateEditItemForm = () => {
        if (props.itemFormEditActive.editing == true ) {
            setErrorMessage({ active: true, message: 'There is another item already being edited'}) //how to turn this off?
        } else {
            props.setEditItemFormActive({
                editing: true,
                itemId: props.itemId
            })
        }
    }

    const deleteItem = () => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            props.deleteItem(props.itemId)
        }
    }

    return (
        <div data-testid="quote-actions">
            <button onClick={activateEditItemForm}>edit item</button>
            <button onClick={deleteItem}>delete item</button>
            <button>finalise and send</button>
            { (errorMessage.active && props.itemFormEditActive.editing == true) ? errorMessage.message : '' }
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
        setEditItemFormActive: (show: boolean) => dispatch(setEditItemFormActive(show)),
        deleteItem: (itemId: string) => dispatch(deleteItem(itemId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DraftQuoteActions)
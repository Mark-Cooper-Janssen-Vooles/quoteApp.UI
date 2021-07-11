import React from 'react'
import './QuoteCard.css'
import {
    createNewDraftItem,
    getQuotesRequest,
    setEditItemFormActive,
    setItemFormActive,
    updateDraftItem,
} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

export const Mode = {
    'EDIT_ITEM': 'EDIT_ITEM',
    'NEW_ITEM': 'NEW_ITEM'
}

type Inputs = {
    message: string,
    amount: string
};

interface IItemForm {
    mode: string,
    quote: { id: string, Message: string, Price: string },
    setItemFormActive: (bool: boolean) => void,
    getQuotesRequest: () => void,
    createNewDraftItem: (draftItem: {}) => void,
    setEditItemFormActive: (bool: boolean) => void,
    updateDraftItem: (draftItem: {}) => void
}

const ItemForm: React.FC<IItemForm> = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const draftItem = {
            ...data,
            quoteId: props.quote.id
        }
        removeItemForm(); // close itemForm
        saveDraftItem(draftItem); // save w/ redux saga call
        props.getQuotesRequest(); //re-fetch quotes
    };

    const removeItemForm = () => {
        if (props.mode === Mode.NEW_ITEM) {
            props.setItemFormActive(false);
        }

        if (props.mode === Mode.EDIT_ITEM) {
            props.setEditItemFormActive(false);
        }
    }

    const saveDraftItem = (draftItem: any) => {
        if (props.mode === Mode.NEW_ITEM) {
            props.createNewDraftItem(draftItem)
        }

        if (props.mode === Mode.EDIT_ITEM) {
            console.log('editing item')
            props.updateDraftItem(draftItem)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="quote-card">
            <h4>{ props.mode === Mode.NEW_ITEM ? "Add a new draft item:" : "Edit draft item:" }</h4>

            <p style={{textAlign: "left"}}>message: {" "}
                <input {...register("message", { required: true})} defaultValue={props.quote.Message} />
            </p>
            <p style={{textAlign: "left"}}>amount: {" "}
                <input {...register("amount", { required: true })} defaultValue={props.quote.Price} />
            </p>

            {(errors.message || errors.amount) && <p>This field is required</p>}

            <input type="submit" value="Save draft item" />
            { props.mode === Mode.NEW_ITEM ?
                <button onClick={removeItemForm}>Cancel new draft item</button>
                :
                <button onClick={removeItemForm}>Cancel editing draft item</button>
            }
        </div>
        </form>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show)),
        getQuotesRequest: () => dispatch(getQuotesRequest()),
        createNewDraftItem: (draftItem: any) => dispatch(createNewDraftItem(draftItem)),
        setEditItemFormActive: (show: boolean) => dispatch(setEditItemFormActive(show)),
        updateDraftItem: (draftItem: any) => dispatch(updateDraftItem(draftItem))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
import React from 'react'
import './QuoteCard.css'
import {createNewDraftItem, getQuotesRequest, setItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    message: string,
    amount: string
};

interface IItemForm {
    quote: { id: string },
    setItemFormActive: (bool: boolean) => void,
    getQuotesRequest: () => void,
    createNewDraftItem: (draftItem: {}) => void
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
        props.setItemFormActive(false);
    }

    const saveDraftItem = (draftItem: any) => {
        props.createNewDraftItem(draftItem)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
        <div className="quote-card">
            <h4>Add a new draft item:</h4>
            <p style={{textAlign: "left"}}>message: {" "}
                <input {...register("message", { required: true})} />
            </p>
            <p style={{textAlign: "left"}}>amount: {" "}
                <input {...register("amount", { required: true })} />
            </p>

            {(errors.message || errors.amount) && <p>This field is required</p>}

            <input type="submit" value="Save draft item" />
            <button onClick={removeItemForm}>Cancel new draft item</button>
        </div>
        </form>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show)),
        getQuotesRequest: () => dispatch(getQuotesRequest()),
        createNewDraftItem: (draftItem: any) => dispatch(createNewDraftItem(draftItem))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
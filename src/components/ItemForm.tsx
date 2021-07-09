import React from 'react'
import './QuoteCard.css'
import {setItemFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    to: string,
    amount: string,
    contact: string
};

interface IItemForm {
    setItemFormActive: (bool: boolean) => void
}
const ItemForm: React.FC<IItemForm> = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        removeItemForm();
        // save quote as a draft quote => redux saga call
        // re-fetch getQuotes => redux saga call
    };

    const removeItemForm = () => {
        props.setItemFormActive(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="quote-card">
            <h4>Add a new draft item:</h4>
            <p style={{textAlign: "left"}}>to: {" "}
                <input {...register("to", { required: true})} />
            </p>
            <p style={{textAlign: "left"}}>amount: {" "}
                <input {...register("amount", { required: true })} />
            </p>

            <p style={{textAlign: "left"}}>email: {" "}
                <input {...register("contact", { required: true })} />
            </p>

            {(errors.to || errors.amount || errors.contact) && <p>This field is required</p>}

            <input type="submit" value="Save draft item" />
            <button onClick={removeItemForm}>Cancel new draft item</button>
        </div>
        </form>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemForm)
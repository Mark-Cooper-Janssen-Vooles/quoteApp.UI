import React from 'react'
import './QuoteCard.css'
import {setQuoteFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    to: string,
    amount: string,
    contact: string
};

interface IQuoteForm {
    setQuoteFormActive: (bool: boolean) => void
}
const QuoteForm: React.FC<IQuoteForm> = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
        removeQuoteForm();
        // save quote as a draft quote => redux saga call
        // re-fetch getQuotes => redux saga call
    };

    const removeQuoteForm = () => {
        props.setQuoteFormActive(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="quote-card">
            <h4>Add a new quote:</h4>
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

            <input type="submit" value="Save draft quote" />
            <button onClick={removeQuoteForm}>Cancel new quote</button>
        </div>
        </form>);

        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     {/* register your input into the hook by invoking the "register" function */}
        //     <input defaultValue="test" {...register("example")} />
        //
        //     {/* include validation with required or other standard HTML validation rules */}
        //     <input {...register("exampleRequired", { required: true })} />
        //     {/* errors will return when field validation fails  */}
        //     {errors.exampleRequired && <span>This field is required</span>}
        //
        //     <input type="submit" />
        // </form>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setQuoteFormActive: (show: boolean) => dispatch(setQuoteFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm)
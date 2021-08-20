import React from 'react'
import './QuoteCard.css'
import {
    createNewQuote, createNewQuoteUpdateDom,
    getQuotesRequest,
    setQuoteFormActive
} from "../redux/actions/quoteActions";
import {connect} from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string,
    email: string
};

interface IQuoteForm {
    setQuoteFormActive: (bool: boolean) => void,
    getQuotesRequest: () => void,
    createNewQuote: (quote: {}) => void,
    createNewQuoteUpdateDom: (quote: {}) => void
}

const QuoteForm: React.FC<IQuoteForm> = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const quote = {
            ...data
        }
        removeQuoteForm();
        saveQuote(quote);
        setTimeout(() => {
            props.getQuotesRequest(); // hacky way to reload the dom
        }, 1000)
        // props.createNewQuoteUpdateDom(quote); => ths doesn't work. don't wanna sink too much time into it
    };

    const removeQuoteForm = () => {
        props.setQuoteFormActive(false)
    }

    const saveQuote = (quote: any) => {
        props.createNewQuote(quote)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className="quote-card">
                <h4>Add a new quote:</h4>

                <p style={{textAlign: "left"}}>name: {" "}
                    <input {...register("name", { required: true})} />
                </p>
                <p style={{textAlign: "left"}}>email: {" "}
                    <input {...register("email", { required: true })} />
                </p>

                {(errors.name || errors.email) && <p>This field is required</p>}

                <input type="submit" value="Save new quote to begin adding items" />
                <button onClick={removeQuoteForm}>Cancel new quote</button>
            </div>
        </form>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setQuoteFormActive: (show: boolean) => dispatch(setQuoteFormActive(show)),
        getQuotesRequest: () => dispatch(getQuotesRequest()),
        createNewQuote: (quote: {}) => dispatch(createNewQuote(quote)),
        createNewQuoteUpdateDom: (quote: {}) => dispatch(createNewQuoteUpdateDom(quote)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm)
import React from 'react'
import './QuoteCard.css'
import {setQuoteFormActive} from "../redux/actions/quoteActions";
import {connect} from "react-redux";

interface IQuoteForm {
    setQuoteFormActive: (bool: boolean) => void
}
const QuoteForm: React.FC<IQuoteForm> = (props) => {
    const removeQuoteForm = () => {
        props.setQuoteFormActive(false);
    }
    return (
        <div className="quote-card">
            <h4>Add a new quote:</h4>
            <p style={{textAlign: "left"}}>to: </p>
            <p style={{textAlign: "left"}}>amount: </p>
            <p style={{textAlign: "left"}}>contact: </p>
            <button>Save draft quote</button>
            <button onClick={removeQuoteForm}>Cancel new quote</button>
        </div>);
};

const mapStateToProps = (state: any) => ({})
const mapDispatchToProps = (dispatch: any) => {
    return {
        setQuoteFormActive: (show: boolean) => dispatch(setQuoteFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuoteForm)
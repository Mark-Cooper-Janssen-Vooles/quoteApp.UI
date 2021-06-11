import React from 'react'
import './QuoteCard.css'

const QuoteForm = () => {
    return (
        <div className="quote-card">
            <h4>Add a new quote:</h4>
            <p style={{textAlign: "left"}}>to: </p>
            <p style={{textAlign: "left"}}>amount: </p>
            <p style={{textAlign: "left"}}>contact: </p>
            <button>Save draft quote</button>
            <button>Cancel new quote</button>
        </div>);
};

export default QuoteForm;
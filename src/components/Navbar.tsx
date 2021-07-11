import React from 'react'
import { connect } from 'react-redux'
import { setQuoteFormActive } from "../redux/actions/quoteActions";
import QuoteForm from "./QuoteForm";

interface INavbar {
    quoteFormActive: boolean,
    setQuoteFormActive: (bool: boolean) => void
}

const Navbar: React.FC<INavbar> = (props, ) => {
    const addQuote = () => {
        props.setQuoteFormActive(!props.quoteFormActive)
    }

    return (
        <div style={{marginTop: "20px"}}>
            { props.quoteFormActive ?
                <QuoteForm />
                :
                <button onClick={addQuote}>Add new Quote</button>
            }
        </div>);
};

const mapStateToProps = (state: any) => {
    return {
        quoteFormActive: state.quote.quoteFormActive
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setQuoteFormActive: (show: boolean) => dispatch(setQuoteFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
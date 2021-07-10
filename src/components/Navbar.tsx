import React from 'react'
import { connect } from 'react-redux'
import { setItemFormActive } from "../redux/actions/quoteActions";

interface INavbar {
    itemFormActive: boolean,
    setItemFormActive: (bool: boolean) => void
}

const Navbar: React.FC<INavbar> = (props, ) => {
    const addQuote = () => {
        //props.setItemFormActive(!props.itemFormActive)
        // this needs to setQuoteForm active (not item form)

        console.log('todo')
    }

    return (
        <div style={{marginTop: "20px"}}>
            <button onClick={addQuote}>Add new Quote</button>
        </div>);
};

const mapStateToProps = (state: any) => {
    return {
        itemFormActive: state.quote.itemFormActive
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        setItemFormActive: (show: boolean) => dispatch(setItemFormActive(show))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
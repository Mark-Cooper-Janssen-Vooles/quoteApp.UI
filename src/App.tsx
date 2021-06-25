import React, {useEffect} from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from "./components/Navbar";
import DraftQuotes from "./components/DraftQuotes";
import SentQuotes from "./components/SentQuotes";
import QuoteForm from "./components/QuoteForm";
import { connect } from "react-redux";
import {getQuotesRequest} from "./redux/actions/quoteActions";

interface IApp {
    quoteFormActive: boolean,
    getQuotesRequest: () => void,
    quotes: {
        Id: string,
        Items: {}[],
        DraftItems: {}[]
    }
}

const App: React.FC<IApp> = (props) => {
    useEffect(() => {
        props.getQuotesRequest()
    }, [])

    return (
    <div className="App">
      <Navbar />
      <Header />
        {props.quoteFormActive ?
            <QuoteForm />
            : <></>}
        {console.log(props.quotes)}
      <DraftQuotes draftquotes={props.quotes.DraftItems} />
      <SentQuotes />
    </div>
  )
}

const mapStateToProps = (state: any) => {
    return {
        quoteFormActive: state.quote.quoteFormActive,
        quotes: state.quote.quotes
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getQuotesRequest: () => dispatch(getQuotesRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
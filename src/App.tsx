import React from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from "./components/Navbar";
import DraftQuotes from "./components/DraftQuotes";
import SentQuotes from "./components/SentQuotes";
import QuoteForm from "./components/QuoteForm";
import { connect } from "react-redux";

interface IApp {
    quoteFormActive: boolean
}

const App: React.FC<IApp> = (props) => {
  return (
    <div className="App">
      <Navbar />
      <Header />
        {props.quoteFormActive ?
            <QuoteForm />
            : <></>}
      <DraftQuotes />
      <SentQuotes />
    </div>
  )
}

const mapStateToProps = (state: any) => {
    return {
        quoteFormActive: state.quote.quoteFormActive
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
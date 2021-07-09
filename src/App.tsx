import React, {useEffect} from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from "./components/Navbar";
import ItemForm from "./components/ItemForm";
import { connect } from "react-redux";
import {getQuotesRequest} from "./redux/actions/quoteActions";
import Quote from "./components/Quote"

interface IApp {
    itemFormActive: boolean,
    getQuotesRequest: () => void,
    quotes: {
        Id: string,
        Items: {
            Message: string,
            Price: string,
        }
        DraftItems: {
            Message: string,
            Price: string,
        },
    }[]
}

const App: React.FC<IApp> = (props) => {
    useEffect(() => {
        props.getQuotesRequest()
    }, [])

    return (
    <div className="App">
      <Navbar />
      <Header />
        {props.itemFormActive ?
            <ItemForm />
            : <></>}

      {props.quotes && props.quotes.map((quote: any) => {
          return <Quote quote={quote} key={quote.Id} />
      })}
    </div>
  )
}

const mapStateToProps = (state: any) => {
    return {
        itemFormActive: state.quote.itemFormActive,
        quotes: state.quote.quotes
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        getQuotesRequest: () => dispatch(getQuotesRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
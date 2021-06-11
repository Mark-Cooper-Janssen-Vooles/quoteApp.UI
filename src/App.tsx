import React from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from "./components/Navbar";
import DraftQuotes from "./components/DraftQuotes";
import SentQuotes from "./components/SentQuotes";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <DraftQuotes />
      <SentQuotes />
    </div>
  )
}

export default App
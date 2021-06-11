import React from 'react'
import Header from './components/Header'
import './App.css'
import Navbar from "./components/Navbar";
import DraftQuotes from "./components/DraftQuotes";

const App = () => {
  return (
    <div className="App">

      <Navbar />
      <Header />

      <DraftQuotes />

      <div>
        <h4>sent quotes</h4>
        <div>
          <p>existing quote 1</p>
        </div>
      </div>

    </div>
  )
}

export default App
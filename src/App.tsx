import React from 'react'
import Header from './components/Header'
import './App.css'

const App = () => {
  return (
    <div className="App">

      <div>
        <button>Add new Quote</button>
      </div>
      <Header />

      <div>
        <h4>draft quotes</h4>
        <div>
          <p>existing quote 1</p>
          <button>edit quote</button>
          <button>delete quote</button>
          <button>finalise and send</button>
        </div>
      </div>

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
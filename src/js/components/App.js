import React from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from 'actions'

let App = ({ quotation, fetchQuote }) => (
  <div>
    <h1>{quotation.toString()}</h1>
    <button onClick={fetchQuote}>Fetch Quote</button>
  </div>
)

App = connect(
  ({ quotation }) => ({ quotation }),
  { fetchQuote }
)(App)

export default App

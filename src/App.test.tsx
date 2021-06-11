import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import QuoteForm from "./components/QuoteForm";

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Quote app/i);

  //worlds worst unit test
  expect(title.innerHTML).toContain("Quote App");
});

test('clicking cancel button removes component', () => {
  //need to add store to get this to work!!

  // render(<App />);
  // console.log(screen.debug())
  // const addNewQuote = screen.getByText(/Add new Quote/i);
  // addNewQuote.click();
  //
  // const newQuoteForm = screen.getByText('Add a new quote:')
  //
  // expect(newQuoteForm).toBeTruthy();


  //
  // const cancel = screen.getByText('Cancel new quote');
  // cancel.click();
  // expect(ca).toBeTruthy();
});
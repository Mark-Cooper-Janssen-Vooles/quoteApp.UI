import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";

const storeFake = (state) => ({
  subscribe: () => { },
  dispatch: () => jest.fn(),
  getState: () => ({quote: {quoteFormActive: false, ...state }}),
});

test('renders learn react link', () => {
    const quoteFormActive = jest.fn()
  render(
      <Provider store={storeFake()}>
        <App quoteFormActive={true} />
      </Provider>
      );
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
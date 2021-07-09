import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";

const storeFake = (state) => ({
  subscribe: () => { },
  dispatch: () => jest.fn(),
  getState: () => ({quote: {itemFormActive: false, ...state }}),
});

test('renders learn react link', () => {
    const itemFormActive = jest.fn()
  render(
      <Provider store={storeFake()}>
        <App itemFormActive={true} />
      </Provider>
      );
  const title = screen.getByText(/Quote app/i);

  //worlds worst unit test
  expect(title.innerHTML).toContain("Quote App");
});
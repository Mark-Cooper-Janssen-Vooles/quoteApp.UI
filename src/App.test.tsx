import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/Quote app/i);

  //worlds worst unit test
  expect(title.innerHTML).toContain("Quote App");
});

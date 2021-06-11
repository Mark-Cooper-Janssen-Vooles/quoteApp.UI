import {render, screen} from "@testing-library/react";
import React from "react";
import QuoteForm from './QuoteForm';

describe(QuoteForm, () => {
    test('renders component', () => {
        render(<QuoteForm />);
        expect(screen.getAllByRole('button')).toBeTruthy();
    });
})


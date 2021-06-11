import { render, screen } from "@testing-library/react";
import React from "react";
import DraftQuoteActions from './DraftQuoteActions';

describe(DraftQuoteActions, () => {
    test('renders component', () => {
        render(<DraftQuoteActions />);
        const component = screen.getByTestId('quote-actions');
        expect(component).toBeTruthy();
    });
});

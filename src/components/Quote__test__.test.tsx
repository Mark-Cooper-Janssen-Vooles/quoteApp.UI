import { render, screen } from "@testing-library/react";
import React from "react";
import Quote from './Quote';

describe(Quote, () => {
    test('renders component', () => {
        render(<Quote />);
        const component = screen.getByTestId('quote-info');
        expect(component).toBeTruthy();
    });
});

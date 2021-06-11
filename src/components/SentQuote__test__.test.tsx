import {render, screen} from "@testing-library/react";
import React from "react";
import SentQuote from "./SentQuotes";

describe(SentQuote, () => {
    test('renders component', () => {
        render(<SentQuote />);
        expect(screen.getAllByTestId('sent-quote')).toBeTruthy();
    });
})

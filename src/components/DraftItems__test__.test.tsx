import {render, screen} from "@testing-library/react";
import React from "react";
import DraftQuotes from './DraftQuotes';

describe(DraftQuotes, () => {
    test('renders component', () => {
        render(<DraftQuotes />);
        expect(screen.getByTestId('component-header')).toBeTruthy();
    });
})

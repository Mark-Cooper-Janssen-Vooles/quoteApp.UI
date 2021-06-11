import {render, screen} from "@testing-library/react";
import React from "react";
import Navbar from './Navbar';

describe(Navbar, () => {
    test('renders component', () => {
        render(<Navbar />);
        expect(screen.getByRole('button')).toHaveTextContent("Add new Quote");
    });
})


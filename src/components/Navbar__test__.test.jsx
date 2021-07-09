import {render, screen} from "@testing-library/react";
import React from "react";
import Navbar from './Navbar';
import {Provider} from "react-redux";

const storeFake = (state) => ({
    subscribe: () => { },
    dispatch: () => jest.fn(),
    getState: () => ({quote: {itemFormActive: false, ...state }}),
});

describe('Navbar', () => {
    test('renders component', () => {
        render(
            <Provider store={storeFake()}>
                <Navbar />
            </Provider>);
        expect(screen.getByRole('button')).toBeTruthy();
    });
})

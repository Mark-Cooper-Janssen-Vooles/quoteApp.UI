import {render, screen} from "@testing-library/react";
import React from "react";
import QuoteForm from './QuoteForm';
import { Provider } from 'react-redux';

const storeFake = (state) => ({
    subscribe: () => { },
    dispatch: () => jest.fn(),
    getState: () => ({ ...state }),
});

describe('QuoteForm', () => {
    test('renders component', () => {
        render(
            <Provider store={storeFake({})}>
                <QuoteForm />
            </Provider>);
        expect(screen.getAllByRole('button')).toBeTruthy();
    });
})


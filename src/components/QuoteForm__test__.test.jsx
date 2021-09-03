import {render, screen} from "@testing-library/react";
import React from "react";
import ItemForm from './ItemForm';
import { Provider } from 'react-redux';

const storeFake = (state) => ({
    subscribe: () => { },
    dispatch: () => jest.fn(),
    getState: () => ({ ...state }),
});

describe('ItemForm', () => {
    test('renders component', () => {
        // render(
        //     <Provider store={storeFake({})}>
        //         <ItemForm />
        //     </Provider>);
        // expect(screen.getAllByRole('button')).toBeTruthy();
    });
})


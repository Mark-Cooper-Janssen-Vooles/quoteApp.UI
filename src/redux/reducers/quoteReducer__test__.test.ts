import quoteReducer, {IQuoteState} from './quoteReducer'
import {setItemFormActive, Types} from '../actions/quoteActions'

describe('quoteReducer', () => {
    const initialState: IQuoteState = {
        quotes: [],
        error: '',
        individualQuote: {},
        itemFormActive: false
    }

    test('Invalid action called returns initial state', () => {
        const newState = quoteReducer(initialState, {type: "Invalid", payload: "Invaid"})
        expect(newState).toStrictEqual(initialState)
    })

    test('SHOW_QUOTE_FORM updates state correctly', () => {
        //arrange
        const expectedState = {
            ...initialState,
            itemFormActive: true
        }
        //act
        const newState = quoteReducer(initialState, setItemFormActive(true))
        //assert
        expect(newState).toStrictEqual(expectedState)
    })

    // test('GET_QUOTES_SUCCESS updates state correctly', () => {
    //     //arrange
    //     const quotes = [{name: "mock name"}]
    //     const expectedState = {
    //         ...initialState,
    //         quotes: quotes
    //     }
    //     //act
    //     const newState = quoteReducer(initialState, getQuotesSuccess(quotes))
    //     //assert
    //     expect(newState).toStrictEqual(expectedState)
    // })
})
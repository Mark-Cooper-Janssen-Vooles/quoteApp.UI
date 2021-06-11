import quoteReducer, {IQuoteState} from './quoteReducer'
import {setQuoteFormActive, Types} from '../actions/quoteActions'

describe('quoteReducer', () => {
    const initialState: IQuoteState = {
        quotes: [],
        error: '',
        individualQuote: {},
        quoteFormActive: false
    }

    test('Invalid action called returns initial state', () => {
        const newState = quoteReducer(initialState, {type: "Invalid", payload: "Invaid"})
        expect(newState).toStrictEqual(initialState)
    })

    test('SHOW_QUOTE_FORM updates state correctly', () => {
        //arrange
        const expectedState = {
            ...initialState,
            quoteFormActive: true
        }
        //act
        const newState = quoteReducer(initialState, setQuoteFormActive(true))
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
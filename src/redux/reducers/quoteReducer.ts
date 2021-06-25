import { Types } from '../actions/quoteActions'

export interface IQuoteState {
    quotes: {}[],
    error: string,
    individualQuote: {},
    quoteFormActive: boolean
}

const initialState: IQuoteState = {
    quotes: [],
    error: '',
    individualQuote: {},
    quoteFormActive: false
}

interface IActions {
    type: string,
    payload: [] | string | boolean
}

//reducer
const quoteReducer = (state = initialState, action: IActions) => {
    switch(action.type) {
        case Types.SHOW_QUOTE_FORM:
            return {
                ...state,
                quoteFormActive: action.payload
            }
        // case Types.SET_QUOTE_FORM_BLANK:
        //     return {
        //         ...state,
        //         individualQuote: {
        //             id: '',
        //             message: '',
        //             createdAt: '',
        //             author: '',
        //             lastEdited: ''
        //         }
        //     }
        // case Types.GET_QUOTES_SUCCESS:
        //     console.log('got quotes')
        //     return {
        //         ...state,
        //         quotes: action.payload
        //     }
        // case Types.SHOW_QUOTE_FORM:
        //     return {
        //         ...state,
        //         quoteFormActive: action.payload
        //     }
        // case Types.QUOTES_ERROR:
        //     return {
        //         ...state,
        //         error: action.payload
        //     }
        default:
            return state
    }
}

export default quoteReducer;
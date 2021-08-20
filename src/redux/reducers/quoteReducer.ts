import { Types } from '../actions/quoteActions'

export interface IQuoteState {
    quotes: {}[],
    error: string,
    itemFormActive: boolean,
    itemFormEditActive: {},
    quoteFormActive: boolean
}

const initialState: IQuoteState = {
    quotes: [],
    error: '',
    itemFormActive: false,
    itemFormEditActive: { editing: false, itemId: ''},
    quoteFormActive: false
}

interface IActions {
    type: string,
    payload: [] | string | boolean
}

//reducer
const quoteReducer = (state = initialState, action: IActions) => {
    switch(action.type) {
        case Types.CREATE_NEW_QUOTE_DOM:
            // need to be passing the quoteId in the payload here!
            // find the currentQuote, iterate through existing quotesState, add the new draftItem to that array, update the state
            //const currentQuote =
            console.log(action.payload);
            console.log(...state.quotes);
            const newQuote = { contact: action.payload, id: '', items: [], draftItems: [] }
            return {
                ...state,
                quotes: [...state.quotes, newQuote]
            }
        case Types.SHOW_ITEM_FORM:
            return {
                ...state,
                itemFormActive: action.payload
            }
        case Types.SHOW_EDIT_ITEM_FORM:
            return {
                ...state,
                itemFormEditActive: action.payload
            }
        case Types.GET_QUOTES_SUCCESS:
            console.log('quote reducer:');
            console.log({
                ...state,
                quotes: action.payload
            });
            return {
                ...state,
                quotes: action.payload
            }
        case Types.QUOTES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case Types.SHOW_QUOTE_FORM:
            return {
                ...state,
                quoteFormActive: action.payload
            }
        default:
            return state
    }
}

export default quoteReducer;
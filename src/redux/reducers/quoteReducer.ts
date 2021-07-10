import { Types } from '../actions/quoteActions'

export interface IQuoteState {
    quotes: {}[],
    error: string,
    itemFormActive: boolean,
    itemFormEditActive: {}
}

const initialState: IQuoteState = {
    quotes: [],
    error: '',
    itemFormActive: false,
    itemFormEditActive: { editing: false, itemId: ''},
}

interface IActions {
    type: string,
    payload: [] | string | boolean
}

//reducer
const quoteReducer = (state = initialState, action: IActions) => {
    switch(action.type) {
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
            return {
                ...state,
                quotes: action.payload
            }
        case Types.QUOTES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}

export default quoteReducer;
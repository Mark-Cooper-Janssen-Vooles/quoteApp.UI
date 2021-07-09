export const Types = {
    GET_QUOTES_REQUEST: 'GET_QUOTES_REQUEST',
    GET_QUOTES_SUCCESS: 'GET_QUOTES_SUCCESS',
    DELETE_QUOTE_REQUEST: 'DELETE_QUOTE_REQUEST',
    DELETE_QUOTE_SUCCESS: 'DELETE_QUOTE_SUCCESS',
    UPDATE_QUOTE_REQUEST: 'UPDATE_QUOTE_REQUEST',
    CREATE_QUOTE_REQUEST: 'CREATE_QUOTE_REQUEST',
    QUOTES_ERROR: 'QUOTES_ERROR',
    SHOW_QUOTE_FORM: 'SHOW_QUOTE_FORM',
    SET_QUOTE_FORM_BLANK: 'SET_QUOTE_FORM_BLANK'
}

export const setItemFormActive = (show: boolean) => ({type: Types.SHOW_QUOTE_FORM, payload: show})

// SAGAS:

//READ
export const getQuotesRequest = () => ({type: Types.GET_QUOTES_REQUEST})
export const getQuotesSuccess = (quotes: {}[]) => ({type: Types.GET_QUOTES_SUCCESS, payload: quotes})

export const quotesError = (error: string) => ({type: Types.QUOTES_ERROR, payload: error})
export const Types = {
    GET_QUOTES_REQUEST: 'GET_QUOTES_REQUEST',
    GET_QUOTES_SUCCESS: 'GET_QUOTES_SUCCESS',
    DELETE_QUOTE_REQUEST: 'DELETE_QUOTE_REQUEST',
    DELETE_QUOTE_SUCCESS: 'DELETE_QUOTE_SUCCESS',
    UPDATE_QUOTE_REQUEST: 'UPDATE_QUOTE_REQUEST',
    CREATE_QUOTE_REQUEST: 'CREATE_QUOTE_REQUEST',
    QUOTES_ERROR: 'QUOTES_ERROR',
    SHOW_ITEM_FORM: 'SHOW_ITEM_FORM',
    SHOW_EDIT_ITEM_FORM: 'SHOW_EDIT_ITEM_FORM',
    SET_QUOTE_FORM_BLANK: 'SET_QUOTE_FORM_BLANK',
    CREATE_NEW_DRAFT_ITEM: 'CREATE_NEW_DRAFT_ITEM',
    UPDATE_DRAFT_ITEM: 'UPDATE_DRAFT_ITEM',
    SHOW_QUOTE_FORM: 'SHOW_QUOTE_FORM',
    CREATE_NEW_QUOTE: 'CREATE_NEW_QUOTE'
}

// REDUX ONLY:
export const setItemFormActive = (show: boolean) => ({type: Types.SHOW_ITEM_FORM, payload: show})
export const setEditItemFormActive = (editItem: {}) => ({type: Types.SHOW_EDIT_ITEM_FORM, payload: editItem})
export const setQuoteFormActive = (show: boolean) => ({type: Types.SHOW_QUOTE_FORM, payload: show})

// SAGAS:

// READ
export const getQuotesRequest = () => ({type: Types.GET_QUOTES_REQUEST})
export const getQuotesSuccess = (quotes: {}[]) => ({type: Types.GET_QUOTES_SUCCESS, payload: quotes})

// CREATE
export const createNewDraftItem = (draftItem: {}) => {
    return {type: Types.CREATE_NEW_DRAFT_ITEM, payload: draftItem}
}
export const createNewQuote = (quote: {}) => {
    return {type: Types.CREATE_NEW_QUOTE, payload: quote}
}

// UPDATE
export const updateDraftItem = (draftItem: {}) => {
    console.log('updating')
    return {type: Types.UPDATE_DRAFT_ITEM, payload: draftItem}
}

export const quotesError = (error: string) => ({type: Types.QUOTES_ERROR, payload: error})
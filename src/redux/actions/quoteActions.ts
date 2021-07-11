export const Types = {
    GET_QUOTES_REQUEST: 'GET_QUOTES_REQUEST',
    GET_QUOTES_SUCCESS: 'GET_QUOTES_SUCCESS',
    QUOTES_ERROR: 'QUOTES_ERROR',
    SHOW_ITEM_FORM: 'SHOW_ITEM_FORM',
    SHOW_EDIT_ITEM_FORM: 'SHOW_EDIT_ITEM_FORM',
    CREATE_NEW_DRAFT_ITEM: 'CREATE_NEW_DRAFT_ITEM',
    UPDATE_DRAFT_ITEM: 'UPDATE_DRAFT_ITEM',
    SHOW_QUOTE_FORM: 'SHOW_QUOTE_FORM',
    CREATE_NEW_QUOTE: 'CREATE_NEW_QUOTE',
    DELETE_QUOTE: 'DELETE_QUOTE',
    DELETE_ITEM: 'DELETE_ITEM'
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

// DELETE
export const deleteQuote = (quoteId: {}) => {
    return {type: Types.DELETE_QUOTE, payload: quoteId}
}
export const deleteItem = (itemId: {}) => {
    return {type: Types.DELETE_ITEM, payload: itemId}
}

export const quotesError = (error: string) => ({type: Types.QUOTES_ERROR, payload: error})
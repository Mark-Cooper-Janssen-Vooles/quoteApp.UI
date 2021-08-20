import axios from 'axios'

// when using json-server:
//const baseUrl = 'http://localhost:3001/quotes'

// when using .net core app:
const baseUrl = 'https://localhost:5001/api/quote/quotes'


export const getQuotes = () => {
    // GET: /api/quote/quotes

    return axios.get(`${baseUrl}`)
}

export const createNewQuote = (quote) => {
    // POST: /api/quote/quotes

    console.log(quote);
    const quoteToCreate = {
        "name": quote.name,
        "email": quote.email
    }
    return axios.post(`${baseUrl}`, {
        ...quoteToCreate
    });
}

export const createNewDraftItem = (draftItem) => {
    // POST: /api/quote/{quoteId}/newDraftItem
    const quoteId = draftItem.quoteId;

    const draftItemToCreate = {
        "message": draftItem.message,
        "price": draftItem.amount
    }
    // the below needs to be the quoteId, not the draft item id!
    return axios.post(`${baseUrl}/${quoteId}/draft-item`, { // use post to create!
        ...draftItemToCreate
    });
}

export const updateDraftItem = (draftItem) => {
    // PUT: api/quote/quotes/{id}/draft-item/
    const quoteId = draftItem.quoteId;
    const itemId = draftItem.itemId;

    console.log(draftItem);
    const draftItemToUpdate = {
        "price": draftItem.amount,
        "message": draftItem.message,
        "id": draftItem.id
    }
    return axios.put(`${baseUrl}/${quoteId}/draft-item/`, { // use put to update!
        ...draftItemToUpdate
    });
}

export const finaliseAndSendItem = (itemId) => {
    // /api/quote/{quoteId}/finaliseAndSendItem/{draftItemId}

    //console.log(itemId);
    return axios.put(`${baseUrl}/jkhhkjkjh`);
    //return axios.put(`${baseUrl}/${quoteId}/draft-item/${itemId}/finalise/`);
}

export const deleteQuote = (quoteId) => {
    // /api/quote/{quoteId}/delete

    console.log(quoteId);
    return axios.delete(`${baseUrl}/${quoteId}jiou9`); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}

export const deleteItem = (itemId) => {
    // /api/quote/{quoteId}/{draftItemId}/delete
    console.log(itemId);
    return axios.delete(`${baseUrl}/${itemId}jiou9`); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}


import axios from 'axios'
//import { IQuote } from '../interfaces/quotes';

// when using json-server:
//const baseUrl = 'http://localhost:3001/quotes'

// when using .net core app:
const baseUrl = 'https://localhost:5001/api/quote/quotes'

// when using .NET Core api:
//const baseUrl = 'https://localhost:5001/api/QuoteItems'


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
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}

export const createNewDraftItem = (draftItem) => {
    // POST: /api/quote/{quoteId}/newDraftItem
    const quoteId = draftItem.quoteId;

    const draftItemToCreate = {
        "price": draftItem.amount,
        "message": draftItem.message
    }
    // the below needs to be the quoteId, not the draft item id!
    return axios.post(`${baseUrl}/${quoteId}/draft-item`, { // use post to create!
        ...draftItemToCreate
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}

export const updateDraftItem = (draftItem) => {
    // PUT: api/quote/quotes/{id}/draft-item/{itemId}
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
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}

export const finaliseAndSendItem = (itemId) => {
    // /api/quote/{quoteId}/finaliseAndSendItem/{draftItemId}

    console.log(itemId);
    return axios.put(`${baseUrl}/${itemId}089lkjjl`); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
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


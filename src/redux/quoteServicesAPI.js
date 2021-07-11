import axios from 'axios'
//import { IQuote } from '../interfaces/quotes';

// when using json-server:
const baseUrl = 'http://localhost:3000/quotes'

// when using .NET Core api:
//const baseUrl = 'https://localhost:5001/api/QuoteItems'

export const getQuotes = () => {
    return axios.get(baseUrl) // use get to read!
}

export const createNewDraftItem = (draftItem) => {
    // put API post request here for adding new draft item
    console.log(draftItem);
    const draftItemToCreate = {
        "amount": draftItem.amount,
        "message": draftItem.message
    }
    return axios.post(`${baseUrl}/${draftItem.quoteId}`, { // use post to create!
        ...draftItemToCreate
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}
export const createNewQuote = (quote) => {
    // put API post request here for adding new draft item
    console.log(quote);
    const quoteToCreate = {
        "name": quote.name,
        "email": quote.email
    }
    return axios.post(`${baseUrl}/${quote}`, { // use post to create!
        ...quoteToCreate
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}

export const updateDraftItem = (draftItem) => {
    // put API post request here for adding new draft item
    console.log(draftItem);
    const draftItemToUpdate = {
        "amount": draftItem.amount,
        "message": draftItem.message,
        "id": draftItem.id
    }
    return axios.put(`${baseUrl}/${draftItem.quoteId}`, { // use put to update!
        ...draftItemToUpdate
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}


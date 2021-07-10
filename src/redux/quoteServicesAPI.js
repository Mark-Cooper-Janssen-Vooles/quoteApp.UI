import axios from 'axios'
//import { IQuote } from '../interfaces/quotes';

// when using json-server:
const baseUrl = 'http://localhost:3000/quotes'

// when using .NET Core api:
//const baseUrl = 'https://localhost:5001/api/QuoteItems'

export const getQuotes = () => {
    return axios.get(baseUrl)
}

export const createNewDraftItem = (draftItem) => {
    // put API post request here for adding new draft item
    console.log(draftItem);
    const draftItemToCreate = {
        "amount": draftItem.amount,
        "message": draftItem.message
    }
    return axios.post(`${baseUrl}/${draftItem.quoteId}`, {
        ...draftItemToCreate
    }); // this doesn't seem to work with json server, whatever for now! fix it when you get c# to run, call endpoint
}


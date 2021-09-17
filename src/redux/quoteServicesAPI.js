import axios from 'axios'

// when using json-server:
//const baseUrl = 'http://localhost:3001/quotes'

// when using .net core app:
//const baseUrl = 'https://localhost:5001/api/quote/quotes'

// prod:
const baseUrl = 'http://quoteappbackend-env.eba-pepwptrw.ap-southeast-2.elasticbeanstalk.com/api/quote/quotes'

export const getQuotes = () => {
    return axios.get(`${baseUrl}`)
}

export const createNewQuote = (quote) => {
    const quoteToCreate = {
        "name": quote.name,
        "email": quote.email
    }
    return axios.post(`${baseUrl}`, {
        ...quoteToCreate
    });
}

export const createNewDraftItem = (draftItem) => {
    const quoteId = draftItem.quoteId;

    const draftItemToCreate = {
        "message": draftItem.message,
        "price": draftItem.amount
    }

    return axios.post(`${baseUrl}/${quoteId}/draft-item`, { // use post to create!
        ...draftItemToCreate
    });
}

export const updateDraftItem = (draftItem) => {
    const quoteId = draftItem.quoteId;
    const itemId = draftItem.itemId;

    const draftItemToUpdate = {
        "price": draftItem.amount,
        "message": draftItem.message,
        "id": draftItem.id
    }
    return axios.put(`${baseUrl}/${quoteId}/draft-item/`, { // use put to update!
        ...draftItemToUpdate
    });
}

export const finaliseAndSendItem = ({quoteId, itemId}) => {
    return axios.put(`${baseUrl}/${quoteId}/draft-item/${itemId}/finalise/`);
}

export const deleteQuote = (quoteId) => {
    return axios.delete(`${baseUrl}/${quoteId}/`);
}

export const deleteItem = ({quoteId, itemId}) => {
    return axios.delete(`${baseUrl}/${quoteId}/draft-item/${itemId}/`);
}


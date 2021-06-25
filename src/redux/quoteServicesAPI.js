import axios from 'axios'
//import { IQuote } from '../interfaces/quotes';

// when using json-server:
const baseUrl = 'http://localhost:3000/quotes'

// when using .NET Core api:
//const baseUrl = 'https://localhost:5001/api/QuoteItems'

export const getQuotes = () => {
    return axios.get(baseUrl)
}
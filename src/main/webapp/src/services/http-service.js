/**
 * @author Amila Karunathilaka
 */ import axios from "axios";


// https://a65e256fd4f07a.lhr.life

const httpInstance = axios.create({
    baseURL: '/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const http = httpInstance;
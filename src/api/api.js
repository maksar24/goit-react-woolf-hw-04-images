import axios from 'axios';

export const API_KEY = '22033849-04a58a8d7b6d53f5d68e2165a';
export const PER_PAGE = 12;

export const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
});

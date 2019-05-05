import { ABOUTME } from '../data/content/aboutme';
import { ADVENTURES } from '../data/content/adventures';
import { HOME } from '../data/content/home';

export const initialState = {
    aboutme: ABOUTME,
    adventures: ADVENTURES,
    home: HOME,
};

export const Reducer = (state = initialState, action) => {
    return state;
};

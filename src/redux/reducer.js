import { ABOUTME } from '../data/content/aboutme';
import { CERTIFICATES } from '../data/content/certificates';
import { HOME } from '../data/content/home';

export const initialState = {
    aboutme: ABOUTME,
    certificates: CERTIFICATES,
    home: HOME,
};

export const Reducer = (state = initialState, action) => {
    return state;
};

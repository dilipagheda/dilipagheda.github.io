import { ABOUTME } from '../data/content/aboutme';
import { ADVENTURES } from '../data/content/adventures';
import { HOME } from '../data/content/home';
import {PORTFOLIO} from "../data/content/portfolio";
import {RESUME} from "../data/content/resume/resume";

export const initialState = {
    aboutme: ABOUTME,
    adventures: ADVENTURES,
    home: HOME,
    portfolio: PORTFOLIO,
    resume:RESUME
};

export const Reducer = (state = initialState, action) => {
    return state;
};

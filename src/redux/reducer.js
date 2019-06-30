import { ABOUTME } from '../data/content/aboutme';
import { HOME } from '../data/content/home';
import {PORTFOLIO} from "../data/content/portfolio";
import {RESUME} from "../data/content/resume/resume";
import {EXPERIENCE} from '../data/content/experience';
import {CERTIFICATES} from "../data/content/education/certificates";
import {EDUCATION} from "../data/content/education/education";
import {BOOTCAMPS} from "../data/content/education/bootcamps";

export const initialState = {
    aboutme: ABOUTME,
    home: HOME,
    portfolio: PORTFOLIO,
    resume:RESUME,
    experience:EXPERIENCE,
    certificates:CERTIFICATES,
    education:EDUCATION,
    bootcamps: BOOTCAMPS
};

export const Reducer = (state = initialState, action) => {
    return state;
};

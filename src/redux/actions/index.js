import axios from 'axios';

export const GET_DATA = 'GET_DATA';
export const GET_DATA_BY_NAME = 'GET_DATA_BY_NAME';
export const GET_DATA_BY_ID = 'GET_DATA_BY_ID';
export const GET_TYPES = 'GET_TYPES';
export const GET_NAMES = 'GET_NAMES';
export const ALPHABETICAL_ORDER = 'ALPHABETICAL_ORDER';
export const ATTACK_ORDER = 'ATTACK_ORDER';
export const ORIGIN_FILTER = 'ORIGIN_FILTER';
export const TYPES_FILTER = 'TYPES_FILTER'
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const LOADING = 'LOADING';
export const ERROR = 'ERROR';

export const getData = () => async (dispatch) => {
    let json = await axios.get('/pokemon');
    return dispatch({ type: GET_DATA, payload: json.data });
};

export const getDataByName = (name) => async (dispatch) => {
    let json = await axios.get(`/pokemon/?name=${name}`);
    return dispatch({ type: GET_DATA_BY_NAME, payload: json.data });
};

export const getDataById = (id) => async (dispatch) => {
    let json = await axios.get(`/pokemon/${id}`);
    return dispatch({ type: GET_DATA_BY_ID, payload: json.data });
};

export const getTypes = () => async (dispatch) => {
    let json = await axios.get('/type');
    return dispatch({ type: GET_TYPES, payload: json.data });
};

export const getNames = () => async (dispatch) => {
    let json = await axios.get('/name');
    return dispatch({ type: GET_NAMES, payload: json.data });
};

export const create = (payload) => async (dispatch) => {
    let json = await axios.post('/pokemon', payload);
    return json;
};


export const alphabeticalOrder = (payload) => {
    return { type: ALPHABETICAL_ORDER, payload: payload };
};

export const attackOrder = (payload) => {
    return { type: ATTACK_ORDER, payload: payload };
};

export const originFilter = (payload) => {
    return { type: ORIGIN_FILTER, payload: payload };
};

export const typesFilter = (payload) => {
    return { type: TYPES_FILTER, payload: payload };
};

export const cleanDetail = () => {
    return { type: CLEAN_DETAIL };
};

export const loadingFn = () => {
    return { type: LOADING };
};

export const errorFn = () => {
    return { type: ERROR };
}
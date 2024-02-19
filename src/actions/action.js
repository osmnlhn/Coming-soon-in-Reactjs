import axios from 'axios';
import resetData from '../data/data'




export const GET_DATA = "GET_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const getData = () => dispatch => {



    dispatch({ type: GET_DATA })

        axios
        .get("")
        .then(res => {
            dispatch({ type: FETCH_SUCCESS, payload: res.data });
            console.log(res.data);
        })
        .catch(err =>
            dispatch({ type: FETCH_ERROR, payload: err }))
}
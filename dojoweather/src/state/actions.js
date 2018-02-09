import axios from 'axios';
import {LOAD_CITY} from './types';

export const getCityDetails = (cityName) => {

    return(dispatch, getState, url) => {
        const cityUrl = `${url}${cityName}&&appid=9104d23c4a09bca4b22c0445ffb95be3`
        axios.get(cityUrl)
            .then(({data}) => {
            console.log(data);
            //console.log("from getCityDetails");
            dispatch(updateCurrentCity({...data.main,...data.weather}))
            })
    }
}
const updateCurrentCity = payload => {
    //console.log("From actions");
    //console.log(payload);
    return{
        type: LOAD_CITY,
        payload
    }
}
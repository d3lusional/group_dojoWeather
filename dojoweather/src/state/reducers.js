import {LOAD_CITY} from './types';

const initialState = {
    
    currentCity: {

    },
    cities: [
        "Seattle",
        "San Jose",
        "Burbank",
        "Dallas",
        "Chicago"
    ],
}


const reducer = (state=initialState, action) => {
    switch(action.type){ 
        case LOAD_CITY:
            return {...state, currentCity: action.payload};
        default: 
            return state
    }
}


export default reducer;
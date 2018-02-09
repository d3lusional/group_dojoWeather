

const initialState = {
    
    currentCity: {

    },
    cities: [
        "Seattle,WA",
        "San Jose, CA",
        "Burbank, CA",
        "Dallas, TX",
        "Chicago, IL"
    ],
}

const reducer = (state=initialState, action) => {
    switch(action.type){ 
        default: 
            return state
    }
}


export default reducer;
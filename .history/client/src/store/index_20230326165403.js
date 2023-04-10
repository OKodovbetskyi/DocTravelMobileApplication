import {createSlice, configureStore} from '@reduxjs/toolkit'
import axios from 'axios';

const itinialState = {
    searchValue: "Lon",
    currentLocation: "",
    originLocationCode: "",
    destinationLocationCode: "",
    departure:null,
    destination:null,
    departureDate: "",
    returnDate: "", 
    tripOptions:{
      oneWay: true,
      return:  false
    },
    flighttickets: [],
    cityNames: []
  }
const initialAuth = {
    isLoggedIn: true
}
const flightQueSlice = createSlice({
    name: 'flightQueSlice',
    initialState: itinialState,
    reducers:{
        setDepartureLocation(state, actions){
            state.departure = actions.payload.departure.name;
            state.originLocationCode= actions.payload.originLocationCode;
        },
        setDestinationLocation(state, actions){
            state.destination = actions.payload.destination.name;
            state.destinationLocationCode = actions.payload.destinationLocationCode;
        },
        setFlightOptions(state, actions){
            if (actions.payload === 'oneWay'){
                state.tripOptions.oneWay = true;
                state.tripOptions.return = false;
              } else if (actions.payload === 'return'){
                    state.tripOptions.oneWay = false;
                    state.tripOptions.return = true;
              }
        },
        setSearchValue(state, actions){
                state.searchValue = actions.payload;
        },
        setFlightTickets(state, actions){
                state.flighttickets = actions.payload;
        },
        setFlightDepartureDate(state, actions){
                state.departureDate = actions.payload;
        },
        setFlightReturnDate(state, actions){
            state.returnDate = actions.payload;
        },
        setCityNames(state, actions){
            state.cityNames = actions.payload;
        }      
    }
})
const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialAuth,
    reducers:{}
})
const store = configureStore({
    reducer: {
        flightQueSlice: flightQueSlice.reducer,
        authSlice : authSlice.reducer,
}});

export const flightqueActions = flightQueSlice.actions;
export default store;


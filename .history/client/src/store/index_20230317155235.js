import {createSlice, configureStore} from '@reduxjs/toolkit'

const itinialState = {
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
    }
  }

const flightQueSlice = createSlice({
    name: 'flightQueSlice',
    initialState: itinialState,
    reducers:{
        setDepartureLocation(state, actions){
            state.departure = actions.payload.departure.name;
            state.originLocationCode= actions.payload.originLocationCode;
        }
      
    }
})

const store = configureStore({
    reducer: flightQueSlice.reducer
    
});

export const flightqueActions = flightQueSlice.actions;
export default store;


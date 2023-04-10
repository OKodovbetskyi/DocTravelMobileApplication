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
    itinialState: itinialState,
    reducers:{
        setDepartureLocation(state, actions){
            state.departure = actions.payload;
        }
      
    }
})

const store = configureStore({
    reducer: flightQueSlice.reducer
    
});

export const counterActions = flightQueSlice.actions;
export default store;


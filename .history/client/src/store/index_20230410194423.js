import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice, configureStore} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    searchValue: "",
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
    cityNames: [],
    savedTickets: [],
  }
const bookingInitial = {
    personalinfo:{
        fullname: "",
        dob: "",
        gender: {
            male: false,
            female: false,
        },
        email: "",
        phonenumber:"",
        passportnumber:"",
        passportexpirydate:"",
        countryissued:"",
    },
    ticket:[]
}
const initialAuth = {
    isLoggedIn: true
}
const flightQueSlice = createSlice({
    name: 'flightQueSlice',
    initialState: initialState,
    reducers:{
        setDepartureLocation(state, actions){
            if (actions.payload !== null){
                state.departure = actions.payload.departure.name;
                state.originLocationCode= actions.payload.originLocationCode;
            } else {
                state.departure = null
                state.originLocationCode= null
            }
        },
        setDestinationLocation(state, actions){
            if (actions.payload !== null){
            state.destination = actions.payload.destination.name;
            state.destinationLocationCode = actions.payload.destinationLocationCode;
        } else {
            state.destination = null
            state.destinationLocationCode = null
        }
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
const persistantStorageSlice = createSlice({
    name: 'persistantStorageSlice',
    initialState: initialState,
    reducers:{
        save(state, actions){
            if (actions.payload !== null){
                     state.savedTickets.push(actions.payload);
            }
            try{
                console.log('saving satate >>>',state);
                AsyncStorage.setItem('FlightTickets', JSON.stringify(state.savedTickets))
            }catch(err){
                console.log(err);
            }
        },
        load(state, actions){
            state.savedTickets.push(actions.payload);
        },
        remove(state, actions){
            if (state.savedTickets.length>0){
                const filtered = state.savedTickets.filter(ticket=>ticket.itineraries[0].segments[0].id !== actions.payload);
                state.savedTickets = filtered;
                console.log('state len after remove', state.savedTickets.length)
            }
        }
    }
})
const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialAuth,
    reducers:{

    }
})
const bookingUserInformationSlice = createSlice({
    name: 'bookingUserInformationSlice',
    initialState: bookingInitial,
    reducers:{
        setData(state, actions){
            state.personalinfo[actions.payload.name] = actions.payload.data;
        },
        clearData(state, actions){
            state.personalinfo = {
                fullname: "",
                dob: "",
                gender: {
                    male: false,
                    female: false,
                },
                email: "",
                phonenumber:"",
                passportnumber:"",
                passportexpirydate:"",
                countryissued:"",
            },
            state.ticket=[]
        }
        ,
        toggleGender(state, actions){
            if (actions.payload === "male"){
                state.personalinfo.gender.male = true
                state.personalinfo.gender.female = false
            } else {
                state.personalinfo.gender.male = false
                state.personalinfo.gender.female = true
            }
        },
        setTicket(state, actions){
            state.ticket.push(actions.payload);
        },
        setInitialState(state, actions){
            state.personalinfo=actions.payload;
        }
    }
})
const store = configureStore({
    reducer: {
        flightQueSlice: flightQueSlice.reducer,
        authSlice : authSlice.reducer,
        persistantStorageSlice: persistantStorageSlice.reducer,
        bookingUserInformationSlice: bookingUserInformationSlice.reducer,
}});

export const bookingUserInformationActions = bookingUserInformationSlice.actions;
export const flightqueActions = flightQueSlice.actions;
export const persistantStorageActions = persistantStorageSlice.actions;
export default store;


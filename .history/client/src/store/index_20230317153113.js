import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true};

const flightQueSlice = createSlice({
    name: 'flightQueSlice',
    initialState,
    reducers:{
      
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
    
});

export const counterActions = counterSlice.actions;
export default store;


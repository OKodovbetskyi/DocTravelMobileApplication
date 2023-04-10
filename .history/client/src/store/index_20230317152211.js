import {createSlice, configureStore} from '@reduxjs/toolkit'

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter += action.amount
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
    
});

export const counterActions = counterSlice.actions;
export default store;


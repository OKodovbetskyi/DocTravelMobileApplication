import {createSlice, configureStore} from '@reduxjs/toolkit'

const initState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initState,
    reducers:{
        increment(state){
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
    reducer: {
        counter: counterSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export default store;


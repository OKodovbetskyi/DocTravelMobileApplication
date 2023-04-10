import {createSlice} from '@reduxjs/toolkit'

const initState = {counter: 0, showCounter: true};

createSlice({
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


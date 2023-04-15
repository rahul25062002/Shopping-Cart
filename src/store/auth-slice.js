import {createSlice} from '@reduxjs/toolkit'


const createauth=createSlice({
    name:'auth', 
    initialState:{isloginin:false},
    reducers:{
        login(state){
          state.isloginin=true;
        },
        logout(state){
            state.isloginin=false;
        }
    }
})
export const authAction=createauth.actions;

export default createauth;
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    currentUser:any;
    error:any;
    loading:boolean;
}

const initialState: UserState = {
    currentUser:null,
    error:null,
    loading:false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   signInStart:(state:UserState)=>{
    state.loading=true;
   },
   signInSuccess:(state:UserState,action:PayloadAction<any>)=>{
    state.loading=false;
    state.currentUser=action.payload;
    state.error=null;
   },
   signInFailure:(state:UserState,action:PayloadAction<any>)=>{
    state.error=action.payload,
    state.loading=false;

   }
  },
})

// Action creators are generated for each case reducer function
export const {signInStart,signInSuccess, signInFailure } = userSlice.actions

export default userSlice.reducer
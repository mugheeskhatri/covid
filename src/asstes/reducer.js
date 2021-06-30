import { createSlice } from "@reduxjs/toolkit";
// let data = {
    
// }
const userSlice = createSlice({
    name:'mughees',
    initialState:{
        data:null
    },
    reducers: {
        setData: (state, action) => {
          state.data = action.payload;
        }
    }
})

export const {
    setData
} = userSlice.actions;

export const selectData = (state) => state.mughees.data;
export default userSlice.reducer;


// let reducer = (state = data)=>{
//     return state;
// }

// export default reducer;
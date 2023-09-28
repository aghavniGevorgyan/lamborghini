import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchInfo = createAsyncThunk(
  "info/fetchStatus",
  async (params, thunkApi) => {
    const { url } = params;
    const { data } = await axios.get(url);
  return thunkApi.fulfillWithValue(data)
  }
);

const initialState = {
  info: [],
  status:'loading'
};
const infoSlice = createSlice({
  name: "getInfo",
  initialState,
  reducers: {
    setInfo(state, action) {
      state.info = action.payload;
    },
  },
  extraReducers: (builder)=>{
    builder
    .addCase(fetchInfo.fulfilled, (state, action)=>{
      state.status = 'succes'
      state.info = action.payload 
  } )
  
  }
});
export const { setInfo } = infoSlice.actions;
export default infoSlice.reducer;

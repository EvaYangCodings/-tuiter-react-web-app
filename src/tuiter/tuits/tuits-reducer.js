import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { findTuitsThunk } from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: true
}
const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]:
           (state) => {
              state.loading = true
              state.tuits = []
        },
        [findTuitsThunk.fulfilled]:
           (state, { payload }) => {
              state.loading = false
              state.tuits = payload
        },
        [findTuitsThunk.rejected]:
           (state, action) => {
              state.loading = false
              state.error = action.error
        }
      },
     

    reducers: {
        deleteTuit(state, action) {
            const index = state.findIndex(
                tuit => tuit.id === action.payload);
            state.splice(index, 1);
        },

        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                // ...templateTuit,
                id:(new Date()).getTime(),
            })
        }
    }
});
export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;
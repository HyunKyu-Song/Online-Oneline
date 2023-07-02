import { configureStore, createSlice } from '@reduxjs/toolkit'

var data = localStorage.getItem('DATA');
data = JSON.parse(data);

var len = 0;
if(data != null){
   len = data.length;
}

let LocalStorageData = createSlice({
   name: 'LocalStorageData',
   initialState: [],
   reducers: {
      InsertData(state, action) {
         state.push(...action.payload)
      },
   }
})

let ListNum = createSlice({
   name: 'ListNum',
   initialState: len,
   reducers: {
      PlusNum(state) {
         return state + 1;
      },
      MinusNum(state) {
         return state - 1;
      }
   }
})

export default configureStore({
   reducer: {
      LocalStorageData: LocalStorageData.reducer,
      ListNum: ListNum.reducer,
   }
})

export let { InsertData } = LocalStorageData.actions;
export let { PlusNum, MinusNum } = ListNum.actions;
import { configureStore, createSlice } from '@reduxjs/toolkit'

var data = localStorage.getItem('DATA');
data = JSON.parse(data);

var len = 0;
if(data != null){  
   // 새로고침 시 data[i].num + 1을 해서 다음 번호 부여함
   len = data[data.length-1].num + 1;
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
      PlusNum(state, action) {
         if(len === 0){
            console.log('len = 0')
            return state + 1;
         }
         else{
            console.log('len != 0')
            return action.payload + 1;
         }
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
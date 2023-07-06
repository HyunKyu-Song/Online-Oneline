import { configureStore, createSlice } from '@reduxjs/toolkit'

var data = localStorage.getItem('DATA');
data = JSON.parse(data);

var len;

if(data != null){  
   len = data[data.length-1].num + 1; // 새로고침 시 data[i].num + 1을 해서 다음 번호 부여함
}
else len = 0;

let ListNum = createSlice({
   name: 'ListNum',
   initialState: len,
   reducers: {
      PlusNum(state, action) {
         if(len === 0){
            return state + 1;
         }
         else{
            return action.payload + 1;
         }
      }
   }
})

export default configureStore({
   reducer: {
      ListNum: ListNum.reducer,
   }
})

export let { PlusNum } = ListNum.actions;
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arr:[],
  val1:'',
  count1:300,
  val2:'',
  arr1:[],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
     change:(state,action) =>{
        state.val1=action.payload;
        state.count1=300-(action.payload).length;
    },
    save2:(state)=>{
      if(state.val1 !== ''){
        const d = new Date();
        let a={"text1":state.val1,"date":d.getDate(),"month":d.getMonth()+1,"year":d.getFullYear()};
        state.arr.push(a);
        state.val1 = '';
        state.count1=300;
        state.arr1=state.arr;
      }else{
        alert("Text box Cannot be empty before save");
      }
    },
    remove1:(state,action)=>{
        state.arr.splice((action.payload),1);
        state.arr1=state.arr;
    },
    change1:(state,action)=>{
        state.val2=action.payload;
        if (action.payload !== '') {
            let result = state.arr.filter(element => element.text1.includes(action.payload));
            state.arr1 = result;
    
          } else {
            state.arr1 = state.arr;
          }

    },
  },
})

export const {change,save2,remove1,change1 } = counterSlice.actions

export default counterSlice.reducer
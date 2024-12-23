import { createSlice } from "@reduxjs/toolkit";


const todoListSlice = createSlice({
    name:'todoList',
    initialState:[],
    reducers:{
        addTodo:(state,action)=>{state.push({id:Date.now(),task:action.payload})},
        updateTodo:(state,action)=>(state.map((task)=>task.id === action.payload.id ? action.payload : task)),
        deleteTodo:(state,action)=>(state.filter((task)=>task.id !== action.payload)),
        deleteALLTodo:()=>[]
    }
});

export default todoListSlice.reducer;
export const {addTodo,updateTodo,deleteTodo,deleteALLTodo} = todoListSlice.actions;



import { createSlice } from '@reduxjs/toolkit';

const initialState={
    articles:[],
    loadingNews: true
}

const newsSlice = createSlice({
    name:'news',
    initialState,
    reducers:{
        setLoadingNews:(state, {payload})=>{
            state.loadingNews = payload;
        },
        setNews:(state,{payload})=>{
            state.articles = payload;
        }
    }
})

export const {setLoadingNews, setNews} = newsSlice.actions;

export default newsSlice;
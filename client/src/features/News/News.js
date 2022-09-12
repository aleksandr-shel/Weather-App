import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, CircularProgress, List, ListItem } from '@mui/material';
import { getNews } from '../../store/actions/newsActions';
import Article from './Article';


export default function News(){

    const {loadingNews, articles} = useSelector(state=>state.newsReducer);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getNews());
    },[dispatch])
    
    if (loadingNews) return (
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center', height:'100vh' }}>
            <CircularProgress />
        </Box>
    )
    return(
        <List style={{height:'100vh', overflow:'auto'}}>
            <h5 style={{textAlign:'center'}}>Recent Tech News</h5>
            {articles.map((article, i)=>(
                <ListItem key={i}>
                    <Article article={article}/>
                </ListItem>
            ))}
        </List>
    )
}
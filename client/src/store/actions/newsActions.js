import agent from "../../api/agent";
import { setLoadingNews, setNews } from "../slices/newsSlice"



export function getNews(){
    return async (dispatch)=>{
        dispatch(setLoadingNews(true));
        const data = await agent.News.getNews();
        dispatch(setNews(data.articles))
        dispatch(setLoadingNews(false))
    }
}
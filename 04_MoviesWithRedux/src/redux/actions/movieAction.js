import { ALLMOVIES, MovieAPI } from "../types/moviesType";
import axios from "axios";

export const getAllMovies = () => {
    return async(dispatch)=>{
        const res = await axios.get(MovieAPI);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    }
};
export const getMoviesSearch = (word) => {
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b06edffab98014c6796084478f7e7920&language=ar&query=${word}`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    }
};
export const getPage = (currentPage) => {
    return async(dispatch)=>{
        const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=${currentPage}&sort_by=popularity.desc&api_key=b06edffab98014c6796084478f7e7920`);
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages });
    }
};
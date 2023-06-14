import { ALLMOVIES } from "../types/moviesType";
export const getAllMovies = () => {
    return { type: ALLMOVIES, data: [1,2] };
};

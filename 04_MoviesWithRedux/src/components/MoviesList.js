import DateCard from "./MovieCard";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = (props) => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllMovies());
    }, []);
    const dataMovies = useSelector((state) => state.movies);
    useEffect(() => {
        setMovies(dataMovies);
    }, [dataMovies]);
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                {movies.length ? (
                    movies.map((movie) => {
                        return (
                            <DateCard
                                key={movie.id}
                                id={movie.id}
                                original_title={movie.original_title}
                                release_date={movie.release_date}
                                vote_count={movie.vote_count}
                                vote_average={movie.vote_average}
                                poster_path={movie.poster_path}
                            />
                        );
                    })
                ) : (
                    <h2 className="text-center">لا يوجد</h2>
                )}
            </div>
            <div className="my-4">{movies.length ? <Pagination /> : null}</div>
        </>
    );
};

export default MoviesList;

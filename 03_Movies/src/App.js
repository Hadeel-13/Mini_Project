import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Button from "./components/ButtonV";
import DateCard from "./components/MovieCard";
import Date from "./DataBase/Date";
import NavBar from "./components/NavBar";
import Pagination from "./components/Pagination";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies as gett } from "./redux/actions/movieAction";
// import { Datepicker, Input, initTE } from "tw-elements";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [pageCount, setPageCount] = useState([]);
    const dispatch = useDispatch();
    const getAllMovies = async () => {
        const res = await axios.get(
            "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=1&sort_by=popularity.desc&api_key=b06edffab98014c6796084478f7e7920"
        );
        console.log(res.data.results);
        console.log(res.data.total_pages);
        setMovies(res.data.results);
        setPageCount(res.data.total_pages);
    };
    useEffect(() => {
        getAllMovies();
        dispatch(gett())
    }, []);
    //Get current Page
    const getPage = async (currentPage) => {
        const res = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ar&page=${currentPage}&sort_by=popularity.desc&api_key=b06edffab98014c6796084478f7e7920`
        );
        console.log(res.data.results);
        setMovies(res.data.results);
        setPageCount(res.data.total_pages);
    };
    //To search in API
    const search = async (word) => {
        if (word === "") {
            getAllMovies();
        } else {
            const res = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=b06edffab98014c6796084478f7e7920&language=ar&query=${word}`
            );
            console.log(res.data.results);
            setMovies(res.data.results);
            setPageCount(res.data.total_pages);
        }
    };
    return (
        <>
            <NavBar filterBySearch={search} />
            <div className="mx-auto max-w-5xl px-3 sm:w-full">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <MoviesList
                                    movies={movies}
                                    getPage={getPage}
                                    pageCount={pageCount}
                                />
                            }
                        />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};
export default App;

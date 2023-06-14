// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
const App = () => {
    return (
        <>
            <NavBar />
            <div className="mx-auto max-w-5xl px-3 sm:w-full">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MoviesList />} />
                        <Route path="/movie/:id" element={<MovieDetails />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </>
    );
};
export default App;

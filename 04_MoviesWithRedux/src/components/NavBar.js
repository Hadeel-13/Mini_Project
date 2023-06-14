import { useState } from "react";
import { getAllMovies, getMoviesSearch } from "../redux/actions/movieAction";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const NavBar = () => {
    const onSearch = (word) => {
        if (word === "") {
            dispatch(getAllMovies());
        } else {
            dispatch(getMoviesSearch(word));
        }
    };
    const dispatch = useDispatch();
    return (
        <>
            <nav className="bg-neutral-100 py-2 mb-8 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
                <div className="flex flex-wrap px-3">
                    <div>
                        <span
                            className="my-1 mr-2 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 lg:mb-0 lg:mt-0"
                            href="#"
                        >
                            <img
                                src="https://tecdn.b-cdn.net/img/logo/te-transparent-noshadows.webp"
                                style={{ height: 20 }}
                                alt=""
                                loading="lazy"
                            />
                            Movies
                        </span>
                    </div>
                    <input
                        type="search"
                        className="mx-1 sm:mx-32  shadow-sm bg-white m-0 me-1 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="ابحث"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>
                
            </nav>
        </>
    );
};
export default NavBar;
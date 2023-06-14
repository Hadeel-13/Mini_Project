import React, { useState } from "react";

const NavBar = ({filterBySearch}) => {
    const [searchValue, setSearchValue] = useState("");
    const onSearch = (e) => {
        
        filterBySearch(searchValue)
        setSearchValue('')
    };
    return (
        <>
            <nav className="flex flex-wrap items-center justify-between bg-neutral-100 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:py-4">
                <div className="flex flex-wrap items-center justify-between px-3">
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
                            مطعم
                        </span>
                    </div>
                </div>
                <div className="flex flex-wrap items-stretch ps-3">
                    <input
                        type="search"
                        className="relative m-0 block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="ابحث"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                        value={searchValue}
                    />

                    <span
                        className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                        id="basic-addon2"
                        onClick={() => onSearch()}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                        >
                            <path d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" />
                        </svg>
                    </span>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

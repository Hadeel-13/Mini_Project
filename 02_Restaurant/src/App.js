import React, { useState } from "react";
import Button from "./components/ButtonV";
import DateCard from "./components/DateCard";
import Date from "./DataBase/Date";
import NavBar from "./components/NavBar";
// import { Datepicker, Input, initTE } from "tw-elements";

const App = () => {
    const [dataState, setDataState] = useState(Date);
    const filterByCategory = (cat) => {
        if (cat === "الكل") {
            setDataState(Date);
        } else setDataState(Date.filter((item) => item.category === cat));
        console.log(dataState);
    };
    const categories = ["الكل", ...new Set(Date.map((i) => i.category))];
    console.log(categories);
    //
    const filterBySearch = (word) => {
        if (word != "الكل") {
            setDataState(Date.filter((item) => item.title === word));
        }
    };
    return (
        <>
            <NavBar filterBySearch={filterBySearch}/>
            <div
                className="mx-auto max-w-5xl px-3 sm:w-full"
                // style={{ maxWidth: "80%" }}
                dir="rtl"
            >
                <div className="my-3 text-lg text-center border-b-2 pb-1 border-indigo-500">
                    قائمة الطعام
                </div>
                <div className="mb-5 flex flex-wrap justify-center">
                    {categories.length ? (
                        categories.map((cat) => (
                            <Button
                                title={cat}
                                filterByCategory={filterByCategory}
                                cat={cat}
                            />
                        ))
                    ) : (
                        <h2 className="text-center">لا يوجد</h2>
                    )}
                </div>
                {dataState.length ? (
                    dataState.map((item) => {
                        return (
                            <DateCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                                category={item.category}
                                img={item.img}
                            />
                        );
                    })
                ) : (
                    <h2 className="text-center">لا يوجد</h2>
                )}
            </div>
        </>
    );
};
export default App;

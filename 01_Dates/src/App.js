import React, { useEffect, useState } from "react";
import Button from "./components/ButtonV";
import DateCard from "./components/DateCard";
import Dates from "./DataBase/Dates";
// import { Datepicker, Input, initTE } from "tw-elements";

const App = () => {
    const [datesState, setDatesState] = useState(Dates);
    const onDelete = () => {
        setDatesState([]);
    };
    const onViewData = () => {
        setDatesState(Dates);
    };
    useEffect(() => {
        setDatesState([]);
    }, []);
    return (
        <>
            <div className="mx-auto px-3 " style={{ maxWidth: 600 }} dir="rtl">
                <div className="my-3 text-lg">
                    لديك {datesState.length} مواعيد اليوم
                </div>
                <div
                    className="mb-5 rounded-lg  bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"
                    style={{ minHeight: 300 }}
                >
                    {datesState.length ? (
                        datesState.map((item) => {
                            return (
                                <DateCard
                                    key={item.id}
                                    name={item.name}
                                    date={item.date}
                                    img={item.img}
                                />
                            );
                        })
                    ) : (
                        <h2 className=" text-center">لا يوجد مواعيد اليوم</h2>
                    )}
                </div>
                <div className="mb-5 flex justify-between">
                    <Button title="مسح الكل" method={onDelete} />
                    <Button title="عرض البيانات" method={onViewData} />
                </div>
            </div>
        </>
    );
};
export default App;

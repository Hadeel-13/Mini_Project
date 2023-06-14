import { Link } from "react-router-dom";
const DateCard = (props) => {
    return (
        <>
            <Link to={`/movie/${props.id}`}>
                <div className="group relative shadow hover:shadow-xl rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ">
                    <div className="">
                        <img
                            src={
                                `https://image.tmdb.org/t/p/w500` +
                                props.poster_path
                            }
                            alt={
                                `https://image.tmdb.org/t/p/w500` +
                                props.poster_path
                            }
                            className="w-full transition-all duration-500 hover:scale-105 hover:rotate-1"
                        />
                        <div className="p-5 absolute w-full border bottom-0 rounded-t-lg bg-gradient-to-t from-indigo-100 to-slate-50 opacity-80 group-hover:opacity-60 group-hover:translate-y-16 duration-500 transition-all">
                            <div className="border-b-2 pb-1">
                                اسم الفيلم:{" "}
                                <span className="font-bold">
                                    {props.original_title}
                                </span>
                            </div>
                            <div>
                                تاريخ الإصدار:{" "}
                                <span className="font-bold">
                                    {props.release_date}
                                </span>
                            </div>
                            <div>
                                عدد المقيمين:{" "}
                                <span className="font-bold">
                                    {props.vote_count}
                                </span>
                            </div>
                            <div>
                                التقييم:{" "}
                                <span className="font-bold">
                                    {props.vote_average}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
};

export default DateCard;

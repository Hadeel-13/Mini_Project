import { Link, useParams } from "react-router-dom";
import axios from "axios";
import ButtonV from "./ButtonV";
import { useState, useEffect } from "react";
const MovieDetails = () => {
    const param = useParams();
    console.log(param.id);
    const [movie, setMovie] = useState([]);
    const getMovieDetails = async () => {
        const res = await axios.get(
            `
            https://api.themoviedb.org/3/movie/${param.id}?api_key=b06edffab98014c6796084478f7e7920`
        );
        console.log(res);
        setMovie(res.data);
    };
    useEffect(() => {
        getMovieDetails();
    }, []);
    return (
        <>
            <div className="mt-24 px-6 mx-auto">
                <section className="mb-6 text-gray-800 text-center md:text-left">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shadow shrink-0 basis-auto block md:flex w-full lg:w-6/12 xl:w-4/12">
                                <img
                                    src={
                                        `https://image.tmdb.org/t/p/w500` +
                                        movie.poster_path
                                    }
                                    alt="Trendy Pants and Shoes"
                                    className="w-full rounded"
                                />
                            </div>
                            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12 text-right">
                                <div className="px-6 py-12 md:px-12">
                                    اسم الفيلم:
                                    <h2 className="text-3xl font-bold mb-6 pb-2">
                                        {movie.title}
                                    </h2>
                                    <div className="p-5">
                                        <div>
                                            تاريخ الإصدار:{" "}
                                            <span className="font-bold">
                                                {movie.release_date}
                                            </span>
                                        </div>
                                        <div>
                                            عدد المقيمين:{" "}
                                            <span className="font-bold">
                                                {movie.vote_count}
                                            </span>
                                        </div>
                                        <div>
                                            التقييم:{" "}
                                            <span className="font-bold">
                                                {movie.vote_average}
                                            </span>
                                        </div>
                                        <div className="mt-2">
                                            القصة:{" "}
                                            <span className="font-bold">
                                                {movie.overview}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-wrap justify-center">
                    <Link to={"/"}>
                        <ButtonV title={"العودة للرئيسية"} />
                    </Link>
                    <a href={movie.homepage}>
                        <ButtonV title={"مشاهدة الفلم"} />
                    </a>
                </section>
            </div>
        </>
    );
};

export default MovieDetails;

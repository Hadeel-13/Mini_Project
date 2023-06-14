import DateCard from "./MovieCard";
import Pagination from "./Pagination";
const MoviesList = (props) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
                {props.movies.length ? (
                    props.movies.map((movie) => {
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
            <div className="my-4">
                {props.movies.length ? (
                    <Pagination
                        getPage={props.getPage}
                        pageCount={props.pageCount}
                    />
                ) : null}
            </div>
        </>
    );
};

export default MoviesList;

const DateCard = (props) => {
    return (
        <div className="flex border-b-2 py-2">
            <img
                src={props.img}
                className="w-20 rounded-full"
                alt="Avatar"
            />
            <div className="ms-2 flex flex-col justify-center content-center">
                <span>{props.name}</span>
                <span>{props.date}</span>
            </div>
        </div>
    );
};

export default DateCard;

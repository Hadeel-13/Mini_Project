const DateCard = (props) => {
    return (
        <div className="mb-6 flex flex-col sm:flex-row rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <img
                className="h-48 w-auto sm:w-96 rounded-lg object-cover  "
                src={props.img}
                alt={props.img}
            />
            <div className="p-3 w-full">
                <div className="flex justify-between items-center">
                    <div className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                        {props.title}
                    </div>
                    <div className="text-xs text-red-500 dark:text-neutral-300">
                        {props.price}
                    </div>
                </div>
                <div>{props.description}</div>
            </div>
        </div>
    );
};

export default DateCard;

const Button = (props) => {
    return (
        <button
            type="button"
            className="m-1 inline-block rounded-full border-2 border-indigo-500 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-indborder-indigo-500 transition duration-150 ease-in-out hover:border-indigo-500 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-indigo-500 focus:border-indigo-500 focus:text-indigo-500 focus:outline-none focus:ring-0 active:border-indigo-500 active:text-indigo-500- dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
        >
            {props.title}
        </button>
    );
};

export default Button;

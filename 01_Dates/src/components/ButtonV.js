const Button = (props) => {
    return (
        <button
            type="button"
            className="inline-block rounded-full border-2 border-violet-700 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-violet-700 transition duration-150 ease-in-out hover:border-violet-700 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-violet-700 focus:border-violet-700 focus:text-violet-700 focus:outline-none focus:ring-0 active:border-violet-700 active:text-violet-700- dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            data-te-ripple-init
            onClick={props.method}
        >
            {props.title}
        </button>
    );
};

export default Button;

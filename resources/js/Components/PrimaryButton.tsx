import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({ className = '', disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-4 py-3 bg-gray-800 border border-transparent rounded-md font-semibold text-xs md:text-lg text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700
				active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500	focus:ring-offset-2 transition ease-in-out duration-150

				dark:bg-gray-200
				dark:focus:bg-gray-300
				dark:text-gray-800
				dark:active:bg-gray-500
				dark:hover:bg-cyan-500
				dark:hover:text-zinc-100
				dark:focus:ring-offset-gray-800
				dark:focus:hover:text-white	
				${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

import { twMerge } from "tailwind-merge";

export default function ({ children, header, className, ...rest }) {
    return (
        <main
            className={twMerge("max-w-screen-xl mx-auto p-4", className)}
            {...rest}
        >
            <h1 className="text-3xl font-bold">{header}</h1>
            {children}
        </main>
    );
}

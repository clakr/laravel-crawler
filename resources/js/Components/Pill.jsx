import { twMerge } from "tailwind-merge";

export default function ({ children, className }) {
    return (
        <span
            className={twMerge(
                "bg-neutral-200 px-3 py-1.5 text-sm font-semibold rounded-full",
                className
            )}
        >
            {children}
        </span>
    );
}

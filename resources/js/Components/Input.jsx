import { twMerge } from "tailwind-merge";

export default function ({ className, ...rest }) {
    return (
        <input
            className={twMerge(
                "text-sm rounded border-neutral-300 border outline-neutral-900 outline-offset-4 px-3",
                className
            )}
            {...rest}
        />
    );
}

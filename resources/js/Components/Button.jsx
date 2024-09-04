import { Link } from "@inertiajs/react";
import { twMerge } from "tailwind-merge";

export default function ({
    children,
    variant = "primary",
    className,
    href,
    ...rest
}) {
    const defaultStyle = {
        primary: "bg-neutral-900 text-white px-4 py-2 hover:opacity-90",
        icon: "border p-2.5 [&>svg]:size-5 border-neutral-200 hover:bg-neutral-200/50 disabled:opacity-50",
    };

    const classes = twMerge(
        "outline-offset-4 outline-neutral-900 font-medium text-sm rounded-md whitespace-nowrap block",
        defaultStyle[variant],
        className
    );

    if (href)
        return (
            <Link className={classes} href={href} {...rest}>
                {children}
            </Link>
        );

    return (
        <button className={classes} {...rest}>
            {children}
        </button>
    );
}

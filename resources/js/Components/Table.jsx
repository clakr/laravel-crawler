import { twMerge } from "tailwind-merge";

export default function Table({ children, headings }) {
    return (
        <div className="relative overflow-auto rounded-lg border border-neutral-200">
            <table className="w-full">
                <thead>
                    <tr>
                        {headings.map((heading) => (
                            <th
                                key={heading}
                                className="py-3 px-6 text-start text-neutral-400 font-medium text-sm"
                            >
                                {heading}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="[&>tr:last-child>td]:border-none">
                    {children}
                </tbody>
            </table>
        </div>
    );
}

export function TableData({ children, className, ...rest }) {
    return (
        <td
            className={twMerge(
                "py-3 px-6 border-y border-neutral-200 text-sm",
                className
            )}
            {...rest}
        >
            {children}
        </td>
    );
}

Table.TableData = TableData;

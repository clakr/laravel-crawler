export default function ({ children, ...rest }) {
    return (
        <button
            className="bg-neutral-900 text-white px-4 py-2 rounded text-sm"
            {...rest}
        >
            {children}
        </button>
    );
}

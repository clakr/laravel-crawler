import Button from "@/Components/Button";

export default function ({ model, from, to, total, next, prev }) {
    return (
        <section className="flex justify-between">
            <div className="flex items-center text-sm text-neutral-950/75">
                Showing {from} to {to} of {total} {model}
            </div>
            <div className="flex gap-x-2">
                <Button variant="icon" href={prev} disabled={prev === null}>
                    <span className="sr-only">Previous Listing of {model}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                    >
                        <path
                            fill="currentColor"
                            d="M168.49 199.51a12 12 0 0 1-17 17l-80-80a12 12 0 0 1 0-17l80-80a12 12 0 0 1 17 17L97 128Z"
                        />
                    </svg>
                </Button>
                <Button variant="icon" href={next} disabled={next === null}>
                    <span className="sr-only">Next Listing of {model}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                    >
                        <path
                            fill="currentColor"
                            d="m184.49 136.49l-80 80a12 12 0 0 1-17-17L159 128L87.51 56.49a12 12 0 1 1 17-17l80 80a12 12 0 0 1-.02 17"
                        />
                    </svg>
                </Button>
            </div>
        </section>
    );
}

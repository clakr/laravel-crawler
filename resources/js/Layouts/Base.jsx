import Navbar from "@/Components/Navbar";

export default function ({ children }) {
    return (
        <>
            <Navbar>
                <a href="/" className="font-bold">
                    laravel-crawler
                </a>
            </Navbar>
            {children}
        </>
    );
}

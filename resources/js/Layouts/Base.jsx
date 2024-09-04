import Navbar from "@/Components/Navbar";
import { Link } from "@inertiajs/react";

export default function ({ children }) {
    return (
        <>
            <Navbar>
                <Link href="/" className="font-bold">
                    laravel-crawler
                </Link>
            </Navbar>
            {children}
        </>
    );
}

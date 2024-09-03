import Base from "@/Layouts/Base";
import Main from "@/Components/Main";
import Button from "@/Components/Button";
import Input from "@/Components/Input";

export default function () {
    return (
        <Base>
            <Main header="Home" className="flex flex-col gap-y-4">
                <form className="flex gap-x-2 justify-between">
                    <Input
                        type="text"
                        name="url"
                        id="url"
                        className="grow"
                        placeholder="https://github.com/clakr/laravel-crawler"
                    />
                    <Button>Crawl</Button>
                </form>
                <section>data here!</section>
            </Main>
        </Base>
    );
}

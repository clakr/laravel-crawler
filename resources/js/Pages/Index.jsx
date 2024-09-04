import Base from "@/Layouts/Base";
import Main from "@/Components/Main";
import Button from "@/Components/Button";
import Input from "@/Components/Input";
import Table from "@/Components/Table";
import Pagination from "@/Components/Pagination";

export default function ({ resource }) {
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
                <Table
                    headings={[
                        "Thumbnail",
                        "Title & Url",
                        "Description",
                        "Crawled",
                        "",
                    ]}
                >
                    {resource.data.map(
                        ({
                            id,
                            url,
                            screenshotImg,
                            title,
                            description,
                            createdAt,
                        }) => (
                            <tr key={id}>
                                <Table.TableData>
                                    <img
                                        src={screenshotImg}
                                        alt={`${title} screenshot`}
                                        className="aspect-video rounded object-cover"
                                    />
                                </Table.TableData>
                                <Table.TableData>
                                    <div className="flex flex-col gap-y-2">
                                        <strong className="text-base">
                                            {title}
                                        </strong>
                                        <a
                                            href={url}
                                            target="_blank"
                                            className="text-blue-500 flex items-center gap-x-2"
                                        >
                                            {url}
                                        </a>
                                    </div>
                                </Table.TableData>
                                <Table.TableData className="text-balance">
                                    {description}
                                </Table.TableData>
                                <Table.TableData className="whitespace-nowrap">
                                    {createdAt}
                                </Table.TableData>
                                <Table.TableData>
                                    <Button
                                        variant="icon"
                                        href={`/crawled-url/${id}`}
                                    >
                                        <span className="sr-only">
                                            View Crawled Url
                                        </span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0"
                                            />
                                        </svg>
                                    </Button>
                                </Table.TableData>
                            </tr>
                        )
                    )}
                </Table>
                <Pagination
                    model="Crawled Urls"
                    from={resource.meta.from}
                    to={resource.meta.to}
                    total={resource.meta.total}
                    next={resource.links.next}
                    prev={resource.links.prev}
                />
            </Main>
        </Base>
    );
}

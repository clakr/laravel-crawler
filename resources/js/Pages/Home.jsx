import Base from "@/Layouts/Base";
import Main from "@/Components/Main";
import Button from "@/Components/Button";
import Table from "@/Components/Table";
import Pagination from "@/Components/Pagination";
import Eye from "@/Icons/Eye";
import CrawlForm from "@/Components/CrawlForm";

const TableHeadings = [
  "Thumbnail",
  "Title",
  "Description",
  "Crawled",
  "Actions",
];

export default function ({ resource: { data, links, meta } }) {
  const hasData = data.length > 0;

  const TableData = hasData ? (
    data.map(({ id, url, screenshotImg, title, description, createdAt }) => (
      <tr key={id}>
        <Table.TableData className="w-[200px]">
          <img
            src={screenshotImg}
            alt={`${title} Screenshot`}
            className="aspect-video rounded object-cover"
          />
        </Table.TableData>
        <Table.TableData>
          <a href={url} target="_blank" className="text-blue-500 font-medium">
            {title}
          </a>
        </Table.TableData>
        <Table.TableData className="text-balance">
          {description}
        </Table.TableData>
        <Table.TableData className="whitespace-nowrap">
          {createdAt}
        </Table.TableData>
        <Table.TableData>
          <div className="flex justify-center">
            <Button variant="icon" href={`/crawl-urls/${id}`}>
              <span className="sr-only">View Crawled Url</span>
              <Eye />
            </Button>
          </div>
        </Table.TableData>
      </tr>
    ))
  ) : (
    <tr>
      <Table.TableData
        className="font-bold text-center"
        colSpan={TableHeadings.length}
      >
        No Data Found
      </Table.TableData>
    </tr>
  );

  return (
    <Base>
      <Main header="Home" className="flex flex-col gap-y-4">
        <CrawlForm />
        <Table headings={TableHeadings}>{TableData}</Table>
        {hasData ? (
          <Pagination
            model="Crawled Urls"
            from={meta.from}
            to={meta.to}
            total={meta.total}
            next={links.next}
            prev={links.prev}
          />
        ) : null}
      </Main>
    </Base>
  );
}

import Base from "@/Layouts/Base";
import Main from "@/Components/Main";
import Pill from "@/Components/Pill";
import Calendar from "@/Icons/Calendar";
import { html } from "simply-beautiful";

function formatHTMl(input) {
  return html(input, {
    indent_size: 2,
    unformatted: ["pre", "code", "textarea", "script", "style"],
  });
}

export default function ({ resource: { data } }) {
  return (
    <Base>
      <Main header={data.title} className="flex flex-col gap-y-4">
        <Pill className="self-start flex items-center gap-x-2">
          <Calendar />
          Crawled On: {data.createdAt}
        </Pill>
        <section className="border border-neutral-200 rounded-lg p-4 flex flex-col gap-y-6">
          <div className="grid grid-cols-3 gap-x-8">
            <img
              src={data.screenshotImg}
              alt={`${data.title} Screenshot`}
              className="rounded object-cover"
            />
            <dl className="grid grid-cols-4 gap-4 self-start col-span-2">
              <DataTerm>URL: </DataTerm>
              <DataDefinition>
                <a href="" target="_blank" className="text-blue-500">
                  {data.url}
                </a>
              </DataDefinition>
              <DataTerm>HTML Description: </DataTerm>
              <DataDefinition>{data.description}</DataDefinition>
            </dl>
          </div>
          <hr />
          <div className="flex flex-col gap-y-3">
            <h3 className="text-2xl font-medium">HTML Body</h3>
            <pre className="whitespace-break-spaces text-sm bg-neutral-200 p-4 rounded">
              {formatHTMl(data.body)}
            </pre>
          </div>
        </section>
      </Main>
    </Base>
  );
}

function DataTerm({ children }) {
  return <dt className="font-bold">{children}</dt>;
}

function DataDefinition({ children }) {
  return <dd className="col-span-3">{children}</dd>;
}

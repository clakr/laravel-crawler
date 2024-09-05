import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { useState } from "react";
import { router } from "@inertiajs/react";

export default function () {
  const [url, setUrl] = useState("https://www.ckt.fyi");

  function handleCrawlUrl(e) {
    e.preventDefault();

    router.post(
      "/",
      { url },
      { onSuccess: () => alert(`${url}: Crawling Queued`) }
    );

    setUrl("");
  }

  return (
    <form className="flex gap-x-2 justify-between" onSubmit={handleCrawlUrl}>
      <Input
        type="text"
        name="url"
        id="url"
        className="grow"
        placeholder="https://github.com/clakr/"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button>Crawl</Button>
    </form>
  );
}

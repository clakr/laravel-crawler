<?php

namespace App;

use App\Jobs\ExtractAndSaveCrawlUrlData;
use GuzzleHttp\Exception\RequestException;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\UriInterface;
use Spatie\Crawler\CrawlObservers\CrawlObserver;

class CrawlUrlObserver extends CrawlObserver
{
    /*
     * Called when the crawler will crawl the url.
     */
    public function willCrawl(UriInterface $url, ?string $linkText): void {}

    /*
     * Called when the crawler has crawled the given url successfully.
     */
    public function crawled(
        UriInterface $url,
        ResponseInterface $response,
        ?UriInterface $foundOnUrl = null,
        ?string $linkText = null,
    ): void {

        // refactor this
        $formattedUrl = "{$url->getScheme()}://{$url->getHost()}";

        $html = $response->getBody()->getContents();

        ExtractAndSaveCrawlUrlData::dispatch($formattedUrl, $html);
    }

    /*
     * Called when the crawler had a problem crawling the given url.
     */
    public function crawlFailed(
        UriInterface $url,
        RequestException $requestException,
        ?UriInterface $foundOnUrl = null,
        ?string $linkText = null,
    ): void {}

    /*
     * Called when the crawl has ended.
     */
    public function finishedCrawling(): void {}
}

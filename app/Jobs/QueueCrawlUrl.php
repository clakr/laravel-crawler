<?php

namespace App\Jobs;

use App\CrawlUrlObserver;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Spatie\Crawler\Crawler;

class QueueCrawlUrl implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private string $url)
    {
        $this->url = $url;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Crawler::create()
            ->executeJavaScript()
            ->setTotalCrawlLimit(5)
            ->setCrawlObserver(new CrawlUrlObserver)
            ->startCrawling($this->url);
    }
}

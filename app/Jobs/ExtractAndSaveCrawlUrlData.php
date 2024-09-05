<?php

namespace App\Jobs;

use App\Models\CrawlUrl;
use DOMDocument;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;
use Spatie\Browsershot\Browsershot;

class ExtractAndSaveCrawlUrlData implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(private string $url, private string $html)
    {
        $this->url = $url;
        $this->html = $html;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        [$fileName, $filePath] = $this->generateFileName();

        Browsershot::url($this->url)->newHeadless()->save($filePath);

        [$title, $description] = $this->getHTMLTitleAndDescription($this->html);

        CrawlUrl::create([
            'url' => $this->url,
            'screenshot_img' => $fileName,
            'title' => $title,
            'description' => $description,
            'body' => $this->html,
        ]);
    }

    private function generateFileName()
    {
        $fileName = '/'.time().'_'.uniqid().'.png';
        $filePath = "./public{$fileName}";

        return [$fileName, $filePath];
    }

    private function getHTMLTitleAndDescription(string $html): array
    {
        $doc = new DOMDocument;
        @$doc->loadHTML($html);

        $title = $doc->getElementsByTagName('title')->item(0)->textContent;

        $description = '';
        $metaElements = $doc->getElementsByTagName('meta');
        foreach ($metaElements as $metaElement) {
            if (! $metaElement instanceof \DOMElement) {
                continue;
            }

            if (strtolower($metaElement->getAttribute('name')) === 'description') {
                $description = $metaElement->getAttribute('content');
                break;
            }
        }

        return [$title, $description];
    }
}

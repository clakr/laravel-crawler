<?php

use App\Http\Resources\CrawlUrlResource;
use App\Jobs\QueueCrawlUrl;
use App\Models\CrawlUrl;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $crawledUrls = CrawlUrl::paginate();
    $resource = CrawlUrlResource::collection($crawledUrls);

    return Inertia::render('Home', [
        'resource' => $resource,
    ]);
});

Route::post('/', function (Request $request) {
    $url = $request->get('url');

    QueueCrawlUrl::dispatch($url);
});

Route::get('/crawl-urls/{crawlUrl}', function (CrawlUrl $crawlUrl) {
    $resource = new CrawlUrlResource($crawlUrl);

    return Inertia::render('CrawlUrl', [
        'resource' => $resource,
    ]);
});

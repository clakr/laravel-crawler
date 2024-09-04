<?php

use App\Http\Resources\CrawlUrlResource;
use App\Models\CrawlUrl;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $crawlUrls = CrawlUrl::paginate();
    $resource = CrawlUrlResource::collection($crawlUrls);

    return Inertia::render('Index', [
        'resource' => $resource,
    ]);
});

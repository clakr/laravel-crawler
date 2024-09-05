<?php

namespace App\Http\Controllers;

use App\Http\Resources\CrawlUrlResource;
use App\Jobs\QueueCrawlUrl;
use App\Models\CrawlUrl;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CrawlUrlController extends Controller
{
    public function index()
    {
        $crawledUrls = CrawlUrl::paginate();
        $resource = CrawlUrlResource::collection($crawledUrls);

        return Inertia::render('Home', [
            'resource' => $resource,
        ]);
    }

    public function show(CrawlUrl $crawlUrl)
    {
        $resource = new CrawlUrlResource($crawlUrl);

        return Inertia::render('CrawlUrl', [
            'resource' => $resource,
        ]);
    }

    public function store(Request $request)
    {
        $url = $request->get('url');

        QueueCrawlUrl::dispatch($url);
    }
}

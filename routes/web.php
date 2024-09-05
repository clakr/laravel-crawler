<?php

use App\Http\Controllers\CrawlUrlController;
use Illuminate\Support\Facades\Route;

Route::get('/', [CrawlUrlController::class, 'index']);
Route::get('/crawl-urls/{crawlUrl}', [CrawlUrlController::class, 'show']);
Route::post('/', [CrawlUrlController::class, 'store']);

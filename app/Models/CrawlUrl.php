<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrawlUrl extends Model
{
    use HasFactory;

    protected $fillable = [
        'url',
        'screenshot_img',
        'title',
        'description',
        'body',
    ];

    protected $perPage = 5;

    protected function createdAt(): Attribute
    {
        return Attribute::make(
            get: fn () => Carbon::parse($this->attributes['created_at'])->format('g:i A M d, Y'),
        );
    }
}

<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CrawlUrlResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'url' => $this->url,
            'screenshotImg' => $this->screenshot_img,
            'title' => $this->title,
            'description' => $this->description,
            'body' => $this->body,
            'createdAt' => $this->created_at,
        ];
    }
}

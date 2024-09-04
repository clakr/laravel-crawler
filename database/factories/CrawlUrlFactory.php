<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CrawlUrl>
 */
class CrawlUrlFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'url' => fake()->url(),
            'screenshot_img' => fake()->imageUrl(),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
        ];
    }
}

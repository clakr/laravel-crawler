<?php

namespace Database\Seeders;

use App\Models\CrawlUrl;
use Illuminate\Database\Seeder;

class CrawlUrlSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CrawlUrl::factory(15)->create();
    }
}

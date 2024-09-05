# laravel-crawler

This is a repository for crawling websites using Laravel. It is a monolithic application that uses Inertia and React. The application emphasizes the use of Jobs and Queues to handle the crawling of websites asynchronously and to prevent the blocking of both the Frontend and Backend.

## Installation

Run the following commands in your terminal.

```bash
git clone https://github.com/clakr/laravel-crawler.git
```

```bash
composer install && npm install
```

Run the following commands in different terminals.

```bash
php artisan serve
```

```bash
php artisan queue:work
```

```bash
npm run dev
```

## Features

- [x] URL input to crawl
- [x] History Crawled List Page
  - [x] Thumbnail of the screenshot
  - [x] Title with URL as a link
  - [x] HTML Description
  - [x] Created At
- [x] Crawled Result Detail Page
  - [x] Screenshot
  - [x] Title with URL as a link
  - [x] HTML Description
  - [x] HTML Body
  - [x] Created At
- [ ] Additionals
  - [x] React
  - [ ] Unit Test
  - [x] Pagination

## Installed Packages

- `dcastil/tailwind-merge`

  - since I am using Tailwind, this enables me to create composables components without having to worry about clashing CSS styles and classes

- `itw-creative-works/simply-beautiful`

  - formatting of the stringified HTML in the Frontend. I tried utilizing the `DOMDocument` class in PHP, but it does not handle the cases very well.

- `spatie/crawler`
  - packaged used primarily for the crawling of websites and its links

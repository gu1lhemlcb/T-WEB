# Changelog

## 1.3.3 / 2021-03-03

## Improvements

- Upgrade Kirby Version to 3.5
- Upgrade kirby-twig version to new deposit
- Upgrade janitor to 2.6
- Upgrade k3-panel-view-extended to 3.0
- Remove kirby-editor plugin and implement new editor from Kirby 3.5 on all pages

## 1.3.2 / 2020-04-24

### Fixes

- Project initialization
- Changelog typo

### Improvements

- Ability to change home title

## 1.3.1 / 2020-04-23

### Fixes

- Project initialization
- Add compiled assets to gitignore
- Add SVG sprite to gitignore
- Add yarn.lock to gitignore
- Changelog typo

### Improvements

- Limit to 1 page for the blog template
- Add sorting by date for blog posts in panel
- Rename cookie with project_environment

## 1.3.0 / 2020-04-21

### Fixes

- Debug variable
- Better storage structure
- Better blueprints structure
- Contact form fixed and reCAPTCHA
- Fingerprints loaded if debug disabled

### Improvements

- Update dependencies
- Maintenance mode (filtered by IP)
- Htaccess optimization
- Session flush via panel
- Cache flush via panel
- Better media manager
- Users permissions
- Troa panel style
- Better SEO

## 1.2.4 / 2020-01-27

### Fixes

- Fix typo in `project/engine/controllers/contact.php`
- Fix csrf call in `project/front/views/contact.twig`

## 1.2.3 / 2020-01-27

### Fixes

- Fix `_head.twig` template for SEO

## 1.2.2 / 2020-01-27

### Fixes

- Fix typo on `settings_google_verification` field

### Improvements

- Add `settings_google_gtag` field

## 1.2.1 / 2020-01-27

### Fixes

- Remove git hooks temporarily

## 1.2.0 / 2019-12-09

### Improvements

- Add SVG sprite support with Gulp

## 1.1.0 / 2019-12-09

### Internal

- Update NPM dependencies
- Update composer dependencies

### Plugins

- Add [Kirby Builder](https://github.com/TimOetting/kirby-builder)
- Add [Kirby Editor](https://github.com/getkirby/editor)
- Add [Kirby Pagetable](https://github.com/sylvainjule/kirby-pagetable)
- Remove [Retour for Kirby](https://github.com/distantnative/retour-for-kirby)
- Remove [Kirby Markdown Field](https://github.com/sylvainjule/kirby-markdown-field)

### Fixes

- Remove `well-known` in `.htaccess`
- Fix error messages for contact form
- Blueprints refactoring
- Views refactoring
  - page template added for to `<body>` ID
  - `/snippets/includes/head` moved to `/snippets/layouts/_head`
  - `/snippets/includes/cookie.twig` renamed as `cookies.twig`
  - `/snippets/includes/credits.twig` added

### Improvements

- Nnavigation edition in panel more simple
- Blog edition in panel more simple
- Cookies edition in panel
- Credits edition in panel

## 1.0.0 / 2019-10-29

First release for EpiTravel.

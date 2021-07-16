<?php

require '../vendor/autoload.php';

$root = dirname(__DIR__, 1);

$plugins = $root . '/plugins';
$project = $root . '/project';
$public  = $root . '/public';
$store   = $root . '/store';

$kirby = new Kirby([
    'roots' => [
        'index'       => __DIR__,
        'plugins'     => $plugins,
        'site'        => $project,
        'config'      => $project . '/config',
        'blueprints'  => $project . '/engine/blueprints',
        'collections' => $project . '/engine/collections',
        'controllers' => $project . '/engine/controllers',
        'models'      => $project . '/engine/models',
        'templates'   => $project . '/theme/views',
        'snippets'    => $project . '/theme/snippets',
        'cache'       => $store   . '/cache',
        'content'     => $store   . '/data/content',
        'media'       => $store   . '/data/media',
        'accounts'    => $store   . '/safe/accounts',
        'sessions'    => $store   . '/safe/sessions',
        'assets'      => $public  . '/assets'
    ]
]);

// Media symlink
$media_symlink = $public . '/media';

if (!file_exists($media_symlink)) {
    symlink($kirby->roots()->media(), $media_symlink);
}

if ($kirby->users()->current() &&$kirby->users()->current()->isAdmin()) {
    // Home page
    if (!$kirby->page('home')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'home',
            'template' => 'home',
            'content'  => [
                'title' => 'Accueil'
            ]
        ]);
    }

    // Error page
    if (!$kirby->page('error')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'error',
            'template' => 'error',
            'content'  => [
                'title' => 'Erreur 404'
            ]
        ]);
    }

    // Maintenance page
    if (!$kirby->page('maintenance')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'maintenance',
            'template' => 'maintenance',
            'content'  => [
                'title' => 'Maintenance'
            ]
        ]);
    }

    // Privacy page
    if (!$kirby->page('confidentialite')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'confidentialite',
            'template' => 'privacy',
            'content'  => [
                'title' => 'Confidentialité'
            ]
        ]);
    }

    // Legal page
    if (!$kirby->page('mentions-legales')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'mentions-legales',
            'template' => 'legal',
            'content'  => [
                'title' => 'Mentions légales'
            ]
        ]);
    }

    // Contact page
    if (!$kirby->page('contact')) {
        Page::create([
            'num'      => null,
            'draft'    => false,
            'slug'     => 'contact',
            'template' => 'contact',
            'content'  => [
                'title' => 'Contact'
            ]
        ]);
    }
}

echo $kirby->render();

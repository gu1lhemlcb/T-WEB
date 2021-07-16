<?php

return function ($page) {

    // Post
    $post =$page
        ->children()
        ->listed()
        ->sortBy('date', 'desc')
        ->first();

    // Posts
    $posts = $page
        ->children()
        ->listed()
        ->sortBy('date', 'desc')
        ->offset(1);

    // Posts pagination
    $posts = $posts->paginate(5);
    $pagination = $posts->pagination();

    return [
        'post' => $post,
        'posts' => $posts,
        'pagination' => $pagination
    ];
};

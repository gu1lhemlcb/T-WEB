<?php

return [
    'api' => [
        'allowInsecure' => false
    ],
    'auth' => [
        'trials'  => 5,
        'timeout' => 1800
    ],
    'cache' => [
        'pages' => [
            'active' => false,
            'ignore' => function() {
                return kirby()->user() !== null;
            }
        ]
    ],
    'content' => [
        'locking' => true
    ],
    'debug' => false,
    'panel' => [
        'install' => false
    ],
    'session' => [
        'durationNormal' => 7200,
        'durationLong'   => 604800,
        'timeout'        => 3600,
        'cookieName'     => 'EpiTravel_prod',
        'gcInterval'     => 100
    ],
    'amteich.twig.cache' => true
];

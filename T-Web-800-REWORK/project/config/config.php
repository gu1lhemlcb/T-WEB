<?php

use Data;

return [
    'api' => [
        'allowInsecure' => true,
    ],
    'auth' => [
        'trials' => 100,
        'timeout' => 300,
    ],
    'cache' => [
        'pages' => [
            'active' => false,
            'ignore' => function () {
                return kirby()->user() !== null;
            },
        ],
    ],
    'content' => [
        'extension' => 'txt',
        'locking' => true,
    ],
    'date' => [
        'handler' => 'strftime',
    ],
    'debug' => true,
    'languages' => false,
    'locale' => 'fr_FR.utf-8',
    'markdown' => [
        'breaks' => true,
        'extra' => true,
    ],
    'panel' => [
        'css' => 'assets/panel/custom.css',
        'install' => true,
        'kirbytext' => true,
        'language' => 'fr',
        'slug' => 'admin203',
    ],
    'session' => [
        'durationNormal' => 86400,
        'durationLong' => 1209600,
        'timeout' => 3600,
        'cookieName' => 'EpiTravel_local',
        'gcInterval' => 100,
    ],
    'thumbs' => [
        'autoOrient' => true,
        'crop' => false,
        'blur' => false,
        'grayscale' => false,
        'quality' => '80',
        'presets' => [
            'tiny' => [
                'crop' => true,
                'width' => 300,
                'height' => null,
            ],
            'small' => [
                'crop' => true,
                'width' => 600,
                'height' => null,
            ],
            'medium' => [
                'crop' => true,
                'width' => 1000,
                'height' => null,
            ],
            'large' => [
                'crop' => true,
                'width' => 1600,
                'height' => null,
            ],
            'huge' => [
                'crop' => true,
                'width' => 2000,
                'height' => null,
            ],
        ],
    ],
    'bnomei.robots-txt' => [
        'groups' => [
            '*' => [
                'allow' => ['/media/'],
            ],
        ],
    ],
    'amteich.twig.cache' => false,
    'amteich.twig.env.functions' => [
        'fpCSS' => 'Bnomei\Fingerprint::css',
        'fpJS' => 'Bnomei\Fingerprint::js',
        'isDebug' => function () {
            return kirby()->options()['debug'];
        },
    ],
    'omz13.xmlsitemap' => [
        'cacheTTL' => 60,
        'disableImages' => false,
    ],
    'routes' => [
        [
            'pattern' => 'logout',
            'action' => function () {
                $user = kirby()->user();
                if ($user) {
                    $user->logout();
                }
                go('se-connecter', 200);
            },
        ],
        [
            'pattern' => 'login',
            'action' => function () {
                go('se-connecter');
            },
        ],
    ],
    'hooks' => [
        'page.update:after' => function ($newPage, $oldPage) {
            if ($oldPage->template()->name() === 'sessions_item') {
                foreach ($newPage->users_session()->toUsers() as $user) {
                    $isSetSession = false;
                    foreach ($user->session_in()->toStructure() as $session) {
                        if ($session->formation_title()) {
                            $isSetSession = true;
                        }
                    }
                    if (!$isSetSession) {
                        $thisSessionStructure = $user
                            ->session_in()
                            ->toStructure();
                        $count = $thisSessionStructure->count();

                        $modulesCount = 0;
                        $qcmCount = 0;

                        foreach ($newPage->formation_name()->toPage()->children()->template("modules_item") as $module) {
                            $so_modules = new Kirby\Cms\StructureObject([
                                'id' => $modulesCount,
                                'content' => [
                                    'modules_title' => $module->uri(),
                                    'module_timer' => $module->content()->duration()->value(),
                                ],
                            ]);
                            $modulesCount++;
                            $modules[] = $so_modules;
                        };
                        foreach ($newPage->formation_name()->toPage()->children()->template("qcm_item") as $qcm) {
                            $so_qcm = new Kirby\Cms\StructureObject([
                                'id' => $qcmCount,
                                'content' => [
                                    'qcm_title' => $qcm->uri(),
                                ],
                            ]);
                            $qcmCount++;
                            $qcms[] = $so_qcm;
                        };
                        $modulesStructure = new Kirby\Cms\Structure($modules);
                        $qcmStructure = new Kirby\Cms\Structure($qcms);
                        $so = new Kirby\Cms\StructureObject([
                            'id' => $count,
                            'content' => [
                                'session_title' => $newPage->uri(),
                                'formation_title' => $newPage->formation_name()->value(),
                                'qcm_index' => $qcmStructure->toArray(),
                                'modules_progress' => $modulesStructure->toArray(),
                            ],
                        ]);
                        $thisSessionStructure->add($so);
                        $user->update([
                            'session_in' => Data::encode(
                                $thisSessionStructure->toArray(),
                                'yaml'
                            ),
                        ]);
                    }
                }
            }
        },
    ],
];

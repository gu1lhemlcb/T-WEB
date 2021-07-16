<?php

return function ($kirby, $site, $page) {
    require_once(dirname(__DIR__, 1) . '/forms/contact-form.php');

    return [
        'contactForm' => $form_contact
    ];
};
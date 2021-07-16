<?php

return function ($kirby, $site, $page) {
    require_once(dirname(__DIR__, 1) . '/forms/quotation-form.php');

    return [
        'quotationForm' => $form_quotation
    ];
};
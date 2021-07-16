<?php

if ($kirby->request()->is('POST') && get('form_type') === 'quotation_form') {
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6Lf7de0aAAAAAIt5VgeQV_SijIXv0UX-z7-sK4ms';
    $recaptcha_response = get('quotation_form_recaptcha_response');
    $recaptcha = file_get_contents(
        $recaptcha_url .
            '?secret=' .
            $recaptcha_secret .
            '&response=' .
            $recaptcha_response
    );
    $recaptcha = json_decode($recaptcha, true);

    if ($recaptcha['score'] >= 0.6) {
        $alerts = null;

        $data = [
            'formation' => get('quotation_formation'),
            'participants' => get('quotation_participants'),
            'date' => get('quotation_date'),
            'firstname' => get('quotation_firstname'),
            'lastname' => get('quotation_lastname'),
            'societe' => get('quotation_societe'),
            'email' => get('quotation_email'),
            'phone' => get('quotation_phone'),
            'message' => get('quotation_message'),
        ];

        $rules = [
            'firstname' => ['required', 'maxLength' => 150],
            'lastname' => ['required', 'maxLength' => 150],
            'email' => ['required', 'email'],
            'message' => ['required', 'maxLength' => 500],
        ];

        $messages = [
            'firstname' => [
                'Ce champ est requis',
                'Ce champ ne doit excéder 150 caractères.',
            ],
            'lastname' => [
                'Ce champ est requis',
                'Ce champ ne doit excéder 150 caractères.',
            ],
            'phone' => [
                'Un numéro de téléphone est requis',
                'Un numéro de téléphone n\'est pas valide.',
            ],
            'email' => [
                'L\'adresse e-mail est requise',
                'L\'adresse e-mail n\'est pas valide.',
            ],
            'message' => [
                'Un message est requis',
                'Ce champ ne doit excéder 500 caractères.',
            ],
        ];

        if ($invalid = invalid($data, $rules, $messages)) {
            $alerts = $invalid;
        }

        if (empty($alerts)) {

            try {
                $fromEmail = $site
                    ->content()
                    ->get('forms_quotation_from_email')
                    ->value();
                $toEmail = $site
                    ->content()
                    ->get('forms_quotation_to_email')
                    ->value();

                $ccEmails = [];
                foreach ($site->forms_contact_cc_to_email()->toStructure() as $email) {
                    $ccEmails[] = $email->cc_email_list()->value();
                }

                $kirby->email([
                    'template' => 'quotation-form',
                    'from' => $fromEmail,
                    'replyTo' => $data['email'],
                    'to' => $toEmail,
                    'cc' => $ccEmails,
                    'subject' =>
                        'Nouvelle demande de devis de la part de ' . $data['firstname'] . $data['lastname'] . ' en provenance de ' .
                        $site->title(),
                    'data' => [
                        'formation' => esc($data['formation']),
                        'participants' => esc($data['participants']),
                        'date' => esc($data['date']),
                        'firstname' => esc($data['firstname']),
                        'lastname' => esc($data['lastname']),
                        'societe' => esc($data['societe']),
                        'email' => esc($data['email']),
                        'phone' => esc($data['phone']),
                        'message' => esc($data['message']),
                    ],
                ]);
            } catch (Exception $error) {
                $alerts[] = 'Le formulaire n\'a pas pu être envoyé.';
            }
            if (empty($alerts) === true) {
                $success = 'Votre demande de devis a bien été envoyée.';
                $data = [];
            }
        }

        $form_quotation = [
            'alerts' => $alerts ?? false,
            'data' => $data ?? false,
            'success' => $success ?? false,
        ];
        echo json_encode($form_quotation);
        die();
    } else {
        die('robots');
    }
}

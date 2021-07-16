<?php


if ($kirby->request()->is('POST') && get('form_type') === 'contact_form') {
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6Lf7de0aAAAAAIt5VgeQV_SijIXv0UX-z7-sK4ms';
    $recaptcha_response = get('contact_form_recaptcha_response');
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
            'firstname' => get('contact_firstname'),
            'lastname' => get('contact_lastname'),
            'email' => get('contact_email'),
            'phone' => get('contact_phone'),
            'message' => get('contact_message'),
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
                    ->get('forms_contact_from_email')
                    ->value();
                $toEmail = $site
                    ->content()
                    ->get('forms_contact_to_email')
                    ->value();

                $ccEmails = [];
                foreach ($site->forms_contact_cc_to_email()->toStructure() as $email) {
                    $ccEmails[] = $email->cc_email_list()->value();
                }
                
                $kirby->email([
                    'template' => 'contact-form',
                    'from' => $fromEmail,
                    'replyTo' => $data['email'],
                    'cc' => $ccEmails,
                    'to' => $toEmail,
                    'subject' =>
                        'Nouvelle demande de contact de la part de (' . $data['name'] . ') en provenance de ' .
                        $site->title(),
                    'data' => [
                        'firstname' => esc($data['firstname']),
                        'lastname' => esc($data['lastname']),
                        'email' => esc($data['email']),
                        'phone' => esc($data['phone']),
                        'message' => esc($data['message']),
                    ],
                ]);
            } catch (Exception $error) {
                $alerts[] = 'Le formulaire n\'a pas pu être envoyé.';
            }
            if (empty($alerts) === true) {
                $success = 'Votre message a bien été envoyé.';
                $data = [];
            }
        }

        $form_contact = [
            'alerts' => $alerts ?? false,
            'data' => $data ?? false,
            'success' => $success ?? false,
        ];
        echo json_encode($form_contact);
        die();
    } else {
        die('robots');
    }
}

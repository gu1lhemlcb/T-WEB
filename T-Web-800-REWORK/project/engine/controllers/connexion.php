<?php

return function ($kirby) {

    $user = kirby()->user();
    // SIGN UP
    $valid = true;

    if ($kirby->request()->is('POST') && get('form_type') === 'signup_form') {
        try {
            foreach ($kirby->users() as $client) {
                if (get('login') == $client->email()) {
                    $valid = false;
                }
            }
            if ($valid == true) {
                $kirby->impersonate('kirby');

                $user = $kirby->users()->create([
                    'name'      => get('firstname'),
                    'email'     => get('email'),
                    'password'  => get("password"),
                    'language'  => 'fr',
                    'role'      => 'client',
                    'content'   => [
                      'first_name' => get('firstname'),
                      'last_name' => get('lastname')
                    ]
                ]);
            }
            go('/dashboard');
        } catch (Exception $e) {
            echo 'The user could not be created';
            // optional error message: $e->getMessage();
        }
    }


    // LOGOUT
    if ($user) {
        setcookie('EpiTravel_local', "", time() - 3600);
        unset($_COOKIE["EpiTravel_local"]);
        $user->logout();
    }

    $error = false;

    // LOGIN
    if ($kirby->request()->is('POST') && get('form_type') === 'signin_form') {
        // try to log the user in with the provided credentials
        try {
            $kirby->auth()->login(get('email'), get('password'));

            // redirect to the homepage if the login was successful
            go('/dashboard');
        } catch (Exception $e) {
            $error = true;
        }
    }

    return [
        'error' => $error,
    ];
};

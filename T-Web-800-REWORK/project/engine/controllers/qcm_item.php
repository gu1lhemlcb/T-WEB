<?php

return function ($kirby, $site, $page) {

  $user = $kirby->user();

  if (!$user) {
    return;
  }

  if ($kirby->request()->is('POST') && get('form_type') === 'qcm_form') {
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6Lf7de0aAAAAAIt5VgeQV_SijIXv0UX-z7-sK4ms';
    $recaptcha_response = get('qcm_recaptcha_response');
    $recaptcha = file_get_contents(
      $recaptcha_url .
        '?secret=' .
        $recaptcha_secret .
        '&response=' .
        $recaptcha_response
    );
    $recaptcha = json_decode($recaptcha, true);

    $questions = $page
      ->content()
      ->get('qcm_form')
      ->toStructure();


    $result = 0;
    $maxResult = 0;
    $resultSimp = 0;

    foreach ($questions as $question) {
      foreach ($question->answers()->toStructure() as $answer) {
        if ($answer->answer_value()->value() > 0) {
          $maxResult = $maxResult + $answer->answer_value()->value();
        }
        if (get($question->question()->slug()->value()) == null) {
          $result = $result + 0;
        } else {
          if (in_array($answer->answer_item()->value(), get($question->question()->slug()->value()))) {
            $result = $result + $answer->answer_value()->value();
          }
        }
      }
    }
    
    
    $kirbyRequest = array();
    $kirbyRequest = &$kirby->request()->data();
    
    array_splice($kirbyRequest, 0, 2);

    $myArray = array();


    foreach ($questions as $qcmQuestion) {

      $questionArray = array(
        "question" => $qcmQuestion->content()->question()->value(),
        "answers" => array(),
      );

      foreach ($qcmQuestion->content()->answers()->toStructure() as $qcmAnswerArray) {
        $userResponse = (get($qcmQuestion->content()->question()->slug()->value()));

        array_push($questionArray["answers"], array(
          "answer" => $qcmAnswerArray->content()->answer_item()->value(),
          "selected" => $userResponse != null ? in_array($qcmAnswerArray->content()->answer_item()->value(), $userResponse) :  ""
        ));
      }
      array_push($myArray, $questionArray);
    }
    if ($result <= 0) {
      $resultSimp = 0;
    } else {
      $resultSimp = 20 * $result / $maxResult;
    }
    $resultSimp = number_format($resultSimp, 2, '.', ' ');



    $session_structure = $user->session_in()->yaml();

    $session_structure[0]['qcm_result'] = $resultSimp;

    ////////// FILL DATA ARRAY FOR EMAIL ///////////

    $validatedReview = "Non validée";

    if ($resultSimp >= 14) {
      $validatedReview = "Validée";
    }

    foreach ($session_structure[0]['formation_title'] as $session) {
      $formation = $session;
    }
    ////////////////////////////////////////////////// 

    $user->update([
      'session_in' =>  $session_structure
    ]);

    $alerts = null;

    $data = [
      'firstname' => $user->first_name()->value(),
      'lastname' => $user->last_name()->value(),
      'formation' => $formation,
      'result' => $resultSimp,
      'validatedReview' => $validatedReview,
      'form' => $myArray
    ];

    $trainer_email = $user
      ->session_in()
      ->toStructure()
      ->first()
      ->session_title()
      ->toPage()
      ->trainer_email()
      ->value();


    if ($invalid = invalid($data)) {
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
        foreach ($site->forms_resultats_cc_to_email()->toStructure() as $email) {
          $ccEmails[] = $email->cc_email_list()->value();
        }

        $kirby->email([
          'template' => 'qcm_item',
          'from' => $fromEmail,
          'to' => $trainer_email,
          'cc' => $ccEmails,
          'subject' =>
          'Resultat de ' . $data['firstname'] . ' ' . $data['lastname'] . ' pour la formation : ' . $data['formation'] . ' en provenance de ' .
            $site->title() . '.',
          'data' => [
            'firstname' => esc($data['firstname']),
            'lastname' => esc($data['lastname']),
            'formation' => esc($data['formation']),
            'result' => esc($data['result']),
            'validatedReview' => esc($data['validatedReview']),
            'form' => $data['form'],
          ],
        ]);
      } catch (Exception $error) {
        $alerts[] = 'Le formulaire n\'a pas pu être envoyé.';
      }
      if (empty($alerts) === true) {
        $success = 'Votre message a bien été envoyé.';
        // $data = [];
      }
    }
    // $user->result();
    go($site->children()->template("result")->first()->url());
  }

  ////////////////////////////////////////////////////////////////////////
};

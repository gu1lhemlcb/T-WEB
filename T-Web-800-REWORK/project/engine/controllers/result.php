<?php

return function ($kirby, $page) {

  $user = $kirby->user();
  if ($kirby->request()->is('POST') && get('form_type') === 'delete_user' && $user) {

    // print_r($kirby->root());die;
    try {
      $session_structure = $user->session_in()->yaml();
      if ($session_structure[0]['qcm_result'] != null) {
        rename($user->contentFileDirectory(), $kirby->root('site') . '/_usersbackup_/' . $user->first_name()->value() . '-' . $user->last_name()->value() . '/');
        $user->delete();
      }
    } catch (Exception $e) {
      return;
    }
  }
};

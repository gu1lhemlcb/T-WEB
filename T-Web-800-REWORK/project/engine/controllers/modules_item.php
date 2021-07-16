<?php

return function ($kirby, $site, $page) {

  $user = $kirby->user();

  if ($kirby->request()->is('POST') && get('form_type') === 'update_timer') {
    $timer_state = get("timer_state");

    $tmp_date = date_create($timer_state);
    $date = (date_format($tmp_date, 'H:i:s'));
    
    $session_structure = $user->session_in()->yaml();
    
    foreach ($session_structure[0]['modules_progress'] as &$module) {
      if ($page->id() == $module['modules_title'][0]) {
        $module['module_timer'] = $date;
      }
    }
    
    try {
      $user = $user->update([
        'session_in' =>  $session_structure
      ]);
    } catch (\Throwable $th) {
      print_r("error");
    }
  }

////////////////////////////////////////////////////////////////////////

  if ($kirby->request()->is('POST') && get('form_type') === 'validate_module') {

    $session_structure = $user->session_in()->yaml();

    foreach ($session_structure[0]['modules_progress'] as &$module) {
      if ($page->id() == $module['modules_title'][0]) {
        $module['module_timer'] = '00:00:00';
      }
    }

    try {
      $user->update([
        'session_in' =>  $session_structure
      ]);
    } catch (\Throwable $th) {
      print_r("error");
    }

    go($site->children()->template("modules_index")->first()->url());
  }
  require_once(dirname(__DIR__, 1) . '/forms/validation-module.php');

  return [
    'validatedModule' => $validated_module
  ];
};

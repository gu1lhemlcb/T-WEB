<?php

return function ($kirby, $page) {
  if ($page->template() == 'destinations_category') {
    
    $someData = "Spain";
    $otherData = "city";
    $somethingElse = "10";
    $url = 'http://172.25.0.4:3000/api/travel/locations';
        
    $data = [
      "part_of" => $someData, 
      "tag_labels" => $otherData,
      "count" => $somethingElse
    ];
    $options = [
      'headers' => [
            'Content-Type: application/json'
      ],
      'method' => 'GET',
      'data' => json_encode($data)
    ];

    $response = remote::request($url, $options);

    dump($response);die;

} 
  
  // return ($reponse);
};

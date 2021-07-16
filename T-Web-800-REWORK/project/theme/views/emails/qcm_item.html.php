<p>Bonjour,</p>

<p>Voici les résultats de <?= $firstname . " " . $lastname ?> pour la formation <?= $formation ?> (GLCE formation)</p>

<p>---</p>

<p> Informations :</p>

<p>Prénom + Nom : <b><?= $firstname . " " . $lastname ?></b></p>
<p>Note obtenue : <b><?= $result ?></p></b>
<p>Validée/Non validée : <b><?= $validatedReview ?></p></b>
<p>Reponses du candidat : </p>
<p>

<?php foreach ($form as $question) : ?>
  <p>----------------------</p>
  </br>
  <b><?= $question["question"] ?></b>
  </br>
  <?php foreach ($question["answers"] as $response) : ?>
    <?php if($response["selected"] == 1): ?>
      <b><?= "[x] " ?></b>
    <?php else: ?>
      <?= "[ ] " ?>
    <?php endif ?>
    <?= $response["answer"] ?>
    </br>
  <?php endforeach ?>
<?php endforeach ?>

<p>---</p>
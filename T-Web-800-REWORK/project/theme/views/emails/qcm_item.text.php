Bonjour,

Voici les résultats de <?= $firstname . " " . $lastname ?> pour la formation <?= $formation ?> (GLCE formation)

---

Informations :

Prénom + Nom : <?= $firstname . " " . $lastname ?>
Note obtenue : <?= $result ?>
Validée/Non validée : <?= $validatedReview ?>
Reponses du candidat :

<?php foreach ($form as $question) : ?>
  <?= $question["question"] ?>
  <?= "\n" ?>
  <?php foreach ($question["answers"] as $response) : ?>
    <?php if ($response["selected"] == 1) : ?>
      <?= "[x] "; ?>
    <?php else : ?>
      <?= "[ ] "; ?>
    <?php endif ?>
    <?= $response["answer"] ?>
    <?= "\n" ?>
  <?php endforeach ?>
<?php endforeach ?>

---
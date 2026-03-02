<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $presence = htmlspecialchars($_POST['presence']);
    $nb = htmlspecialchars($_POST['nb_personnes']);
    $infos = htmlspecialchars($_POST['infos']);

    $to = "pinsourir@gmail.com"; // METS TON EMAIL ICI
    $subject = "Confirmation de présence - Mariage";

    $body = "Nom: $nom\n";
    $body .= "Email: $email\n";
    $body .= "Présence: $presence\n";
    $body .= "Nombre de personnes: $nb\n";
    $body .= "Infos complémentaires: $infos\n";

    $headers = "From: mariage@tondomaine.com";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2 style='text-align:center;margin-top:50px;'>Merci pour votre réponse !</h2>";
    } else {
        echo "<h2 style='text-align:center;margin-top:50px;'>Erreur lors de l'envoi. Vérifiez que votre hébergement supporte la fonction mail().</h2>";
    }
}
?>

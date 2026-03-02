<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars($_POST['nom']);
    $email = htmlspecialchars($_POST['email']);
    $presence = htmlspecialchars($_POST['presence']);
    $message = htmlspecialchars($_POST['message']);

    $to = "tonemail@example.com"; // Remplace par ton email
    $subject = "Confirmation de présence - Mariage";
    $body = "Nom: $nom\n";
    $body .= "Email: $email\n";
    $body .= "Présence: $presence\n";
    $body .= "Message: $message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h2>Merci pour votre réponse !</h2>";
    } else {
        echo "<h2>Erreur lors de l'envoi. Réessayez plus tard.</h2>";
    }
}
?>

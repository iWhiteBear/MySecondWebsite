<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza na stronie.";
$to = "borusenko93@gmail.com";
$message = $_POST['msg'];


$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $from . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /MySecondWebsite/#contact?mail_status=sent");
}else {
    header("Location: /MySecondWebsite/#contact?mail_status=error");
}
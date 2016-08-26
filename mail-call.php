<?php

$frm_name  = "Форма дозвона";
$recepient = "webrabsite@gmail.com";
$sitename  = "Весточка с черного поля";
$subject   = "Новая заявка с сайта verstka.tmweb.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formnameone = trim($_POST["formnameone"]);

$message = "
Место размещения формы в шаблоне: $formnameone <br>
Имя обратившегося: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
?>
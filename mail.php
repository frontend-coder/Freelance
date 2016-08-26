<?php

$frm_name  = "Тестовое имя";
$recepient = "webrabsite@gmail.com";
$sitename  = "Весточка с тестового сайта";
$subject   = "Новая заявка с сайта verstka.tmweb.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$formname = trim($_POST["formname"]);

$message = "
Место размещения формы в шаблоне: $formname <br>
Имя обратившегося: $name <br>
Телефон: $phone
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
?>
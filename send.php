<?php
//post глобальный массив
    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    //htmlspecialchars($email) преобразует все символы,которые пользователь попытается добавить в форму
    //urldecode($email) декодирует ссылки(url) если пользователь попытается добавить их в форму
    //trim($email) мы удалим пробелы с начала и конца строки,если таковые имеются 

    $name = trim(urldecode(htmlspecialchars($name))); 
    $email = trim(urldecode(htmlspecialchars($email)));
    $msg = trim(urldecode(htmlspecialchars($msg)));

    /*mail("Bolotin.Vadim.7@yandex.ru","Заявка на создание сайта",
    "<h1>У вас на сайте оставили заявка</h1>
    <br>от пользователя по имени: <b>".$name."</b> 
    <br>  у него былemail: <b>".$email."</b>
    <br> и оставил комментарий ".$msg."
    <br><h3>Поздравляю с новой заявкой!</h3>",
    "From: 1c-webdelopment.ru\r\n","Content-type: text/html\r\n") наша почта/тема письма/само письмо/настройки письма/тип письма(обычное текстовое письмо/html страница  полноценная/наполовину html на половину текст)*/

    if( mail("Bolotin.Vadim.7@yandex.ru","Заявка на создание сайта",
    "<h1>У вас на сайте оставили заявка</h1>
    <br>от пользователя по имени: <b>".$name."</b> 
    <br>  у него былemail: <b>".$email."</b>
    <br> и оставил комментарий ".$msg."
    <br><h3>Поздравляю с новой заявкой!</h3>",
    "From: 1c-webdelopment.ru\r\n","Content-type: text/html\r\n"))
    {
     /*вывод echo файл не может общаться между файломи но может выводить какой то результат действия*/
        echo'{"status": "ok"}';
    }else{
        echo'{"status": "error"}';
    }
?>
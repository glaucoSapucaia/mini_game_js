<?php
    $number_file = (rand(1, 12));

    $efeito = 'audio/efeitos/e' . $number_file . '.mp3';
    $efeito2 = 'random_fase/efeito.mp3';

    $tema = 'audio/temas/t' . $number_file . '.mp3';
    $tema2 = 'random_fase/tema.mp3';

    $cursor = 'cursores/c' . $number_file . '.png';
    $cursor2 = 'random_fase/cursor.png';

    $fundo = 'img/street_img/f' . $number_file . '.jpg';
    $fundo2 = 'random_fase/fundo.jpg';

    copy($efeito, $efeito2);
    copy($tema, $tema2);
    copy($cursor, $cursor2);
    copy($fundo, $fundo2);
?>
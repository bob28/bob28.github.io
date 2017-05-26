<?php
$filename = $_GET['img'];
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . basename($filename));
header('Content-Transfer-Encoding: binary');
header("Expires: Sat, 20 Oct 2015 00:00:00 GMT");
header("Cache-Control: max-age=2692000, public"); 
header("Pragma: cache"); 
ob_clean();
flush();
readfile($filename);
exit;
?>
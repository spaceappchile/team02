<?php
include("elementos/coneccion.php");

$conexion=mysql_connect($host,$user,$pass) or die("Problemas en el server");
mysql_select_db($db,$conexion);

$nom=$_POST['nom'];
$pass=$_POST['pass'];
$ap_pat=$_POST['ap_pat'];
$correo=$_POST['correo'];
$mod=$_POST['mod'];
$tel=$_POST['tel'];
$com_pa=$_POST['com_pa'];
$tw=$_POST['tw'];
$f_ini=date("Y/m/d");

$con="insert into usuario(nombre,pais,password,apellido,email,telescopio,twitter,fechaIngresoSistema)  values('$nom','$com_pa','$pass','$ap_pat','$correo','$mod','$tw',$f_ini)";
mysql_query($con)or die($con.mysql_error());
header("location: ../clawengine/post.php");

?>

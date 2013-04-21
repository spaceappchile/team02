<?php

include("elementos/coneccion.php");

$conexion=mysql_connect($host,$user,$pass) or die("Problemas en el server");
mysql_select_db($db,$conexion);

$tip_av=$_POST['tip_av'];
$ins=$_POST['ins'];
$tam_obj=$_POST['tam_obj'];
$de=$_POST['de'];
$ra=$_POST['ra'];
$ft=$_POST['ft'];
$pa=$_POST['com_pa'];
$ci=$_POST['ciudad'];

if(!empty($de) && !empty($ra)){
	$cre="100%";	
}
if(!empty($de) && empty($ra)){
	$cre="50%";
}
if(empty($de) && !empty($ra)){
	$cre="50%";
}
if(empty($de) && empty($ra)){
	$cre="0%";
}

$fe=date("Y/m/d");
$h_ini=date("h:i:s");
$h_j=date("h");
$con="insert into evento(idUsuario,tipoAvistamiento,formaAvistamiento,estimacionTamano,valoracionObjetiva,fechaCreacion,RA,Decl,hora,pais,ciudad,h_j)  
values('1','$tip_av','$ins','$tam_obj','$cre','$fe','$ra','$de','$h_ini','$pa','$ci','$h_j')";
mysql_query($con)or die($con.mysql_error());
header("location: ../clawengine/post.php");

?>
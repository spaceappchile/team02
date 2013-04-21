<?php
include("elementos/coneccion.php");

$conexion=mysql_connect($host,$user,$pass) or die("Problemas en el server");
mysql_select_db($db,$conexion);

$tabla="<table>";
$tabla.="<tr><td>Evento</td><td>Respuestas</td><td>Total</td><td>% de Concurrencia</td><td>Estado</td>Descripcion<td></td></tr>";
	
$con_ev="select * from evento";
$res_ev=mysql_query($con_ev)or die("8".mysql_error());
while($fila_ev=mysql_fetch_row($res_ev)){
	$con_us_res="select pais,ciudad from usuarios where pais='$fila_ev[19]' ciudad='$fila_ev[20]'";
	$res_us_res=mysql_query($con_us_res)or die("11".mysql_error());
	$t_us_re=count($res_us_res);
	while($fila=mysql_fetch_row()){
		$con_us="select idUsuario from evaluacion where idUsuario='$res_us_res'";
		$res_us=mysql_query()or die("15".mysql_error());
		$t_res_us=count($res_us);
	}
	$tabla.="<tr><form action='tabla.php' method=''><td>".."</td><td>".."</td><td>".."</td><td>".."</td><td>".."</td><input type='submit' value='Detalles'></form><td></td></tr>";
}

?>

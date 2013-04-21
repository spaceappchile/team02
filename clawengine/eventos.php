<head>
<link href="css/table.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php
include("elementos/coneccion.php");

$conexion=mysql_connect($host,$user,$pass) or die("Problemas en el server");
mysql_select_db($db,$conexion);

$tabla="<div align='center'><table>";
$tabla.="<tr><td>Evento</td><td>Respuestas</td><td>Total</td><td>% de Concurrencia</td><td>Estado</td><td>Descripcion</td></tr>";
	
$con_ev="select * from evento";
$res_ev=mysql_query($con_ev)or die($con_ev.mysql_error());
$a=0;
while($fila_ev=mysql_fetch_row($res_ev)){
	$con_us_res="select * from usuario where pais='$fila_ev[19]' and ciudad='$fila_ev[20]'";
	$res_us_res=mysql_query($con_us_res)or die($con_us_res.mysql_error());	
	$b=0;
	$a++;
	while($fila=mysql_fetch_row($res_us_res)){
		$con_us="select idUsuario from evaluacion where idUsuario='$res_us_res'";
		$res_us=mysql_query($con_us)or die("15".mysql_error());
		$b++;
	}
	$tot=($a/100)*$b;
	$tabla.="<tr><td><form action='tabla.php' method='post'><input type='hidden' value='".$fila_ev[0]."'>".$fila_ev[0]."</td><td>".$b."</td><td>".$a."</td><td>".$tot."</td><td>".$fila_ev[22]."</td>
	<td><input type='submit' value='Detalles'></form></td></tr></div>";
}
echo $tabla;
?>

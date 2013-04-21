<head>
<link href="css/table.css" rel="stylesheet" type="text/css" />
</head>
<body>
<?php
include("elementos/coneccion.php");

$conexion=mysql_connect($host,$user,$pass) or die("Problemas en el server");
mysql_select_db($db,$conexion);


$fe_h=date("Y/m/d");
$h=date("h");
$la=$h-1.5;
$lb=$h+1.5;
$con="select * from evento where fechaCreacion='$fe_h' or h_j<=".$lb." and h_j>=".$la." order by hora limit 4";
$res=mysql_query($con)or die($con.mysql_error());

$i=0;
while($fila=mysql_fetch_row($res)){

	$con_usr="select nombre from usuario where idUsuario=".$fila[1];
	$res_usr=mysql_query($con_usr)or die($con_usr.mysql_error());
	$resp_usr=mysql_fetch_row($res_usr);
	$ar="<table border='1'>";
	$ar.="<tr><td>Usuario: ".$resp_usr[0]."</td><td>valoracion".$fila[5]."</td></tr>";
	$ar.="<tr><td>Fecha: ".$fila[7]."</td><td>Hora: ".$fila[18]."</td></tr>";
	$ar.="<tr><td>Pais ".$fila[19]."</td><td>Ciudad: ".$fila[20]."</td></tr>";
	$ar.="</table>";
	
	if($i==0){
		echo "<div align='center'><table border='1'><tr><td>".$ar."</td>";
	}
	
	if($i==1){
		echo "<td>".$ar."</td></tr>";
	}
	
	if($i==2){
		echo "<tr><td>".$ar."</td>";
	}
	
	if($i==3){
		echo "<td>".$ar."</td></tr></div>";
	}
	$i++;
}
?>
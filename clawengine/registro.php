<?php
$p=array("Afganist�n","Albania","Alemania","Andorra","Anguila","Rep�blica Yugoslava de Macedonia","Antigua y Barbuda","Arabia Saud�","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiy�n","Bahamas","Bahr�in","Bangladesh","Barbados","B�lgica","Belice","Ben�n","Bermudas","Bielorrusia","Birmania (actualmente Myanmar) ","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brun�i","Bulgaria","Burkina Faso","Burundi","But�n","Cabo Verde","Camboya","Camer�n","Canad�","Chad","Chequia","Chile","Chile","Chipre","Cisjordania y Franja de Gaza","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos �rabes Unidos","Eritrea","Eslovaquia","Eslovenia","Espa�a","Estados Unidos","Estonia","Estonia","Etiop�a","Filipinas","Finlandia","Fiyi","Francia","Gab�n","Gambia","Georgia","Ghana","Granada","Grecia","Guadalupe","Guadalupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Hait�","Holanda (Pa�ses Bajos)","Honduras","Hong Kong","Hungr�a","India","Indonesia","Ir�n","Iraq","Irlanda","Islandia","Islas Marshall","Islas Salom�n","Israel","Italia","Jamaica","Jap�n","Jordania","Kazajist�n","Kenia","Kirguizist�n","Kiribati","Kuwait","Laos","Lesoto","Letonia","L�bano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Mal�","Malta","Marruecos","Mauritania","Mauricio","M�xico","Micronesia","Moldavia","M�naco","Mongolia","Montenegro","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nueva Zelanda","Nicaragua","N�ger","Nigeria","Niue","Noruega","Om�n","Pa�ses Bajos","Pakist�n","Palau","Palestina","Panam�","Pap�a-Nueva Guinea","Paraguay","Per�","Polonia","Portugal","Puerto Rico","Quatar","Reino Unido","Rep�blica Centroafricana","Rep�blica Democr�tica del Congo","Rep�blica Democr�tica del Congo","Rep�blica Dominicana","Rumania","Rusia","Ruanda","Sahara Occidental","Samoa","San Crist�bal y Nieves","San Marino","San Vicente y las Granadinas","Santa Luc�a","Santo Tom� y Pr�ncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somal�a","Sri Lanka","Sud�frica","Sud�n","Suecia","Suiza","Surinam","Suazilandia","Tailandia","Taiw�n","Tanzania","Tayikist�n","Timor Oriental","Togo","Tonga","Trinidad y Tobago","T�nez","Turkmenist�n","Turqu�a","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekist�n","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Yugoslavia","Zambia","Zimbabue");
?>
<html>
<head>
<title>Registro</title>
<link type="text/css" href="css/menu.css" rel="stylesheet" />
<link href="css/table.css" rel="stylesheet" type="text/css" />
<!--<script language="javascript" src="js/funciones.js"></script>-->
</head>
<body>
<div align="center">
<h1><b>Registro</b></h1>
<form action="reg.php" method="post">
<table border="0">
<tr>
<td width="167">Nombre:</td>
<td width="279" colspan="2"><input type='text' name='nom' id='nom'></td></tr>
<tr><td width="167">Apellido:</td>
<td colspan="2"><input type='text' name='ap_pat' id='ap_pat'></td></tr><tr>
<td >Contrase�a:</td><td colspan="2"><input type="password" name="pass" id="pass"></td></tr>
<tr><td>Repita la Contrase�a:</td><td colspan="2"><input type="password" name="pass_r" id="pass_r"></td></tr>
<tr><td>Correo:</td><td><input type="text" name="correo" id="correo"></td></tr>
<tr><td width="167">Twitter:</td>
<td><input type="text" name="tw" id="tw"></td></tr>
<tr><td>Pais:</td><td>
<select id="com_pa" name="com_pa">
	<?php
	for($i=0;$i<count($p);$i++){
		echo "<option value='".$p[$i]."'>".$p[$i]."</option>";
	}
	?>
</select></td></tr>
<tr><td>Ciudad:</td><td><input type='text' name='ciudad' id='ciudad'></td></tr>

<tr><td>Posee Telescopio:</td><td>
<select id='tel' name="tel">
	<option value=''>--</option>
	<option value='s'>si</option>
	<option value='n'>no</option>
</select></td></tr>
<tr><td>Modelo del Telescopio:</td><td><input type='text' id='mod' name='mod'></td></tr>
<tr><td colspan="2"><div align="center">
  <input type='submit' value="Registrar"></div></td></tr>
</table>
</div>




<?php
$p=array("Afganistán","Albania","Alemania","Andorra","Anguila","República Yugoslava de Macedonia","Antigua y Barbuda","Arabia Saudí","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bahráin","Bangladesh","Barbados","Bélgica","Belice","Benín","Bermudas","Bielorrusia","Birmania (actualmente Myanmar) ","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Chad","Chequia","Chile","Chile","Chipre","Cisjordania y Franja de Gaza","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guadalupe","Guadalupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Haití","Holanda (Países Bajos)","Honduras","Hong Kong","Hungría","India","Indonesia","Irán","Iraq","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguizistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauritania","Mauricio","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nueva Zelanda","Nicaragua","Níger","Nigeria","Niue","Noruega","Omán","Países Bajos","Pakistán","Palau","Palestina","Panamá","Papúa-Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Puerto Rico","Quatar","Reino Unido","República Centroafricana","República Democrática del Congo","República Democrática del Congo","República Dominicana","Rumania","Rusia","Ruanda","Sahara Occidental","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalía","Sri Lanka","Sudáfrica","Sudán","Suecia","Suiza","Surinam","Suazilandia","Tailandia","Taiwán","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Yugoslavia","Zambia","Zimbabue");
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
<td >Contraseña:</td><td colspan="2"><input type="password" name="pass" id="pass"></td></tr>
<tr><td>Repita la Contraseña:</td><td colspan="2"><input type="password" name="pass_r" id="pass_r"></td></tr>
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




<?php
$p=array("Afganistán","Albania","Alemania","Andorra","Anguila","República Yugoslava de Macedonia","Antigua y Barbuda","Arabia Saudí","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bahráin","Bangladesh","Barbados","Bélgica","Belice","Benín","Bermudas","Bielorrusia","Birmania (actualmente Myanmar) ","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Chad","Chequia","Chile","Chile","Chipre","Cisjordania y Franja de Gaza","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guadalupe","Guadalupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Haití","Holanda (Países Bajos)","Honduras","Hong Kong","Hungría","India","Indonesia","Irán","Iraq","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguizistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauritania","Mauricio","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nueva Zelanda","Nicaragua","Níger","Nigeria","Niue","Noruega","Omán","Países Bajos","Pakistán","Palau","Palestina","Panamá","Papúa-Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Puerto Rico","Quatar","Reino Unido","República Centroafricana","República Democrática del Congo","República Democrática del Congo","República Dominicana","Rumania","Rusia","Ruanda","Sahara Occidental","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalía","Sri Lanka","Sudáfrica","Sudán","Suecia","Suiza","Surinam","Suazilandia","Tailandia","Taiwán","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Yugoslavia","Zambia","Zimbabue");
?>
<html>
<head>
<title>Evento</title>
<link type="text/css" href="css/menu.css" rel="stylesheet" />
<link href="css/table.css" rel="stylesheet" type="text/css" />
<!--<script language="javascript" src="js/funciones.js"></script>-->
<style type="text/css">
<!--
.Estilo1 {color: #FF0000}
-->
</style>
</head>
<body>
<div align="center"><h1><b>Registro de Evento</b></h1>
<form action="even.php" method="post">
<table border="0">
<tr><td width="143">Tipo de Avistamiento(*):</td>
<td width="238"><select id="tip_av" name="tip_av"> 
<option value="">--</option>
<option value="directo">Directo</option>
<option value="indirecto">Indirecto</option>
</select></td></tr>
<tr><td>Instrumento(*):</td><td>
<select name="ins">
<option value="">--</option>
<option value="Simple">A simple vista</option>
<option value="Instrumento">Instrumento</option>
</select></td></tr>
<td>Tamaño del Obj(*):</td><td>
<select name="tam_obj">
<option value="">--</option>
<option value="grande">Grande</option>
<option value="mediano">Mediano</option>
<option value="pequeño">Pequeño</option>
</select></td></tr>
<tr><td>Pais:</td><td>
<select id="com_pa" name="com_pa">
	<?php
	for($i=0;$i<count($p);$i++){
		echo "<option value='".$p[$i]."'>".$p[$i]."</option>";
	}
	?>
</select></td></tr>
<tr><td>Ciudad:</td><td><input type='text' name='ciudad' id='ciudad'></td></tr>
<tr><td>Declinacion</td><td><input type="text" id="de" name="de"></td></tr>
<tr><td>R.A</td><td><input type="text" id="ra" name="ra"></td></tr>
<tr><td>Foto</td><td><input type="file" id="ft" name="ft"></td></tr>
<tr><td colspan="2"><div align="center">
  <p>
    <input type="submit" value="Enviar">
  </p>
  <p class="Estilo1">(*)Campos obligatorios  </p>
</div></td></tr>
</table>
</form>
</div>
</body>
</html>
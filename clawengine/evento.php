<?php
$p=array("Afganist�n","Albania","Alemania","Andorra","Anguila","Rep�blica Yugoslava de Macedonia","Antigua y Barbuda","Arabia Saud�","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiy�n","Bahamas","Bahr�in","Bangladesh","Barbados","B�lgica","Belice","Ben�n","Bermudas","Bielorrusia","Birmania (actualmente Myanmar) ","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brun�i","Bulgaria","Burkina Faso","Burundi","But�n","Cabo Verde","Camboya","Camer�n","Canad�","Chad","Chequia","Chile","Chile","Chipre","Cisjordania y Franja de Gaza","Colombia","Comoras","Congo","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos �rabes Unidos","Eritrea","Eslovaquia","Eslovenia","Espa�a","Estados Unidos","Estonia","Estonia","Etiop�a","Filipinas","Finlandia","Fiyi","Francia","Gab�n","Gambia","Georgia","Ghana","Granada","Grecia","Guadalupe","Guadalupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guinea Ecuatorial","Guyana","Hait�","Holanda (Pa�ses Bajos)","Honduras","Hong Kong","Hungr�a","India","Indonesia","Ir�n","Iraq","Irlanda","Islandia","Islas Marshall","Islas Salom�n","Israel","Italia","Jamaica","Jap�n","Jordania","Kazajist�n","Kenia","Kirguizist�n","Kiribati","Kuwait","Laos","Lesoto","Letonia","L�bano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Macedonia","Madagascar","Malasia","Malaui","Maldivas","Mal�","Malta","Marruecos","Mauritania","Mauricio","M�xico","Micronesia","Moldavia","M�naco","Mongolia","Montenegro","Mozambique","Myanmar","Namibia","Nauru","Nepal","Nueva Zelanda","Nicaragua","N�ger","Nigeria","Niue","Noruega","Om�n","Pa�ses Bajos","Pakist�n","Palau","Palestina","Panam�","Pap�a-Nueva Guinea","Paraguay","Per�","Polonia","Portugal","Puerto Rico","Quatar","Reino Unido","Rep�blica Centroafricana","Rep�blica Democr�tica del Congo","Rep�blica Democr�tica del Congo","Rep�blica Dominicana","Rumania","Rusia","Ruanda","Sahara Occidental","Samoa","San Crist�bal y Nieves","San Marino","San Vicente y las Granadinas","Santa Luc�a","Santo Tom� y Pr�ncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somal�a","Sri Lanka","Sud�frica","Sud�n","Suecia","Suiza","Surinam","Suazilandia","Tailandia","Taiw�n","Tanzania","Tayikist�n","Timor Oriental","Togo","Tonga","Trinidad y Tobago","T�nez","Turkmenist�n","Turqu�a","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekist�n","Vanuatu","Vaticano","Venezuela","Vietnam","Yemen","Yibuti","Yugoslavia","Zambia","Zimbabue");
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
<td>Tama�o del Obj(*):</td><td>
<select name="tam_obj">
<option value="">--</option>
<option value="grande">Grande</option>
<option value="mediano">Mediano</option>
<option value="peque�o">Peque�o</option>
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
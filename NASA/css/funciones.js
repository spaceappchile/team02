// JavaScript Document
function ajaxObject() {
	var ajaxObject=false;
	try {
		/* DIFERENT BROWSERS */
		ajaxObject = new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {
		try {
			/* IE */
			ajaxObject = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch (E) {
			ajaxObject = false;
		}
	}
	
	if (!ajaxObject && typeof XMLHttpRequest!='undefined') {
		ajaxObject = new XMLHttpRequest();
	}
	return ajaxObject;
}

function nuevoAjax()
{ 
    var xmlhttp=false; 
    try 
    { 
        xmlhttp=new ActiveXObject("Msxml2.XMLHTTP"); 
    }
    catch(e)
    { 
        try
        { 
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP"); 
        } 
        catch(E) { xmlhttp=false; }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') { xmlhttp=new XMLHttpRequest(); } 

    return xmlhttp; 
}

function carga_mes(){
	var mes=document.getElementById("mes").value;
	location.href="t_asistencia.php?mes="+mes;
	}

function carga_dia(){
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	location.href="t_asistencia.php?mes="+mes+"&dia="+dia;
}

function enviar_datos(){
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	var total=document.getElementById("total").value;
	var txt_id=mes+dia;
	var pos=document.getElementById(txt_id).value;
	var vasis="";
	//var cad=document.getElementById(cadena);
	var cadena="";
	//validar si no existen campos vacios
	vasis=true;
	for (i=1;i<=total;i++){
		txt_id_trab=i+","+pos;
		var asis=document.getElementById(txt_id_trab);
		if(asis.value==""){
			asis.style.border="1px solid red";	
			vasis=vasis && false;
		}else{
			asis.style.border = "1px solid black";	
			vasis=vasis && true;
		}

	//ingresar datos a una cadena
	}
	cadena=total+";";
	for (i=1;i<=total;i++){
		txt_id_trab="id"+i
		txt_asis=i+","+pos;
		id_trab=document.getElementById(txt_id_trab).value;
		cadena+=id_trab+";";
		asis=document.getElementById(txt_asis).value;
		cadena+=asis+";";
	}
	document.getElementById("cadena").value=cadena;
		//mostrar cadena
//	alert(cadena);
	if(vasis){
		document.forms["asistencia"].submit();
	}else{
		alert("Falta Asistencias Marcadas en Color rojo");
	}
}

function cargar_mes(){
	var mes=document.getElementById("mes").value;
	var ano=document.getElementById("ano").value;
	location.href="ing_periodo.php?mes="+mes+"&ano="+ano;
}

function traer_ing_ped (){
	var mes=document.getElementById("mes");
	var ano=document.getElementById("ano");
	var dia_i=document.getElementById("dia_i");
	var mes_i=document.getElementById("mes_i");
	var ano_i=document.getElementById("ano_i");
	var dia_f=document.getElementById("dia_f");
	var mes_f=document.getElementById("mes_f");
	var ano_f=document.getElementById("ano_f");
	var vmes="";
	var vano="";
	var vdia_i="";
	var vmes_i="";
	var vano_i="";
	var vdia_f="";
	var vmes_f="";
	var vano_f="";
	
	if(mes.value=="Mes"){
		mes.style.border="1px solid red";	
		vmes=false;
	}else{
		mes.style.border = "1px solid black";	
		vmes=true;
	}
	
	if(ano.value=="Ano"){
		ano.style.border="1px solid red";	
		vano=false;
	}else{
		ano.style.border = "1px solid black";	
		vano=true;
	}
	
	if(dia_i.value=="Dia"  || dia_i.value==""){
		dia_i.style.border="1px solid red";	
		vdia_i=false;
	}else{
		dia_i.style.border = "1px solid black";	
		vdia_i=true;
	}
	
	if(mes_i.value=="Mes"){
		mes_i.style.border="1px solid red";	
		vmes_i=false;
	}else{
		mes_i.style.border = "1px solid black";	
		vmes_i=true;
	}
	if(ano_i.value=="Ano"){
		ano_i.style.border="1px solid red";	
		vano_i=false;
	}else{
		ano_i.style.border = "1px solid black";	
		vano_i=true;
	}
	
	if(dia_f.value=="Dia" || dia_f.value==""){
		dia_f.style.border="1px solid red";	
		vdia_f=false;
	}else{
		dia_f.style.border = "1px solid black";	
		vdia_f=true;
	}
	
	if(mes_f.value=="Mes"){
		mes_f.style.border="1px solid red";	
		vmes_f=false;
	}else{
		mes_f.style.border = "1px solid black";	
		vmes_f=true;
	}
	if(ano_f.value=="Ano"){
		ano_f.style.border="1px solid red";	
		vano_f=false;
	}else{
		ano_f.style.border = "1px solid black";	
		vano_f=true;
	}
	
	if(vmes && vano && vdia_i && vmes_i && vano_i && vdia_f && vmes_f && vano_f){
		document.forms["periodo"].submit();
	}
}

function blanco(cual){
	txt_id="dia_"+cual;
		var dia_i=document.getElementById(txt_id);
		if (dia_i.value=='Dia'){
			dia_i.value="";
		}
}

function firma(){
	alert("firma");
}

function cambia(id1,id2){
	var aes=0; var pes=0; var ees=0; var les=0; var xes=0;
	var a=document.getElementById("total_a");var p=document.getElementById("total_p");var e=document.getElementById("total_e");var l=document.getElementById("total_l");var x=document.getElementById("total_x");
	total=document.getElementById("total");
	var id=id1+','+id2;
		var obj=document.getElementById(id);
		obj.value=document.getElementById(id).value.toUpperCase();
	var id_txt="";
	for(i=1;i<=total.value;i++){
		id_txt=i+','+id2;
		dato=document.getElementById(id_txt);
		if(dato.value.toUpperCase()=="A"){aes++;}
		if(dato.value.toUpperCase()=="P"){pes++;}
		if(dato.value.toUpperCase()=="E"){ees++;}
		if(dato.value.toUpperCase()=="L"){les++;}
		if(dato.value.toUpperCase()=="X"){xes++;}
	}
	a.value=aes;
	p.value=pes;
	e.value=ees;
	l.value=les;	
	x.value=xes;
}

function validar(e) {

    tecla = (document.all)?e.keyCode:e.which;
    if (tecla==8) return true;
		if(tecla==97 || tecla==112 || tecla==101 || tecla==108 || tecla==120){
			tecla=tecla-32;
		}
	patron = /[APELX]/;
    te = String.fromCharCode(tecla);
    return patron.test(te); 
	

	
} 
function carga_datos1(cual){
	var dato=document.getElementById(cual).value;
	location.href="m_personal.php?cual="+cual+"&dato="+dato;
}

function envia_formulario(){
	var dato=document.getElementById("txt_codigo2");
	if (dato.value!=''){
		dato.style.border = "1px solid black";	
		cod=true;
	}else{
		dato.style.border = "1px solid red";	
		cod=false;		
	}
	
	if(cod){
		document.forms["formulario"].submit();
	}else{
		alert("Revisar campos en Rojo");	
	}
}

function calulo_variacion(){
var total_varia=0;
var total_suple=0;
var total_general=0;
cantidad=document.getElementById("cantidad").value;
conta=1;
	while(conta<=cantidad){ 
		var txtvaria="variacion"+conta;
		var txtsuple="suple"+conta;	
		var txtcod="codigo"+conta;
		var txttotal="total"+conta;
		var txtvsuple="vsuple"+conta;	
		var txtvtotal="vtotal"+conta;	
		var txtvtotal1="vtotal1"+conta;	
		
		//txtcod=document.getElementById(txtcod).value;
		txtvaria=document.getElementById(txtvaria);
		alert(txtvaria);
		/*if(txtvaria.value==''){
			total_varia+=0;
		}else{
			total_varia+=parseInt(txtvaria.value);
		}
		txtvsuple=document.getElementById(txtvsuple).value;
		
		total_suple+=parseInt(txtvsuple);
        txtvtotal=document.getElementById(txtvtotal);		
		txtvtotal1=document.getElementById(txtvtotal1);	
		if (txtvaria.value.length==0){
			txtvtotal.value=txtvsuple;
			txtvtotal1.value=txtvsuple;
			total_general+=parseInt(txtvtotal.value);
			txtvaria.value=0;
		}else{
			txtvtotal.value=parseInt(txtvsuple)+parseInt(txtvaria.value);
			txtvtotal1.value=parseInt(txtvsuple)+parseInt(txtvaria.value);
			total_general+=parseInt(txtvtotal.value);
		}*/
	conta++;
	}
/*	document.getElementById("total_otros").value=total_varia;		
	document.getElementById("total_suple").value=total_suple;
	document.getElementById("total_general").value=total_general;	*/
}

function enviar_adelanto(tipo){
	document.getElementById("tipo_mov").value=1;
	if(document.getElementById("estado").value=='C' && tipo==''){ 
		alert("Suple Cerrado");
	}else{
		document.forms["form1"].submit();
	}
}

function cerrar_adelanto(cual){
	if(cual==1){
		document.getElementById("tipo_mov").value=2;
		document.forms["form1"].submit();
	}else if(cual==2){
		document.getElementById("tipo_mov").value=3;		
		document.forms["form1"].submit();
	}else if(cual==3){
		document.getElementById("tipo_mov").value=4;
		document.forms["form1"].submit();
	}
}

function salir_adelanto(){
	document.forms["form2"].submit();
}

function cambia_suple(){
	dato=document.getElementById("n_suple").value;
	location.href="suples.php?m="+dato;
}

function compara_clave(){
var clave1=document.getElementById("clave1");
var clave2=document.getElementById("clave2");
var valida=document.getElementById("valida");
	if (clave1.value!=clave2.value || (clave1.value=='' && clave2.value=='')){
		clave1.style.border="1px solid red";		
		clave2.style.border="1px solid red";		
		validax=false;
	}else{
		clave1.style.border = "1px solid black";	
		clave2.style.border = "1px solid black";	
		validax=true;		
	}	
	if(valida.value=="true" && validax){
		document.forms["form1"].submit();
	}else{
		alert("Revisar Campos en Rojo");
	}
}

function clave_antigua(){
	var clavemd5=document.getElementById("txt_recuperada");
	var clave=document.getElementById("txt_clave");
	var valida=document.getElementById("valida");
		var ajax=nuevoAjax();
		ajax.open("POST", "compara_pass.php", true);
    	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	ajax.send("md5="+clavemd5.value+"&pass="+clave.value);
		ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						if(ajax.responseText){
							clave.style.border = "1px solid black";	
							valida.value="true";
						}else{
							clave.style.border="1px solid red";
							valida.value="false";
						}
					}
				}
			}
}

function des_seleccion(){
var total=document.getElementById('total');
var txt_id="";
	for (j=1;j<=total.value;j++){
		for(i=1;i<=8;i++){
			txt_id=j+""+i;
			var fila=document.getElementById(txt_id);
			fila.style.backgroundColor="#FFFFFF";
		}	
	}
}
function marca(dato,estado){
des_seleccion();
	var txt_id="";
	for(i=1;i<=8;i++){
		txt_id=dato+""+i;
		var fila=document.getElementById(txt_id);
		fila.style.backgroundColor="#C96"
	}	
carga_datos(dato);
codigo=document.getElementById('codigo').value
guarda_otros(codigo,"carga",estado);
guarda_lic(codigo,"carga",estado);
}

function carga_datos(dato){

	var campos="codigo,nombre,base,dias,extras,bonos,monto,tipo";
	var txt_cajon=campos.split(',');
		for(i=1;i<=8;i++){
			txt_id="f"+dato+","+i;
			var fila=document.getElementById(txt_id).value;
			var pos=txt_cajon[i-1];
			document.getElementById(pos).value=fila;
			
		}	
	document.getElementById('pos').value=dato
	document.getElementById("dias").select();	
}

function almacenar(){
	//recuperar datos de modificacion
	var opciones="dias,extras,bonos,monto,tipo";
	var matriz=new Array(6) 
	var arreglo=opciones.split(',');
	var codigo=document.getElementById('codigo');
	var pos=document.getElementById('pos').value;
	var valida=true;
	if ((codigo.value)!=''){
		matriz[0]=codigo.value;
		for(i=0;i<=4;i++){
			dato=document.getElementById(arreglo[i]);
			if(dato.value!=''){
				dato.style.border="1px solid black";
				matriz[i+1]=dato.value;
				valida=valida && true;
			}else{
				dato.style.border="1px solid red";
				valida=valida && false;
			}	
		}
		if(valida){
			almacena_server(matriz,pos);
			siguiente(pos);
			setTimeout('recalcula()',700)
	//		recalcula();
		}else{
			alert("Revise Campos de Color Rojo");
		}	
	}else{
		alert("Seleccione Trabajador");
	}
}

function almacena_server(mat,pos){
	mat1=mat[0]+';'+mat[1]+';'+mat[2]+';'+mat[3]+';'+mat[4]+';'+mat[5];
	id_txt1="txt"+pos+",4";
	id_txt2="txt"+pos+",5";
	id_txt3="txt"+pos+",6";
	id_txt4="txt"+pos+",7";
	id_txt5="txt"+pos+",8";
	id_txt11="f"+pos+",4";
	id_txt21="f"+pos+",5";
	id_txt31="f"+pos+",6";
	id_txt41="f"+pos+",7";
	id_txt51="f"+pos+",8";
	var ajax=nuevoAjax();
		ajax.open("POST", "guarda_liqui.php", true);
    	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	ajax.send("arreglo="+mat1);
		ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						carga_valores(ajax.responseText);
					}
				}
			}
}

function carga_valores(dato){
		cuales=dato.split(';');
		document.getElementById(id_txt1).innerHTML=cuales[0];
		document.getElementById(id_txt2).innerHTML=cuales[1];
		document.getElementById(id_txt3).innerHTML=cuales[2];
		document.getElementById(id_txt4).innerHTML=cuales[3];
		document.getElementById(id_txt5).innerHTML=cuales[4];
		document.getElementById(id_txt11).value=cuales[0];
		document.getElementById(id_txt21).value=cuales[1];
		document.getElementById(id_txt31).value=cuales[2];
		document.getElementById(id_txt41).value=cuales[3];
		document.getElementById(id_txt51).value=cuales[4];	
}

function recalcula(){

	total=document.getElementById('total').value;
	/* sumatoria dias*/
	var suma=0;
	for (i=1;i<=total;i++){
		id_txt="f"+i+",4";
		if(document.getElementById(id_txt).value!=''){
			suma+=parseInt(document.getElementById(id_txt).value);
		}
	}
	document.getElementById('total_dias').value=suma;
	
	/* sumatoria horas*/
	var suma=0;
	for (i=1;i<=total;i++){
		id_txt="f"+i+",5";
		if(document.getElementById(id_txt).value!=''){
			suma+=parseInt(document.getElementById(id_txt).value);
		}
	}
	document.getElementById('total_horas').value=suma;
	
	/* sumatoria bono*/
	var suma=0;
	for (i=1;i<=total;i++){
		id_txt="f"+i+",6";
		if(document.getElementById(id_txt).value!=''){
			suma+=parseInt(document.getElementById(id_txt).value);
		}
	}
	document.getElementById('total_bono').value=suma;
	
	/* sumatoria monto*/
	var suma=0;
	for (i=1;i<=total;i++){
		id_txt="f"+i+",7";
		if(document.getElementById(id_txt).value!=''){
			suma+=parseInt(document.getElementById(id_txt).value);
		}
	}
	document.getElementById('total_monto').value=suma;
}

function siguiente(pos){
	total=document.getElementById('total').value;
	if (parseInt(total)>parseInt(pos)){
		marca(parseInt(pos)+1);
		document.getElementById("dias").select();
	}else{
		alert("Ultimo Trabajador");
	}
}

function agrega_otros(estado){
mat=new Array(3); 
cod=true;
codigo=document.getElementById("codigo");
cargo=document.getElementById("cb_cargo1");
valor=document.getElementById("valor1");
	if(codigo.value!=''){
		mat[0]=codigo.value;
	}else{
		alert("seleccione Trabajador");
		cod=false;
	}
	if (cargo.value!=''){
		mat[1]=cargo.value;
		cargo.style.border="1px solid black";
		car=true;
	}else{
		cargo.style.border="1px solid red";
		car=false;
	}
	if (valor.value!=''){
		mat[2]=valor.value;
		valor.style.border="1px solid black";
		val=true;
	}else{
		valor.style.border="1px solid red";
		val=false;
	}	
	if(car && cod && val){
		guarda_otros(mat,"nuevo",estado);
		
	}else{
		alert("Revise Campos de Color Rojo");
	}
}

function guarda_otros(mat,cual,estado){
	var ajax=nuevoAjax();
	ajax.open("POST", "php/guarda_otros.php", true);
   	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   	ajax.send("mat="+mat+"&cual="+cual+"&estado="+estado);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			if(ajax.status == 200) {
				document.getElementById("otros").innerHTML=ajax.responseText;
			}
		}
	}
}

function agrega_licencia(estado){
mat=new Array(4); 
cod=true;
codigo=document.getElementById("codigo");
fini=document.getElementById("fini_lic");
ffin=document.getElementById("ffin_lic");
cod_mov=document.getElementById("cod_lic");
if(codigo.value!=''){
		mat[0]=codigo.value;
	}else{
		alert("seleccione Trabajador");
		cod=false;
	}
//alert(fini.value+"-"+ffin.value+"-"+cod_mov.value);
	if (cod_mov.value!=''){
		mat[1]=cod_mov.value;
		cod_mov.style.border="1px solid black";
		lic=true;
	}else{
		cod_mov.style.border="1px solid red";
		lic=false;
	}	

if (fini.value!=''){
		mat[2]=fini.value;
		fini.style.border="1px solid black";
		ini=true;
	}else{
		fini.style.border="1px solid red";
		ini=false;
	}
	if (ffin.value!=''){
		mat[3]=ffin.value;
		ffin.style.border="1px solid black";
		fin=true;
	}else{
		ffin.style.border="1px solid red";
		fin=false;
	}	
	if(ini && cod && fin && lic){
		guarda_lic(mat,"nuevo",estado);
	}else{
		alert("Revise Campos de Color Rojo");
	}
}
function guarda_lic(mat,cual,estado){
var ajax=nuevoAjax();
	ajax.open("POST", "php/guarda_lic.php", true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("mat="+mat+"&cual="+cual+"&estado="+estado);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			if(ajax.status == 200) {
				document.getElementById("licencia").innerHTML=ajax.responseText;
			}
		}
	}
}

function elimina_fila(id,tabla,estado){
mat=new Array(2); 
mat[0]=document.getElementById('codigo').value;
mat[1]=id; 
	if(tabla==1){
		guarda_otros(mat,'eliminar',estado)
	}else{
		guarda_lic(mat,'eliminar',estado)
	}
//	alert(id+" "+tabla);
}   

function onlyNumbersDano(evt){
	var keyPressed = (evt.which) ? evt.which : event.keyCode
    return !(keyPressed > 31 && (keyPressed < 48 || keyPressed > 57));
}

function imprimir_suple(obra,suple){
	location.href="imp_suple.php?obra="+obra+"&suple="+suple; 
}

function cerrar_mes(){
	var i=1;
	total=document.getElementById("total").value;
	valida=true;
	for(i=1;i<=total;i++){
		dias=document.getElementById("f"+i+",4").value;	
		if (dias=='' || dias=='0'){
			valida=valida && false;
		}
	}
	if(valida){
	    document.forms["cerrar"].submit();
	}else{
		alert("Faltan dias Trabajados en 1 o mas Personas");
	}
}

function imprimir_liq(obra){
	location.href="imp_liqui.php?obra="+obra; 
}
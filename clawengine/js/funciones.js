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

function carga_mes(obra){
	var mes=document.getElementById("mes").value;
	location.href="t_asistencia.php?mes="+mes+"&obra="+obra;
	}

function carga_dia(obra){
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	location.href="t_asistencia.php?mes="+mes+"&dia="+dia+"&obra="+obra;
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
	var aes1=0; var pes1=0; var ees1=0; var les1=0; var xes1=0;
	var a=document.getElementById("total_a");var p=document.getElementById("total_p");var e=document.getElementById("total_e");var l=document.getElementById("total_l");var x=document.getElementById("total_x");
	var a1=document.getElementById("total_sub_a");var p1=document.getElementById("total_sub_p");var e1=document.getElementById("total_sub_e");var l1=document.getElementById("total_sub_l");var x1=document.getElementById("total_sub_x");
	total_general=document.getElementById("total_general");
	total_sub_general=document.getElementById("total_sub_general");
	total=document.getElementById("total");
	
	var id=id1+','+id2;
		var obj=document.getElementById(id);
		obj.value=document.getElementById(id).value.toUpperCase();
	var id_txt="";
	paso1=0;
	paso11=0;	
	for(i=1;i<=total.value;i++){
		tipo="tipo"+i;
		id_txt=i+','+id2;
		dato=document.getElementById(id_txt);
		if(document.getElementById(tipo).value==0){
			if(dato.value.toUpperCase()=="A"){aes++;}
			if(dato.value.toUpperCase()=="P"){pes++;}
			if(dato.value.toUpperCase()=="S"){ees++;}
			if(dato.value.toUpperCase()=="L"){les++;}
			if(dato.value.toUpperCase()=="X"){xes++;}
			paso1++;
		}else{
			if(dato.value.toUpperCase()=="A"){aes1++;}
			if(dato.value.toUpperCase()=="P"){pes1++;}
			if(dato.value.toUpperCase()=="S"){ees1++;}
			if(dato.value.toUpperCase()=="L"){les1++;}
			if(dato.value.toUpperCase()=="X"){xes1++;}
			paso11++;
		}
	}
	a.value=aes;
	p.value=pes;
	e.value=ees;
	l.value=les;	
	x.value=xes;
	a1.value=aes1;
	p1.value=pes1;
	e1.value=ees1;
	l1.value=les1;	
	x1.value=xes1;
	total_general.value=paso1;
	total_sub_general.value=paso11;
}

function validar(e) {

    tecla = (document.all)?e.keyCode:e.which;
	if (tecla==8 || tecla==0) return true;
		if(tecla==97 || tecla==112 || tecla==115 || tecla==108 || tecla==120){
			tecla=tecla-32;
		}
	patron = /[APSLX]/;
    te = String.fromCharCode(tecla);
    return patron.test(te); 
	

	
} 
function carga_datos1(cual,caso){
var dato=document.getElementById(cual).value;
var obra=document.getElementById('txt_obra').value;
	if(caso==1){
		location.href="m_personal.php?cual="+cual+"&dato="+dato+"&obra="+obra;
	}else{
		var ajax=nuevoAjax();
		ajax.open("POST", "valida_codigo.php", true);
    	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	ajax.send("codigo="+obra+dato);
		ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						if(ajax.responseText=='true'){
							if(confirm('Codigo Utilizado, Cargar informacion del Trabajador ??')){
								var dato=document.getElementById(cual).value;
								location.href="m_personal.php?cual="+cual+"&dato="+dato;
							}
						}
					}
				}
		}
	}
}

function envia_formulario(){
	var contrato=true;	
	var t_contrato=document.getElementById("t_contrato");
	var ter_contrato=document.getElementById("txt_tcontrato");	
	var fter=document.getElementById("txt_ftermino");	
	ter_contrato.style.border = "1px solid black";
	fter.style.border = "1px solid black";
	if(t_contrato.value=="FAENA"){
		if(ter_contrato.value==''){
			ter_contrato.style.border = "1px solid red";
			contrato=false;
		}
	}
	if(t_contrato.value=="A PLAZO"){
		if(ter_contrato.value=='' || fter.value==''){
			ter_contrato.style.border = "1px solid red";
			fter.style.border = "1px solid red";
			contrato=false;
		}
	}
	
	var txt_paterno=document.getElementById("txt_paterno");
	var txt_materno=document.getElementById("txt_materno");
	var txt_nombre1=document.getElementById("txt_nombre1");
	var txt_fingreso=document.getElementById("txt_fingreso");
	var txt_cuenta=document.getElementById("txt_cuenta");
	var txt_banco=document.getElementById("txt_banco");

var dato_ban=false; 
if(txt_cuenta.value=='Abono Credichile'){
	if(txt_banco.value==4){
	   dato_ban=true;
   	   txt_banco.style.border = "1px solid black";	
	}else{
	   dato_ban=false;
	   txt_banco.style.border = "1px solid red";	
	}
}

if(txt_cuenta.value=='Pago bancoestado'){
	if(txt_banco.value==10){
	   dato_ban=true;
	   txt_banco.style.border = "1px solid black";		   
	}else{
	   dato_ban=false;
	   txt_banco.style.border = "1px solid red";		   
	}
}


if(txt_cuenta.value=='Cta.Cte.'){
	dato_ban=true;
}

	var ingreso;
	var pater;
	var mater;
	var ingreso;	
	var dato=document.getElementById("txt_codigo2");
	var profesion=document.getElementById("cb_profesion");
	var rango=profesion.value.split(';');
	var entra=false;
	if (dato.value!=""){
		dato.style.border = "1px solid black";	
		cod=true;
	}else{
		dato.style.border = "1px solid red";	
		cod=false;		
	}
	valida();
	var rut=document.getElementById("val_rut");
	var rut1;
	if (rut.value=='true'){
		rut1=true;
	}else{
		rut1=false;		
	}
	if(profesion.value!=0){
		profesion.style.border="1px solid black";
		entra=true;
	}else{
		profesion.style.border="1px solid red";
		alert("rojo");
		entra=false;
	}
	
	if (txt_paterno.value!=""){
		txt_paterno.style.border = "1px solid black";	
		pater=true;
	}else{
		txt_paterno.style.border = "1px solid red";	
		pater=false;		
	}
	
	if (txt_cuenta.value!=""){
		txt_cuenta.style.border = "1px solid black";	
		dato_ban=true;
	}else{
		txt_cuenta.style.border = "1px solid red";	
		dato_ban=false;		
	}	
	
	if (txt_materno.value!=""){
		txt_materno.style.border = "1px solid black";	
		mater=true;
	}else{
		txt_materno.style.border = "1px solid red";	
		mater=false;		
	}
	
	if (txt_nombre1.value!=""){
		txt_nombre1.style.border = "1px solid black";	
		nombre=true;
	}else{
		txt_nombre1.style.border = "1px solid red";	
		nombre=false;		
	}

	if (txt_fingreso.value!=""){
		txt_fingreso.style.border = "1px solid black";	
		ingreso=true;
	}else{
		txt_fingreso.style.border = "1px solid red";	
		ingreso=false;		
	}
	
	//alert(cod+" "+rut1+" "+entra+" "+pater+" "+mater+" "+nombre+" "+ingreso+" "+dato_ban+" "+contrato);
	if(cod && rut1 && entra && pater && mater && nombre && ingreso && dato_ban && contrato){
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
		var txtid="id"+conta;
		var txtcodigo="codigo"+conta;
		var txtvariacion="variacion"+conta;
		var txtvsuple="suple"+conta;	
		var txttotal="total"+conta;	
		var txtnombre="nombre"+conta;	
		var txttotalg="vtotalg"+conta;	

		document.getElementById(txtvsuple).value=replaceAll(document.getElementById(txtvsuple).value);		
		txtcod=document.getElementById(txtcodigo).value;
		txtvariap=document.getElementById(txtvariacion);
		txtsuplep=document.getElementById(txtvsuple);	
		txttotalp=document.getElementById(txttotal);		
		txttotalgp=document.getElementById(txttotalg);
		txttotalp.value=parseInt(replaceAll(txtvariap.value))+parseInt(replaceAll(txtsuplep.value));
		txttotalgp.value=parseInt(replaceAll(txtvariap.value))+parseInt(replaceAll(txtsuplep.value));
		/*total otros*/
		total_varia+=parseInt(replaceAll(txtvariap.value));
		total_suple+=parseInt(replaceAll(txtsuplep.value));
		total_general+=parseInt(replaceAll(txtvariap.value))+parseInt(replaceAll(txtsuplep.value));

	conta++;
	}
	document.getElementById("total_otros").value=replaceAll(total_varia);		
	document.getElementById("total_suple").value=replaceAll(total_suple);
	document.getElementById("total_general").value=replaceAll(total_general);
}

function replaceAll(text){
var busca=".";
var reemplaza="";
while (text.toString().indexOf(busca) != -1)
      text = text.toString().replace(busca,reemplaza);
return text;
}

function enviar_adelanto(tipo){
var total=document.getElementById("cantidad").value;
var paso=true;
var txt_valor;
var txt_suple;
	for(i=1;i<=total;i++){
		txt_valor="com"+i;		
		txt_suple="suple"+i;
		
		
		if(parseFloat(document.getElementById(txt_valor).value)>=parseFloat(document.getElementById(txt_suple).value)){
            document.getElementById(txt_suple).style.border = "1px solid black";
			paso=paso && true;
		}else{
			document.getElementById(txt_suple).style.border = "1px solid red";	
			paso=paso && false;
		}
	}
	document.getElementById("tipo_mov").value=1;
	if(document.getElementById("estado").value=='C' && tipo==''){ 
		alert("Suple Cerrado");
	}else{
		if(!paso){
			alert("Suple Supera Maximo, En Campos de color rojo");
		}else{
			document.forms["form1"].submit();
		}
	}
}

function cerrar_adelanto(cual){ 
if (confirm("Desea Cerrar el Suple")){
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
}

function salir_adelanto(){
	document.forms["form2"].submit();
}

function cambia_suple(obra){
	dato=document.getElementById("n_suple").value;
	location.href="suples.php?obra="+obra+"&m="+dato;
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
		for(i=1;i<=9;i++){
			txt_id=j+""+i;
			var fila=document.getElementById(txt_id);
			fila.style.backgroundColor="#FFFFFF";
		}	
	}
}
function marca(dato,estado,obra){
des_seleccion();
	var txt_id="";
	for(i=1;i<=9;i++){
		txt_id=dato+""+i;
		var fila=document.getElementById(txt_id);
		fila.style.backgroundColor="#C96"
	}	
	
carga_datos(dato);
codigo=document.getElementById('codigo').value
guarda_otros(codigo,"carga",estado,obra);
guarda_lic(codigo,"carga",estado,obra);
}

function carga_datos(dato){

	var campos="codigo,nombre,base,dias,extras,descuento,monto,tipo";
	var txt_cajon=campos.split(',');
		for(i=1;i<=8;i++){
			if(i>=7){
				if(i==7){
					txt_id="f"+dato+","+8;
				}
				if(i==8){
					txt_id="f"+dato+","+9;
				}
			}else{
				txt_id="f"+dato+","+i;
			}
			var fila=document.getElementById(txt_id).value;
			var pos=txt_cajon[i-1];
//			alert(pos);
			document.getElementById(pos).value=fila;
			
		}	
	document.getElementById('pos').value=dato;
	document.getElementById("dias").select();	
}

function almacenar(){
	//recuperar datos de modificacion
	var pos=document.getElementById('pos').value;	
	var codigo=document.getElementById('codigo');	
	var matriz=new Array(6) 
	if ((codigo.value)!=''){
		if(document.getElementById("tipo").value=='L'){
			var opciones="dias,extras,monto,tipo";
			var arreglo=opciones.split(',');
			var valida=true;
			matriz[0]=codigo.value;
			for(i=0;i<=3;i++){
				dato=document.getElementById(arreglo[i]);
				if(i==0 || i==1){
					if(i==0){
						if(parseInt(dato.value)>parseInt('31') || dato.value==''){ //
							dato.style.border="1px solid red";
							valida=valida && false;
						}else{
							dato.style.border="1px solid black";
							matriz[i+1]=dato.value;
							valida=valida && true;				
						}
					} 
					if(i==1){
						if(parseInt(dato.value)>parseInt('200') || dato.value==''){ 
							dato.style.border="1px solid red";
							valida=valida && false;
						}else{
							dato.style.border="1px solid black";
							matriz[i+1]=dato.value;
							valida=valida && true;				
						}
					}
				}else{
					if(dato.value!=''){
						dato.style.border="1px solid black";
						matriz[i+1]=dato.value;
						valida=valida && true;
					}else{
						dato.style.border="1px solid red";
						valida=valida && false;
					}
				}
			}
		}else{
			matriz[0]=codigo.value;
			matriz[1]=document.getElementById("dias").value;
			document.getElementById("dias").style.border="1px solid black";
			matriz[2]=document.getElementById("extras").value;
			document.getElementById("extras").style.border="1px solid black";
			matriz[3]=document.getElementById("monto").value;
			document.getElementById("monto").style.border="1px solid black";
			matriz[4]=document.getElementById("tipo").value;
			document.getElementById("tipo").style.border="1px solid black";
			 valida=true;
		}
		if(valida){
			almacena_server(matriz,pos);
			setTimeout('siguiente('+pos+')',700);
			setTimeout('recalcula()',700);
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
	id_txt6="txt"+pos+",9";	
	id_txt11="f"+pos+",4";
	id_txt21="f"+pos+",5";
	id_txt31="f"+pos+",6";
	id_txt41="f"+pos+",7";
	id_txt51="f"+pos+",8";
	id_txt61="f"+pos+",9";	
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
		document.getElementById(id_txt6).innerHTML=cuales[5];
		document.getElementById(id_txt11).value=cuales[0];
		document.getElementById(id_txt21).value=cuales[1];
		document.getElementById(id_txt31).value=cuales[2];
		document.getElementById(id_txt41).value=cuales[3];
		document.getElementById(id_txt51).value=cuales[4];	
		document.getElementById(id_txt61).value=cuales[5];	
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

function agrega_otros(estado,obra){
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
		guarda_otros(mat,"nuevo",estado,obra);
		
	}else{
		alert("Revise Campos de Color Rojo");
	}
}

function guarda_otros(mat,cual,estado,obra){
var pos=document.getElementById('pos').value;
id_txt1="txt"+pos+",4";
id_txt2="txt"+pos+",5";
id_txt3="txt"+pos+",6";
id_txt4="txt"+pos+",7";
id_txt5="txt"+pos+",8";
id_txt6="txt"+pos+",9";	
id_txt11="f"+pos+",4";
id_txt21="f"+pos+",5";
id_txt31="f"+pos+",6";
id_txt41="f"+pos+",7";
id_txt51="f"+pos+",8";
id_txt61="f"+pos+",9";		

	var ajax=nuevoAjax();
	ajax.open("POST", "php/guarda_otros.php", true);
   	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
   	ajax.send("mat="+mat+"&cual="+cual+"&estado="+estado+"&obra="+obra);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			if(ajax.status == 200) {
				var datos=ajax.responseText.split(';-;')
				document.getElementById("otros").innerHTML=datos[0];
				if (datos[1]!='no'){
					carga_valores(datos[1]);
					document.getElementById('cb_cargo1').value='';
					document.getElementById('valor1').value='';

				}
			}
		}
	}
}

function agrega_licencia(estado,obra){
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
		guarda_lic(mat,"nuevo",estado,obra);
	}else{
		alert("Revise Campos de Color Rojo");
	}
}
function guarda_lic(mat,cual,estado,obra){
var ajax=nuevoAjax();
	ajax.open("POST", "php/guarda_lic.php", true);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.send("mat="+mat+"&cual="+cual+"&estado="+estado+"&obra="+obra);
	ajax.onreadystatechange = function() {
		if (ajax.readyState == 4) {
			if(ajax.status == 200) {
				document.getElementById("licencia").innerHTML=ajax.responseText;
				document.getElementById('cod_lic').value='';
				document.getElementById('fini_lic').value='';
				document.getElementById('ffin_lic').value='';
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

function imprimir_suple(obra,suple,ano,mes){
	location.href="imp_suple.php?obra="+obra+"&suple="+suple+"&ano="+ano+"&mes="+mes; 
}
function xls_suple(obra,suple,ano,mes){
	location.href="suples_xls.php?obra="+obra+"&suple="+suple+"&ano="+ano+"&mes="+mes; 
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
		if(confirm("Faltan dias Trabajados en 1 o mas Personas... Continuar de todas formas??")){
			document.forms["cerrar"].submit(); 
		}
	}
}

function imprimir_liq(obra){
	location.href="imp_liqui.php?obra="+obra; 
}

function genera_txt(cual){
	location.href="descarga_txt.php?cual="+cual; 
}

function cambia_seguro(){
document.getElementById("txt_scesantia").value=document.getElementById("txt_afp").value;

}

function solo_pi(){
var filtro=document.getElementById("txt_tipocontrato").value;
	if(filtro=='PI'){
		document.getElementById("solpf").disabled = false;
	}else{
		document.getElementById("solpf").disabled = true;
	}
}

function elimina_per(obra){
var id=document.getElementById("txt_id").value;
if(id>0){
	if(confirm("Esta Seguro de 'ELIMINAR' al Trabajador")){
			var ajax=nuevoAjax();
			ajax.open("POST", "elimina_trab.php", true);
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			ajax.send("id="+id);
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						alert("Trabajador Eliminado");
						location.href="m_personal.php?obra="+obra;		
					}
				}
			}
	
	}
}
}

function crea_reporte(obra){
var dato=document.getElementById("periodo").value;
var fecha=document.getElementById("fecha").value;
location.href="resumen_excel_asis.php?dato="+dato+"&fecha="+fecha+"&obra"+obra;
}

function valida(obra){
var texto=document.getElementById("txt_rut");	 
var codigo=document.getElementById("txt_codigo2").value;	
var dato=texto.value.replace(/\./g,'');
var dato=dato.replace(/\-/g,'');
var valida1=EsRut(dato.toLowerCase());
	if(valida1){
		texto.style.border="1px solid black";
		document.getElementById("val_rut").value=true;
		 texto.value=texto.value.replace(/\./g,'');
		 if(codigo==''){
			if(confirm("Desea buscar Trabajador en el Registro Historico")){
				var ajax=nuevoAjax();
				ajax.open("POST", "historico.php", true);
				ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				ajax.send("id="+texto.value);
				ajax.onreadystatechange = function() {
					if (ajax.readyState == 4) {
						if(ajax.status == 200) {
							if(ajax.responseText=="no"){
								alert("No Exsiste Trabajador En los Registros");
							}else{
								location.href="m_personal.php?obra="+obra+"&cual=historico&dato="+ajax.responseText;
							}
							
						}
					}
				}
			} 
		 }
	}else{
		texto.style.border="1px solid red";
		document.getElementById("val_rut").value=false;
	}
}

function EsRut(texto){
       var tmpstr = "";   
       for ( i=0; i < texto.length ; i++ )      
          if ( texto.charAt(i) != ' ' && texto.charAt(i) != '.' && texto.charAt(i) != '-' )
             tmpstr = tmpstr + texto.charAt(i);   
       texto = tmpstr;   
       largo = texto.length;   

       if ( largo < 2 )   
       {      
          return false;
       }   

       for (i=0; i < largo ; i++ )   
       {         
          if ( texto.charAt(i) !="0" && texto.charAt(i) != "1" && texto.charAt(i) !="2" && texto.charAt(i) != "3" && texto.charAt(i) != "4" && texto.charAt(i) !="5" && texto.charAt(i) != "6" && texto.charAt(i) != "7" && texto.charAt(i) !="8" && texto.charAt(i) != "9" && texto.charAt(i) !="k" && texto.charAt(i) != "K" )
          {         
          	return false;
          }   
       }   

       var invertido = "";   
       for ( i=(largo-1),j=0; i>=0; i--,j++ )      
          invertido = invertido + texto.charAt(i);   
       var dtexto = "";   
       dtexto = dtexto + invertido.charAt(0);   
       dtexto = dtexto + '-';   
       cnt = 0;   

       for ( i=1,j=2; i<largo; i++,j++ )   
       {      
          if ( cnt == 3 )      
          {         
             dtexto = dtexto + '.';         
             j++;         
             dtexto = dtexto + invertido.charAt(i);         
             cnt = 1;      
          }      
          else      
          {            
             dtexto = dtexto + invertido.charAt(i);         
             cnt++;      
          }   
       }   

       invertido = "";   
       for ( i=(dtexto.length-1),j=0; i>=0; i--,j++ )      
          invertido = invertido + dtexto.charAt(i);   

       if ( revisarDigito(texto) )      
             return true;

        return false;
    }

    function revisarDigito(componente)
    {   
       var crut =  componente
       largo = crut.length;   
       if ( largo < 2 )   
       {      
          return false;   
       }   
       if ( largo > 2 )      
          rut = crut.substring(0, largo - 1);   
       else      
       rut = crut.charAt(0);   
       dv = crut.charAt(largo-1);   
       
       if ( dv != '0' && dv != '1' && dv != '2' && dv != '3' && dv != '4' && dv != '5' && dv != '6' && dv != '7' && dv != '8' && dv != '9' && dv != 'k'  && dv != 'K')   
       {      
          return false;   
       }      

       if ( rut == null || dv == null )
          return 0   

       var dvr = '0'   
       suma = 0   
       mul  = 2   

       for (i= rut.length -1 ; i >= 0; i--)   
       {   
          suma = suma + rut.charAt(i) * mul      
          if (mul == 7)         
             mul = 2      
          else             
             mul++   
       }   
       res = suma % 11   
       if (res==1)      
          dvr = 'k'   
       else if (res==0)      
          dvr = '0'   
       else   
       {      
          dvi = 11-res      
          dvr = dvi + ""   
       }
       if ( dvr != dv)   
       {      
          return false   
       }

       return true
    }
function esrut(rut){
		if (rut==0){
				alert("Debe ingresar un RUT");
				document.formulario.txt_rut.focus();//me posiciono en el campo nuevamente
			}else{
					if (EsRut(rut)==false){
							alert("El RUT "+rut+" no es válido");
							document.formulario.txt_rut.value=" ";//limpio el valor del campo rut
							document.formulario.txt_rut.focus();//me posiciono en el campo nuevamente
						}else{
								if (rut.length==9){
						var la=rut.substring(0,8);
						var digito=rut.charAt(8);
						//document.formulario.txt_rut.value=la+"-"+digito;
						alert("El RUT "+la+"-"+digito+" SI es válido");
					}else{
						var la=rut.substring(0,8);
						var digito=rut.charAt(9);
						//document.formulario.txt_rut.value=la+"-"+digito;
						alert("El RUT "+la+"-"+digito+" SI es válido");
					}
							}
				}
	}
	
function carga_obra(){
var obra1=document.getElementById("obra1").value;
var nombre1=document.getElementById("nombre1").value;
document.getElementById("obra").value=obra1;
document.getElementById("nombre").value=nombre1;
}	

function elimina_pdf(cual1){
if(confirm("Seguro de eliminar el documento??")){
	location.href="ver_pdf.php?id="+cual1+"&cual=2"	;
}
}

function rep_pdf(obra){
	location.href="pernona_pdf.php?obra="+obra;
}

function rep_xls(obra){
	location.href="pernona_xls.php?obra="+obra; 
}
function asigna_obra(){
				document.forms["form1"].submit(); 
}

function carga_datos2(cual,caso){
var dato=document.getElementById(cual).value;
var obra=document.getElementById('txt_obra').value;
	if(caso==1){
		location.href="m_personal1.php?cual="+cual+"&dato="+dato+"&obra="+obra;
	}else{
		var ajax=nuevoAjax();
		ajax.open("POST", "valida_codigo1.php", true);
    	ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    	ajax.send("codigo="+obra+dato);
		ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						if(ajax.responseText=='true'){
							if(confirm('Codigo Utilizado, Cargar informacion del Trabajador ??')){
								var dato=document.getElementById(cual).value;
								location.href="m_personal.php1?cual="+cual+"&dato="+dato;
							}
						}
					}
				}
		}
	}
}

function valida1(){
var texto=document.getElementById("txt_rut");	 
var codigo=document.getElementById("txt_codigo2").value;	 
var valida1=EsRut(texto.value);
	if(valida1){
		texto.style.border="1px solid black";
		document.getElementById("val_rut").value=true;
		 texto.value=texto.value.replace(/\./g,'');
	}else{
		texto.style.border="1px solid red";
		document.getElementById("val_rut").value=false;
	}
}

function elimina_per1(obra){
var id=document.getElementById("txt_id").value;
if(id>0){
	if(confirm("Esta Seguro de 'ELIMINAR' al Trabajador")){
			var ajax=nuevoAjax();
			ajax.open("POST", "elimina_trab1.php", true);
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			ajax.send("id="+id);
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						alert("Trabajador Eliminado");
						location.href="m_personal1.php?obra="+obra;		
					}
				}
			}
	
	}
}
}

function envia_formulario1(){
	var dato=document.getElementById("txt_codigo2");
	var profesion=document.getElementById("cb_profesion");
	var entra=false;
	if (dato.value!=''){
		dato.style.border = "1px solid black";	
		cod=true;
	}else{
		dato.style.border = "1px solid red";	
		cod=false;		
	}
	valida();
	var rut=document.getElementById("val_rut");
	
	var rut1;
	if (rut.value=='true'){
		rut1=true;
	}else{
		rut1=false;		 
	}
	
	if (cb_profesion.value!=''){
		cb_profesion.style.border = "1px solid black";	
		prof=true;
	}else{
		cb_profesion.style.border = "1px solid red";	
		prof=false;		
	}
	
	if(cod && rut1 && prof){
		document.forms["formulario"].submit();
	}else{
		alert("Revisar campos en Rojo");	
	}

}

function genera_codigo(obra){
	var profesion=document.getElementById("cb_profesion").value;
	var codigo=document.getElementById("txt_codigo2");
	var ajax=nuevoAjax();
			ajax.open("POST", "genera_cod.php", true);
			ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			ajax.send("obra="+obra+"&margen="+profesion);
			ajax.onreadystatechange = function() {
				if (ajax.readyState == 4) {
					if(ajax.status == 200) {
						codigo.value=ajax.responseText;
					}
				}
			}
		
}

function cambia_bancos(){
	var cuenta=document.getElementById("txt_cuenta").value;	
	var banco=document.getElementById("txt_banco");	
	if(cuenta=='Abono Credichile'){
		banco.value=4;
	}
	if(cuenta=='Cta.Cte.'){
			banco.value=0;
	}
	if(cuenta=='Pago bancoestado'){
		banco.value=10;
	}
}

function genera_liqui_pdf(obra){
	location.href="liquidacion_pdf.php?obra="+obra;		
}

function genera_liqui_xls(obra){
	location.href="liquidacion_xls.php?obra="+obra;		
}
// JavaScript Document
function valida(){
	
	if($('#nom_pro').val()==''){
		$('#nom_pro').css("borderColor","#FF0000");
		valnom=false;
	}else{
		$('#nom_pro').css("borderColor","#000000");
		valnom=true;
	}
	
	if($('#cod_pro').val()==''){
		$('#cod_pro').css("borderColor","#FF0000");
		valcod=false;
	}else{
		$('#cod_pro').css("borderColor","#000000");
		valcod=true;
	}
	
	if($('#bo').val()==''){
		$('#bo').css("borderColor","#FF0000");
		valbo=false;
	}else{
		$('#bo').css("borderColor","#000000");
		valbo=true;
	}
	
	if($('#un_en').val()==''){
		$('#un_en').css("borderColor","#FF0000");
		valen=false;
	}else{
		$('#un_en').css("borderColor","#000000");
		valen=true;
	}
	
	if($('#uns_pro').val()==''){
		$('#un_sa').css("borderColor","#FF0000");
		valsa=false;
	}else{
		$('#un_sa').css("borderColor","#000000");
		valsa=true;
	}
	
	if(valsa && valen && valbo && valnom && valcod){
		alert('todo lleno');
		
	}else{
		alert('Revise los Campos en Rojo');
	}
}



























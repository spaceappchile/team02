<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta content="es-cl" http-equiv="Content-Language" />
<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
<title>Login</title>
<style type="text/css">
.auto-style1 {
	font-size: x-large;
	text-align: center;
}
.auto-style2 {
	text-align: right;
}
.auto-style3 {
	text-align: center;
}
</style>
</head>

<body>

<table align="center" style="width: 300px">
	<tr>
		<td class="auto-style1" colspan="2">Login</td>
	</tr>
	<tr>
		<td class="auto-style2">Usuario</td>
		<td>
		<form method="post">
			<br />
			<input name="username" type="text" /></form>
		</td>
	</tr>
	<tr>
		<td class="auto-style2">Contraseña</td>
		<td>
		<form method="post">
			<br />
			<input name="password" type="password" /></form>
		</td>
	</tr>
	<tr>
		<td class="auto-style3">
		<form method="post">
			<input name="Cancelar" type="reset" value="Cancelar" /></form>
		</td>
		<td class="auto-style3">
		<form method="post">
			<input name="Login" type="submit" value="Aceptar" /></form>
		</td>
	</tr>
</table>

</body>

</html>

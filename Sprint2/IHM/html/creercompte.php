<?php
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true) 
{ 
	header('Location: ./creercompteM.php');
}
?>

<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>Smartil</title>
	<style>
		body
		{
			margin: 10px 0 ;
			padding: 0 ;
			font: 0.8em "Trebuchet MS", helvetica, sans-serif ;
		}

		div#conteneur
		{
			max-width: 900px ;
			margin: 0 auto ;
			text-align: left ;
		}

		img.ban{
		   display: block;
		   margin: auto;
		   max-width: 100%;
		   height: auto;
		}

		img.home{
		   display: block;
		   max-width: 100%;
		   height: 21px;
		   width: 21px;
		}

		p#footer
		{
			margin: 0 ;
			padding-right: 10px ;
			line-height: 30px ;
			text-align: right ;
			color: #000101 ;
		}

		.topnav {
			background-color: #333;
			overflow: hidden;
		}

		.topnav a {
			float: left;
			display: inline-block;
			color: #f2f2f2;
			text-align: center;
			padding: 14px 16px;
			text-decoration: none;
			font-size: 17px;
		}

		.topnav a:hover {
			background-color: #ddd;
			color: black;
		}

		.topnav a#logs{
			float: right;
		}

		.topnav .icon {
			display: none;
		}
	</style>	
  </head>
  
  <body>
  <link rel="stylesheet" type="text/css" href="../styles/compte.css">
  <div id="conteneur">    
	<img class="ban" src="../styles/images/ban.png"></img>
	
	<div class="topnav" id="myTopnav">
		<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/envoi.php">Envoi</a>
		<a href="../html/reception.php">Réception</a>
		<a href="../html/facteur.php">Tournée facteur</a>
		<a href="../html/contact.php">Contacts</a>
		<a id="logs" href="../html/creercompte.php">S'inscrire</a>
		<a id="logs" href="../html/moncompte.php">Mon compte</a>
	</div> 
	
	<div id="contenu">
		<label for="pseudo">Pseudo</label>
		<input type="text" id="pseudo" name="pseudo" placeholder="Pseudo..">

		<label for="mdp">Mot de passe</label>
		<input type="password" id="mdp" name="mdp" placeholder="mot de passe..">

		<label for="mdpc">Mot de passe Confirmation</label>
		<input type="password" id="mdpc" name="mdpc" placeholder="mot de passe..">
		
		<label for="country">Pays</label>
		<select id="country" name="country">
		  <option value="allemagne">Allemagne</option>
		  <option value="belgique">Belgique</option>
		  <option value="canada">Canada</option>
		  <option value="espagne">Espagne</option>
		  <option value="france">France</option>
		  <option value="italie">Italie</option>
		  <option value="usa">USA</option>
		</select>
		
		<label for="mel">Adresse Mail</label>
		<input type="text" id="mel" name="mel" placeholder="adresse mail..">
	  
		<input type="submit" value="Valider">
	</div>
	<p id="footer">Réalisé par Thomas</p>
  </div>
  </body>
</html>
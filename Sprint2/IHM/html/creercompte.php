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
			background-image:url(./../styles/images/back.png);
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
		Particulier ou poste
	
		<label for="nom">Nom</label>
		<input type="text" id="nom" name="nom" placeholder="Nom..">
		
		<label for="nom">Prénom</label>
		<input type="text" id="prenom" name="prenom" placeholder="Prénom..">

		<label for="mdp">Mot de passe</label>
		<input type="password" id="mdp" name="mdp" placeholder="mot de passe..">

		<label for="mdpc">Mot de passe Confirmation</label>
		<input type="password" id="mdpc" name="mdpc" placeholder="mot de passe..">
		
		<label for="tel">Téléphone</label>
		<input type="text" id="tel" name="tel" placeholder="Téléphone..">
		
		<label for="date">Date de naissance</label>
		<select id="dateJ" name="dateJ">
		  <option value="1">1</option>
		  <option value="2">2</option>
		  <option value="3">3</option>
		  <option value="4">4</option>
		  <option value="5">5</option>
		  <option value="6">6</option>
		  <option value="7">7</option>
		  <option value="8">8</option>
		  <option value="9">9</option>
		  <option value="10">10</option>
		  <option value="11">11</option>
		  <option value="12">12</option>
		  <option value="13">13</option>
		  <option value="14">14</option>
		  <option value="15">15</option>
		  <option value="16">16</option>
		  <option value="17">17</option>
		  <option value="18">18</option>
		  <option value="19">19</option>
		  <option value="20">20</option>
		  <option value="21">21</option>
		  <option value="22">22</option>
		  <option value="23">23</option>
		  <option value="24">24</option>
		  <option value="25">25</option>
		  <option value="26">26</option>
		  <option value="27">27</option>
		  <option value="28">28</option>
		  <option value="29">29</option>
		  <option value="30">30</option>
		  <option value="31">31</option>
		</select>
		
		<select id="dateM" name="dateM">
		  <option value="1">1</option>
		  <option value="2">2</option>
		  <option value="3">3</option>
		  <option value="4">4</option>
		  <option value="5">5</option>
		  <option value="6">6</option>
		  <option value="7">7</option>
		  <option value="8">8</option>
		  <option value="9">9</option>
		  <option value="10">10</option>
		  <option value="11">11</option>
		  <option value="12">12</option>
		</select>
		
		<select id="dateA" name="dateA">
		  <option value="1990">1990</option>
		  <option value="1991">1991</option>
		  <option value="1992">1992</option>
		  <option value="1993">1993</option>
		  <option value="1994">1994</option>
		  <option value="1995">1995</option>
		  <option value="1996">1996</option>
		  <option value="1997">1997</option>
		  <option value="1998">1998</option>
		  <option value="1999">1999</option>
		  <option value="2000">2000</option>
		</select>
		
		<label for="adresse">Adresse</label>
		<label for="numero">Numéro</label>
		<input type="text" id="numero" name="numero" placeholder="Numéro..">
		<label for="rue">Rue</label>
		<input type="text" id="rue" name="rue" placeholder="Rue..">
		<label for="codPost">Code postal</label>
		<input type="text" id="codPost" name="codPost" placeholder="Code postal..">
		<label for="ville">Ville</label>
		<input type="text" id="ville" name="ville" placeholder="Ville..">
		
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
	<p id="footer">Réalisé par Thomas & Jonathan</p>
  </div>
  </body>
</html>
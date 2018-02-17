<?php
include "db.php";
session_start();
$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true) 
{ 
	header('Location: ./indexM.php');
}
?>

<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>Smartil</title>
	<link rel="icon" type="image/png" href="../styles/images/food.jpg" />
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
	  <link rel="stylesheet" type="text/css" href="../styles/index.css">
	  <div id="conteneur">    
		<img class="ban" src="../styles/images/ban.png"></img>
		<?php	if (isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] == true) {
		
			
		?>
		
		<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/contact.php">Contacts</a>
			<a id="logs" href="../html/index.php"><?php echo $_SESSION['username']; ?></a>
			<a id="logs" href="logout.php">Deconnexion</a>
		</div>
				<?php
			}
		 else
		 { ?>
			<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/contact.php">Contacts</a>
			<a id="logs" href="../html/creercompte.php">S'inscrire</a>
			<a id="logs" href="../html/moncompte.php">Mon compte</a>
		    </div>
			<?php
			
		} ?>
		

		<div class="mainPagePC">
			<h2>Bienvenue sur notre projet</h2>
			<h3>Définition d’un utilisateur type du système :</h3>
				<p>Bob est une personne lambda qui attend souvent pour son courrier. Il va régulièrement à sa boîte aux lettres mais il aimerait ne pas y aller pour rien. 
				De ce fait, il aimerait pouvoir savoir si le facteur est passé ou non. De même Bob, étant souvent sur son lieu de travail aimerait pouvoir jeter un coup d’oeil au 
				contenu de sa boîte aux lettres afin d'être informé plus précisément de son contenu. De plus comme Bob travaille beaucoup, il n’a pas vraiment le temps de se déplacer
				et d’aller à la poste, ainsi il souhaiterait pouvoir recevoir tous ses colis et lettres contre signature sans avoir à être présent. Enfin, il aimerait surtout pouvoir
				envoyer ses colis et ses lettres bien plus facilement que ce qui n’existe à l’heure actuelle; c’est à dire, les laisser dans sa boite aux lettres et que le facteur se 
				charge de la transmission pour envoie.</p>

				<p>Charles est une personne à mobilité réduite, il du mal à se déplacer tous les jours à sa boîte aux lettres pour finalement voir son contenu vide, cependant il est
				obligé de s’y déplacer régulièrement car il reçoit régulièrement des lettres importantes. Charles aimerait pouvoir notifier sa famille proche lors du passage du facteur 
				afin que lors de ses visites on puisse lui relever le courrier.</p>

				<p>Dominique est un responsable de la Poste. Il souhaite pouvoir optimiser les tournées de ses facteurs. En effet la démographie d’une ville est en constante évolution et 
				il faut toujours adapter les parcours de chaque facteur pour optimiser le temps de travail.</p>

				<h3>Un bon vers le futur ?</h3>
				<p>Par souci de courrier mouillé, la boite aux lettre sera équipé d’un capteur d’humidité, de température et sera reliée à une API météo afin de prévenir ses utilisateurs que la météo 
				apricieuse risque de détériorer le contenu de sa boite aux lettre.</p>

				<p>Enfin pour un futur toujours plus propre, nous pourrions proposer comme option sur notre Smartil, de rajouter un mini panneau solaire afin de l’alimenter en énergie électrique.</p>	
			<p>API : La Poste </p>
			<a href="https://github.com/swaety/OCS">GitHub</a>
		</div>
		
		<p id="footer">Réalisé par Thomas & Jonathan</p>
	  </div>  
  </body>
</html>



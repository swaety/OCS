<?php
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
    <title>FoodFactory</title>
	<link rel="icon" type="image/png" href="../styles/images/food.jpg" />
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
	  <link rel="stylesheet" type="text/css" href="../styles/index.css">
	  <div id="conteneur">    
		<img class="ban" src="../styles/images/ban.png"></img>
		
		<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/liste.php">Listes</a>
			<a href="../html/article.php">Articles</a>
			<a href="../html/contact.php">Contacts</a>
			<a id="logs" href="../html/creercompte.php">S'inscrire</a>
			<a id="logs" href="../html/moncompte.php">Mon compte</a>
		</div> 	

		<div class="mainPagePC">
			<h2>Bienvenue sur notre projet</h2>
			<p>Notre site de FoodFactory. Ici nous allons utiliser Vanilla JS</p>
			<p>Grace a food factory vous pourrez creer votre liste de course grace au scan ou a la recherche d'article, vous pourrez aussi avoir des informations nutritionelles de vos produits !</p>	
			<div id="video">
				<div class="sub">
					<iframe align="center" src="https://www.youtube.com/embed/W49LVs-V2-I" frameborder="0"></iframe>
				</div>
			</div>
			<p>API : OpenFoodFacts </p>
		</div>
		
		<p id="footer">Réalisé par Thomas</p>
	  </div>  
  </body>
</html>



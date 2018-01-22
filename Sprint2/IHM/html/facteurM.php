<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>Smartil</title>
	<style>
		img.home{
		   display: block;
		   max-width: 100%;
		   height: 21px;
		   width: 21px;
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
		
		.topnav a:not(:first-child) {
			display: none;
		}
		
		.topnav a.icon {
			float: right;
			display: block;
		}
		
		.topnav.responsive a.icon {
			position: absolute;
			right: 0;
			top: 0;
		}
		
		.topnav.responsive a {
			float: none;
			display: block;
			text-align: left;
		} 
		
		#footer
		{
			margin: 0 ;
			padding-right: 10px ;
			line-height: 30px ;
			text-align: right ;
			color: #000101 ;
		}
	</style>	
  </head>
  
  <body>
  <link rel="stylesheet" href="../styles/facteurM.css">
  <div id="conteneur">    	
	<div class="topnav" id="myTopnav">
		<a href="../html/indexM.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/envoiM.php">Envoi</a>
		<a href="../html/receptionM.php">Réception</a>
		<a href="../html/facteurM.php">Tournée facteur</a>
		<a href="../html/contactM.php">Contacts</a>
		<a id="logs" href="../html/creercompteM.php">S'inscrire</a>
		<a id="logs" href="../html/moncompteM.php">Mon compte</a>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
	</div> 
	
	<div id="contenu">
		
	</div>
	
	<p id="footer">Réalisé par Thomas & Jonathan</p>
  </div>
  <script>
	function myFunction() {
		var x = document.getElementById("myTopnav");
		if (x.className === "topnav") {
			x.className += " responsive";
		} else {
			x.className = "topnav";
		}
	}
  </script>
  </body>
</html>



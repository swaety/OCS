<!DOCTYPE html">
<html lang="fr">
  <head>
    <meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, minimum-scale=1.0" />
    <title>FoodFactory</title>
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
  <link rel="stylesheet" type="text/css" href="../styles/indexM.css">
  <div>    
	
	<div class="topnav" id="myTopnav">
		<a href="../html/indexM.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/listeM.php">Listes</a>
		<a href="../html/articleM.php">Articles</a>
		<a href="../html/contactM.php">Contacts</a>
		<a href="../html/creercompteM.php">S'inscrire</a>
		<a href="../html/moncompteM.php">Mon compte</a>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
	</div> 	

	<div>
		<p>Bienvenue sur FoodFactory (mobile)</p>
		<div style="width: 49.6%; float:left; border-right:1px solid black;">
			<div style="width: 100%; border-bottom:1px solid black;">
				<a href="../html/articleM.php"><img class="mbutton" src="../styles/images/article.png"></img></a>
			</div>
			<div style="width: 100%; border-top:1px solid black;">
				<a href="../html/moncompteM.php"><img class="mbutton" src="../styles/images/login.png"></img></a>
			</div>
		</div>
		<div style="width: 49.6%; float:right; border-left:1px solid black;">
		   <div style="width: 100%; border-bottom:1px solid black;">
				<a href="../html/listeM.php"><img class="mbutton" src="../styles/images/list.png"></img></a>
			</div>
			<div style="width: 100%; border-top:1px solid black;">
				<a href="../html/contactM.php"><img class="mbutton" src="../styles/images/contact.png"></img></a>
			</div>
		</div>

		<div class="button">
			<a style="text-decoration:none;" href="../html/creercompte.html"><p id="butt">S'inscrire</p></a>
		</div>
	</div>
	<p id="footer">Réalisé par Thomas</p>
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
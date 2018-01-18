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
  <link rel="stylesheet" href="../styles/contactsM.css">
  <div id="conteneur">    	
	<div class="topnav" id="myTopnav">
		<a href="../html/indexM.php"><img class="home" src="../styles/images/home.png"></img></a>
		<a href="../html/listeM.php">Listes</a>
		<a href="../html/articleM.php">Articles</a>
		<a href="../html/contactM.php">Contacts</a>
		<a id="logs" href="../html/creercompteM.php">S'inscrire</a>
		<a id="logs" href="../html/moncompteM.php">Mon compte</a>
		<a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
	</div> 
	
	<div id="contenu">
		<div class="mainPageM">
			<div style="width: 80%; margin:auto;">
				<a href="https://www.facebook.com/" target="_blank">
					<div style="border:1px solid black; position:relative; padding-left: 5em; overflow:hidden;">
						<div style="width: 5em; margin:auto; position:absolute; left:0px; height: 100%">
							<img id="little" src="../styles/images/facebook.png"></img>
						</div>
						<div style="text-align:center; text-decoration:none; ">
							<p>FACEBOOK</p>
						</div>
					</div>
					<div style="margin-bottom:25px;"></div>
					<div style="border:1px solid black; position:relative; padding-left: 5em; overflow:hidden;">
						<div style="width: 5em; margin:auto; position:absolute; left:0px; height: 100%">
							<img id="little" src="../styles/images/twitter.png"></img>
						</div>
						<div style="text-align:center; text-decoration:none; ">
							<p>TWITTER</p>
						</div>
					</div>
					<div style="margin-bottom:25px;"></div>
					<div style="border:1px solid black; position:relative; padding-left: 5em; overflow:hidden;">
						<div style="width: 5em; margin:auto; position:absolute; left:0px; height: 100%">
							<img id="little" src="../styles/images/mail.png"></img>
						</div>
						<div style="text-align:center; text-decoration:none; ">
							<p>MAIL</p>
						</div>
					</div>
					<div style="margin-bottom:25px;"></div>
					<div style="border:1px solid black; position:relative; padding-left: 5em; overflow:hidden;">
						<div style="width: 5em; margin:auto; position:absolute; left:0px; height: 100%">
							<img id="little" src="../styles/images/youtube.png"></img>
						</div>
						<div style="text-align:center; text-decoration:none; ">
							<p>YOUTUBE</p>
						</div>
					</div>
				</a>
			</div>
			
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



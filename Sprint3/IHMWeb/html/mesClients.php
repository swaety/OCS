<?php
include "db.php";
session_start();
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
	  <link rel="stylesheet" type="text/css" href="../styles/mesClients.css">
	  <div id="conteneur">    
		<img class="ban" src="../styles/images/ban.png"></img>
		<?php	if (isset($_SESSION['LoggedIn']) && ($_SESSION['LoggedIn'] == true) && $_SESSION['category'] == 'PARTICULIER') {
		
			
		?>
		
		<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/contact.php">Contacts</a>
			<a href="../html/mesBoites.php">Mes Boites</a>
			<a href="../html/courrier.php">Courrier</a>
			<a id="logs" href="../html/index.php"><?php echo $_SESSION['username']; ?></a>
			<a id="logs" href="logout.php">Deconnexion</a>
		</div>
		<?php
		}
				
		else if (isset($_SESSION['LoggedIn']) && ($_SESSION['LoggedIn'] == true) && $_SESSION['category'] == 'POSTE')
		 { ?>
			<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/contact.php">Contacts</a>
			<a href="../html/mesClients.php">Mes Clients</a>
			<a id="logs" href="../html/index.php"><?php echo $_SESSION['username']; ?></a>
			<a id="logs" href="logout.php">Deconnexion</a>
		   </div>
			<?php
			
		} else { ?>
			<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/contact.php">Contacts</a>
			<a id="logs" href="../html/creercompte.php">S'inscrire</a>
			<a id="logs" href="../html/moncompte.php">Mon compte</a>
		    </div>
		<?php } ?>
		

		<div class="mainPagePC">
			<div id="descriptliste">
			<br>
				<div class="touteslistes2" id="data" >
					<table border="1" style="width:100%;">
						<thead>
							<tr>
								<th>
									<p style="text-align:center;">Boite</p>
								</th>
								<th>
									<p style="text-align:center;">Nom</p>
								</th>
								<th>
									<p style="text-align:center;">Prénom</p>
								</th>
								<th>
									<p style="text-align:center;">Adresse</p>
								</th>
								<th>
									<p style="text-align:center;">Courrier</p>
								</th>
							</tr>
						</thead>
						<tbody id="allusers">
						
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<br><br><br>
	  </div> 
	  <script type="text/javascript" src="../scripts/mesClients.js" ></script>	  
  </body>
</html>



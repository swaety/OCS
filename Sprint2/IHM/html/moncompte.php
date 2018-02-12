<?php
include "db.php"; 
session_start();
if (isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] == true) {
	header("Location: index.php");
} else {
    

$iphone = strpos($_SERVER['HTTP_USER_AGENT'],"iPhone");
$android = strpos($_SERVER['HTTP_USER_AGENT'],"Android");
$palmpre = strpos($_SERVER['HTTP_USER_AGENT'],"webOS");
$berry = strpos($_SERVER['HTTP_USER_AGENT'],"BlackBerry");
$ipod = strpos($_SERVER['HTTP_USER_AGENT'],"iPod");

if ($iphone || $android || $palmpre || $ipod || $berry == true) 
{ 
	header('Location: ./moncompteM.php');
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

	<?php	if (isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] == true) {
		
			
		?>
		
		<div class="topnav" id="myTopnav">
			<a href="../html/index.php"><img class="home" src="../styles/images/home.png"></img></a>
			<a href="../html/envoi.php">Envoi</a>
			<a href="../html/reception.php">Réception</a>
			<a href="../html/facteur.php">Tournée facteur</a>
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
			<a href="../html/envoi.php">Envoi</a>
			<a href="../html/reception.php">Réception</a>
			<a href="../html/facteur.php">Tournée facteur</a>
			<a href="../html/contact.php">Contacts</a>
			<a id="logs" href="../html/creercompte.php">S'inscrire</a>
			<a id="logs" href="../html/moncompte.php">Mon compte</a>
		    </div>
			<?php
			
		} ?>
	<div id="contenu">
	<?php
	    $db = new Db();
		if(!empty($_SESSION['LoggedIn']) && !empty($_SESSION['username']))
		{
			?>
		
			<h1>Member Area</h1>
			<pThanks for logging in! You are <code><?=$_SESSION['username']?></code> and your email address is <code><?=$_SESSION['email']?></code>.</p>
			
			<?php
		}
		elseif(!empty($_POST['username']) && !empty($_POST['password']))
		{
			$username = $db -> quote($_POST['username']);
			$password = $db -> quote($_POST['password']);
			
			$checklogin = $db->select("SELECT * FROM `users` WHERE `username` = ".$username." ");
			//var_dump($checklogin);
			
			if($checklogin != false)
			{
				if(password_verify($password, $checklogin[0]['password'])) 
				{
				
				$email = $checklogin[0]['email'];
				$_SESSION['username'] = $username;
				$_SESSION['email'] = $email;
				$_SESSION['LoggedIn'] = true;
				
			
				echo "<h1>Success</h1>";
				echo "<p>We are now redirecting you to the member area.</p>";
				echo '<META http-equiv="refresh" content="3; URL=index.php">';
				 } 
				 else
				 {
					echo "<h1>Wrong Password</h1>";
					echo "<p>Please re-type your password.</p>";
					echo '<META http-equiv="refresh" content="1; URL=moncompte.php">';
				 }
			}
			else
			{
				echo "<h1>Error</h1>";
				echo "<p>Sorry, your account could not be found. Please <a href=\"index.php\">click here to try again</a>.</p>";
			}
		}
		else
		{
			?>
	
		<form method="post" action="moncompte.php" name="loginform" id="loginform">
		<fieldset>
		<label for="username">Login : </label>
		<input type="text" id="username" name="username" placeholder="login">

		<label for="password">Mot de passe : </label>
		<input type="password" id="password" name="password" placeholder="mot de passe..">
	  
		<input type="submit" value="Connexion">
		</form>
		<?php
		
	}
	?>
	</div>
	<p id="footer">Réalisé par l'équipe SMARTIl</p>
  </div>
  </body>
</html>
<?php
}
?>


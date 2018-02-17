<?php
include "db.php";
session_start();
if (isset($_SESSION['LoggedIn']) && $_SESSION['LoggedIn'] == true) {
	//echo "Welcome to the member's area, " . $_SESSION['username'] . "!";
	header("Location: index.php");
} else {
  
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
	<?php
	$db = new Db();
	if(!empty($_POST['pseudo']) && !empty($_POST['mdp']) && !empty($_POST['email']) &&!empty($_POST['nom']) &&!empty($_POST['prenom'])&&!empty($_POST['country'])&&!empty($_POST['numero']))
	{
		$firstname = $db -> quote($_POST['prenom']);
		$lastname = $db -> quote($_POST['nom']);
		$username = $db -> quote($_POST['pseudo']);
		$password = $db -> quote($_POST['mdp']);
		$country = $db -> quote($_POST['country']);
		$tel = $db -> quote($_POST['numero']);
		$email = $db -> quote($_POST['email']);
		
		$checkusername =  $db->select("SELECT * FROM users WHERE username = '".$username."'");
		
		if($checkusername != false)
		{
			echo "<h1>Error</h1>";
			echo "<p>Sorry, that username is taken. Please go back and try again.</p>";
		}
		else
		{
			$hashed_password = password_hash($password, PASSWORD_DEFAULT);
			$password = $db -> quote($hashed_password) ;
			
			$registerquery = $db->query("INSERT INTO `users` (`username`, `password`,`email`,`country`,`firstName`,`lastName`,`tel`) VALUES(".$username.", ".$password.",".$email.",".$country.",".$firstname.",".$lastname.",".$tel.")");
			if($registerquery)
			{
				echo "<h1>Success</h1>";
				echo "<p>Your account was successfully created. Please <a href=\"moncompte.php\">click here to login</a>.</p>";
			}
			else
			{
				echo "<h1>Error</h1>";
				echo "<p>Sorry, your registration failed. Please go back and try again.</p>";    
			}       
		}
	}
	else
{
    ?>	
	<div id="contenu">
		<div id="choice">
			<p>Créer mon compte !</p>
			<input type="submit" id="prticulier" onclick="particulier()" value="Particulier">
			<input type="submit" id="poste" onclick="poste()" value="Poste">
		</div>
		<?php
	}
		?>
	
	<p id="footer">Réalisé par l'équipe smartil</p>
  </div>
  </body>
</html>
<script src="../scripts/creercompte.js"></script> 
<script src="https://www.w3schools.com/lib/w3.js"></script>
<?php
}
?>
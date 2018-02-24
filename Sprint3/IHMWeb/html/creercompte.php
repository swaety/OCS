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
	<?php
	$db = new Db();
if(isset($_POST['register_particulier']))
{
			if(!empty($_POST['pseudo']) && !empty($_POST['mdp']) && !empty($_POST['email']) &&!empty($_POST['nom']) &&!empty($_POST['prenom'])&&!empty($_POST['country'])&&!empty($_POST['tel']))
    {
			$firstname = $db -> quote($_POST['prenom']);
			$lastname = $db -> quote($_POST['nom']);
			$username = $db -> quote($_POST['pseudo']);
			$password = $db -> quote($_POST['mdp']);
			$numero = $db -> quote($_POST['numero']);
			$rue = $db -> quote($_POST['rue']);
			$codPost = $db -> quote($_POST['codPost']);
			$ville = $db -> quote($_POST['ville']);
			$country = $db -> quote($_POST['country']);
			$tel = $db -> quote($_POST['tel']);
			$dateJ = $db -> quote($_POST['dateJ']);
			$dateM = $db -> quote($_POST['dateM']);
			$dateA = $db -> quote($_POST['dateA']);
			$email = $db -> quote($_POST['email']);

			$firstname_ = $_POST['prenom'];
			$lastname_ = $_POST['nom'];
			$username_ = $_POST['pseudo'];
			
			$numero_ =  $_POST['numero'];
			$rue_ = $_POST['rue'];
			$codPost_ = $_POST['codPost'];
			$ville_ = $_POST['ville'];
			$country_ = $_POST['country'];
			$tel_ = $_POST['tel'];
			$dateJ_ = $_POST['dateJ'];
			$dateM_ = $_POST['dateM'];
			$dateA_ = $_POST['dateA'];
			$email_ = $_POST['email'];
			 

			$category = $db -> quote("PARTICULIER");
			$checkusername =  $db->select("SELECT * FROM users WHERE username = '".$username."'");
			
			if($checkusername != false)
			{
				echo "<h1>Error</h1>";
				echo "<p>Sorry, that username is taken. Please go back and try again.</p>";
			}
			else
			{
				$hashed_password = password_hash($password, PASSWORD_DEFAULT);
				$password_ = $hashed_password;
				$password = $db -> quote($hashed_password) ;
				
				$registerquery = $db->query("INSERT INTO `users` (`username`, `password`,`email`,`country`,`firstName`,`lastName`,`tel`,`category`) VALUES(".$username.", ".$password.",".$email.",".$country.",".$firstname.",".$lastname.",".$tel.",".$category.")");
				if($registerquery)
				{
					
					try {
						
						$url_partculier =  'http://localhost:5555/particulier' ;
						$ch = curl_init($url_partculier);
						$jsonData = array( 
								'nom' => $lastname_,
								'prenom' => $firstname_,
								'pseudo' => $username_,
								'dateJour' => $dateJ_,
								'dateMois' => $dateM_,
								'dateAnnee' => $dateA_,
								'mail' => $email_,
								'tel' => $tel_,
								'mdp' => $password_,
								'adresseNum' => $numero_,
								'adresseRue' => $rue_,
								'adresseCP' => $codPost_,
								'adresseVille' => $ville_,
								'adressePays' => $country_);
						
						//Encode the array into JSON.
						$jsonDataEncoded = json_encode($jsonData);
						var_dump($jsonDataEncoded);
						//Tell cURL that we want to send a POST request.
						curl_setopt($ch, CURLOPT_POST, 1);
						//Attach our encoded JSON string to the POST fields.
						curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						//Set the content type to application/json
						curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
						//Execute the request
						$result = curl_exec($ch);
						$body = json_decode($result);
						var_dump($body);
						//je sais pas ça sera quoi le retour du serveur : j'assume que ça sera du type {'Ide':'#'}
						
						$id_particulier = $body->Ide . PHP_EOL;
						
						if (isset($id_particulier))
						{
							$registerquery = $db->query("UPDATE `users` SET `IdParticulier` = ".$id_particulier." WHERE `username` = ".$username."  ");
							if($registerquery){ echo "particulier ID was updated successfully";}
							else echo "particulier ID was not updated successfully";
						}
						else echo "no particulier ID given from server";
						//print '<pre>' . var_export( $body, true ) . '</pre>';
					} catch ( Exception $e ) {
						print_r( $e->getMessage() ) . PHP_EOL;
					}
					
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
}
else if(isset($_POST['register_poste']))
{
	echo("from post0");
	{
		if(!empty($_POST['pseudo_poste']) && !empty($_POST['nom_poste']) && !empty($_POST['mdp_poste']) && !empty($_POST['email_poste']) &&!empty($_POST['activityRange_poste']) &&!empty($_POST['ville_poste'])&&!empty($_POST['country_poste'])&&!empty($_POST['numero_poste']))

        {
			$activity_range = $db -> quote($_POST['activityRange_poste']);
			$nom_poste = $db -> quote($_POST['nom_poste']);
			$username = $db -> quote($_POST['pseudo_poste']);
			$password = $db -> quote($_POST['mdp_poste']);
			$country = $db -> quote($_POST['country_poste']);
			$tel = $db -> quote($_POST['tel_poste']);
			$numero = $db -> quote($_POST['numero_poste']);
			$ville = $db -> quote($_POST['ville_poste']);
			$email = $db -> quote($_POST['email_poste']);
			$rue_poste = $db -> quote($_POST['rue_poste']);
			$codPost_poste = $db -> quote($_POST['codPost_poste']);

			$activity_range_ = $_POST['activityRange_poste'];
			$nom_poste_ = $_POST['nom_poste'];
			$username_ = $_POST['pseudo_poste'];
			
			$country_ = $_POST['country_poste'];
			$tel_ = $_POST['tel_poste'];
			$numero_ = $_POST['numero_poste'];
			$ville_ = $_POST['ville_poste'];
			$email_ = $_POST['email_poste'];
			$rue_poste_ = $_POST['rue_poste'];
			$codPost_poste_ = $_POST['codPost_poste'];

			$category = $db -> quote("POSTE");
			$checkusername =  $db->select("SELECT * FROM users WHERE username = '".$username."'");
			//echo("from post1");
			if($checkusername != false)
			{
				echo "<h1>Error</h1>";
				echo "<p>Sorry, that username is taken. Please go back and try again.</p>";
			}
			else
			{
				//echo("from post2");
				$hashed_password = password_hash($password, PASSWORD_DEFAULT);
				$password_ = $hashed_password;
				$password = $db -> quote($hashed_password) ;
				$registerquery = $db->query("INSERT INTO `users` (`username`,`category`, `password`,`email`,`country`,`city`,`address_num`,`tel`,`activity_range`) VALUES(".$username.", ".$category.",".$password.",".$email.",".$country.",".$ville.",".$numero.",".$tel.",".$activity_range.")");
				if($registerquery)
				{
					echo "<h1>Success</h1>";
					echo "<p>Your account was successfully created. Please <a href=\"moncompte.php\">click here to login</a>.</p>";
					try {
						$url_poste =  'http://localhost:5555/poste' ;
						$ch = curl_init($url_poste);
						$jsonData =	array( 'nom' => $nom_poste,
								   'pseudo' => $username_,
								   'adresseNum' => $numero_,
								   'adresseRue' => $rue_poste_,
								   'adresseCP' => $codPost_poste_,
								   'adresseVille' => $ville_,
								   'adressePays' => $country_,
								   'mail' => $email_,
								   'tel' => $tel_,
								   'mdp' => $password_,
								   'rayonActivite' => $activity_range_
				             	);
						
						//Encode the array into JSON.
						$jsonDataEncoded = json_encode($jsonData);
						//Tell cURL that we want to send a POST request.
						curl_setopt($ch, CURLOPT_POST, 1);
						//Attach our encoded JSON string to the POST fields.
						curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
						curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
						//Set the content type to application/json
						curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
						//Execute the request
						$result = curl_exec($ch);
						$body = json_decode( $result );
						$id_poste = $body->Ide . PHP_EOL;
						if (isset($id_poste))
						{
							$registerquery = $db->query("UPDATE `users` SET `IdPoste` = ".$id_poste." WHERE `username` = ".$username."  ");
							if($registerquery){ echo "poste ID was updated successfully";}
							else echo "poste ID was not updated successfully";
						}
						else echo "no post ID given from server";
						//print '<pre>' . var_export( $body, true ) . '</pre>';
					} catch ( Exception $e ) {
						print_r( $e->getMessage() ) . PHP_EOL;
					}
				}
				else
				{
					echo "<h1>Error</h1>";
					echo "<p>Sorry, your registration failed. Please go back and try again.</p>";    
				}       
			}
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
			<input type="submit" id="poste" onclick="poste()"            value="Poste       ">
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
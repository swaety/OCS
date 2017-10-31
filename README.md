S**MA**RT**IL**

# Boite aux lettres connectées

## **Groupe :**

* ABDELKADER Ibrahim, [ibrahim.abdelkader@](mailto:ibrahim.abdelkader@esprit.tn)[etu.unice.fr](mailto:jonathan.boudab@etu.unice.fr), IAM

* BOUDAB Jonathan, [jonathan.boudab@etu.unice.fr](mailto:jonathan.boudab@etu.unice.fr), IAM

* CHALTE Thomas,  [thomas.chalte@etu.unice.fr](mailto:thomas.chalte@etu.unice.fr), IAM

## **Scénarios d’utilisation:**

### Définition d’un utilisateur type du système : 

Bob est une personne lambda qui attend souvent pour son courrier. Il va régulièrement à sa boîte aux lettres mais il aimerait ne pas y aller pour rien. De ce fait, il aimerait pouvoir savoir si le facteur est passé ou non. De même Bob, étant souvent sur son lieu de travail aimerait pouvoir jeter un coup d’oeil au contenu de sa boîte aux lettres afin d'être informé plus précisément de son contenu. De plus comme Bob travaille beaucoup, il n’a pas vraiment le temps de se déplacer et d’aller à la poste, ainsi il souhaiterait pouvoir recevoir tous ses colis et lettres contre signature sans avoir à être présent. Enfin, il aimerait surtout pouvoir envoyer ses colis et ses lettres bien plus facilement que ce qui n’existe à l’heure actuelle; c’est à dire, les laisser dans sa boite aux lettres et que le facteur se charge de la transmission pour envoie.

Charles est une personne à mobilité réduite, il  du mal à se déplacer tous les jours à sa boîte aux lettres pour finalement voir son contenu vide, cependant il est obligé de s’y déplacer régulièrement car il reçoit régulièrement des lettres importantes. Charles aimerait pouvoir notifier sa famille proche lors du passage du facteur afin que lors de ses visites on puisse lui relever le courrier.

Dominique est un responsable de la Poste. Il souhaite pouvoir optimiser les tournées de ses facteurs. En effet la démographie d’une ville est en constante évolution et il faut toujours adapter les parcours de chaque facteur pour optimiser le temps de travail.

## Un bon vers le futur ?

Par souci de courrier mouillé, la boite aux lettre sera équipé d’un capteur d’humidité, de température et sera reliée à une API météo afin de prévenir ses utilisateurs que la météo capricieuse risque de détériorer le contenu de sa boite aux lettre.

Enfin pour un futur toujours plus propre, nous pourrions proposer comme option sur notre Smartil, de rajouter un mini panneau solaire afin de l’alimenter en énergie électrique.

## **Équipement TIC :**

### Capteurs et actionneurs

<table>
  <tr>
    <td>Nom</td>
    <td>Plateforme</td>
    <td>Prix unitaire</td>
    <td>Qte</td>
    <td>Références</td>
  </tr>
  <tr>
    <td>Capteur de force</td>
    <td></td>
    <td>16.50€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-capteur-de-force-adaptateur-1131-12151.htm</td>
  </tr>
  <tr>
    <td>LED RGB</td>
    <td>--</td>
    <td>4.20€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-led-8-mm-rgb-grove-104030006-19000.htm</td>
  </tr>
  <tr>
    <td>Bouton-poussoir</td>
    <td>--</td>
    <td>1.99€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-module-bouton-grove-101020003-19052.htm</td>
  </tr>
  <tr>
    <td>Raspberry Pi 3</td>
    <td>Raspbian</td>
    <td>24.9€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-carte-raspberry-pi3-b-1-gb-24532.html</td>
  </tr>
  <tr>
    <td>GrovePi+</td>
    <td>--</td>
    <td>36.95€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-module-grovepi-103010002-23075.htm</td>
  </tr>
  <tr>
    <td>Carte SD </td>
    <td>--</td>
    <td>9.80€</td>
    <td>1</td>
    <td>Transcend 16GB microSDHC</td>
  </tr>
  <tr>
    <td>accéléromètre 3 axes</td>
    <td></td>
    <td>10.40€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-module-accelerometre-3-axes-grove-101020039-23846.htm</td>
  </tr>
  <tr>
    <td>Détecteur de distance IR</td>
    <td></td>
    <td>6.20€</td>
    <td>1</td>
    <td>https://www.gotronic.fr/art-detecteur-de-distance-ir-grove-101020175-26434.htm</td>
  </tr>
</table>


## **Etudes des capteurs et actionneurs à utiliser:**

Problème: détection de la réception du courrier. La quantité de courrier n’est pas intéressant à connaître, cependant nous voulons savoir quand une personne dépose quelque chose dans la boîte aux lettres.

De ce fait nous sommes partis sur plusieurs hypothèses. Au début nous avons cherché à faire un système de balance pour détecter une différence de poids entre chaque pose de lettres grâce à un capteur de force ou un capteur de torsion. Les deux capteurs posent problème sur l'étalonnage des données: mesure pas assez précises pour détecter la pose d’une enveloppe sur notre dispositif. De plus pour les deux dispositifs il faut utiliser quatre capteurs au vue de la taille de notre plateau. Cela pose un gros problème de stabilisation.

En deuxième lieu nous avons pensé à utiliser un potentiomètre. Le problème avec ce capteur est qu’il mesure 60 mm de long et donc son positionnement à la vertical est impossible car nous n’avons pas la hauteur nécessaire.

De ce fait nous voulions le positionner à l’horizontal au fond de notre boitier mais cela implique de faire une transformation du mouvement vertical en horizontal. Pour éviter les imprécisions liées à notre montage nous avons préféré changer de capteur.

En dernier lieu nous sommes partis sur un accéléromètre pour détecter une accélération à chaque fois qu’une lettre est déposé. Ce capteur nous convient totalement: l’étalonnage des données est bon et surtout la précision est bonne car nous détectons la pose d’une feuille de 5 grammes.

## **Premier prototype:**

![image alt text](/images/image_0.jpg)

![image alt text](/images/image_1.jpg)

## **Maquette Solidworks:**

![image alt text](/images/image_2.png)

Maquette complète et assemblée

![image alt text](/images/image_3.png)

Partie 1 de la maquette avec incorporation de la LED et du bouton

![image alt text](/images/image_4.png)

Partie 2 de la maquette avec incorporation du capteur infrarouge

![image alt text](/images/image_5.png)

Pièce permettant d’attacher toutes nos parties

![image alt text](/images/image_6.png)

Partie du capot


Etude des capteurs et actionneurs

Afin de bien répondre aux besoins fonctionnels de notre boîte aux lettres connectée on aura besoin de deux types de capteurs :

* Un premier capteur pour détecter la présence d’une nouvelle lettre.

* Un deuxième capteur pour détecter l’ouverture et la fermeture de la porte de la boîte aux lettres.

* Enfin il nous faut une LED ainsi qu’un bouton pour pouvoir informer le facteur qu’un colis ou lettre est dans la boîte et qu’il doit le prendre pour l’envoyer.

    Pour le premier point, nos recherches ont révélé les 6 types de capteurs suivants :

Le télémètre : Il n’existe pas de capteur à un prix abordable permettant de faire une mesure de la précision demandée. En effet, pour détecter l'arrivée d’une lettre dans la boîte aux lettres, il faut capter un déplacement du capot de moins d’un millimètre. De plus le deuxième problème était que ce capteur fonctionne qu’à partir d’une distance de 10cm; c’est donc bien trop long pour que nous puissions l’utiliser. 

Le potentiomètre : Le problème avec ce capteur est qu’il mesure 60 mm de long et donc son positionnement à la vertical est impossible car nous n’avons pas la hauteur nécessaire. De ce fait nous voulions le positionner à l’horizontal au fond de notre boitier mais cela implique de faire une transformation du mouvement vertical en horizontal. Pour éviter les imprécisions liées à notre montage nous avons préféré changer de capteur.   

Le gyroscope : Ce capteur-là agit comme une boussole et il répond partiellement à nos besoins mais l’absence d’un détecteur de mouvement sur son axe vertical le rend inadaptable à notre système.

Le capteur de collision: Ce capteur semblait très prometteur, cependant après de nombreux tests et une lecture approfondi de la documentation, le capteur ne permet pas une mesure assez fini pour détecter la réception d’une lettre de moins de 20 grammes.

Le capteur de force : Ce capteur est à étudier, cependant il ne nous semble que très peu adapté à notre système. En effet, nous objet dispose d’une grande surface en mouvement (le capot), ainsi il nous semble difficile d’utiliser qu’un seul capteur de force pour détecter la réception d’une lettre.

L’accéléromètre : En dernier lieu nous sommes partis sur un accéléromètre pour détecter une accélération à chaque fois qu’une lettre est déposé. Ce capteur nous convient totalement: l’étalonnage des données est bon et surtout la précision est bonne car nous détectons la pose d’une feuille de 5 grammes.

	Pour le deuxième point nous avons choisi d’utiliser un capteur de proximité infrarouge afin de détecter l’ouverture et la fermeture de la porte de la boîte aux lettres.


# Etude des capteurs et actionneurs

Afin de bien r�pondre aux besoins fonctionnels de notre bo�te aux lettres connect�e on aura besoin de deux types de capteurs�:

* Un premier capteur pour d�tecter la pr�sence d�une nouvelle lettre.

* Un deuxi�me capteur pour d�tecter l�ouverture et la fermeture de la porte de la bo�te aux lettres.

* Enfin il nous faut une LED ainsi qu�un bouton pour pouvoir informer le facteur qu�un colis ou lettre est dans la bo�te et qu�il doit le prendre pour l�envoyer.

    Pour le premier point, nos recherches ont r�v�l� les 6 types de capteurs suivants�:

Le t�l�m�tre�: Il n�existe pas de capteur � un prix abordable permettant de faire une mesure de la pr�cision demand�e. En effet, pour d�tecter l'arriv�e d�une lettre dans la bo�te aux lettres, il faut capter un d�placement du capot de moins d�un millim�tre. De plus le deuxi�me probl�me �tait que ce capteur fonctionne qu�� partir d�une distance de 10cm; c�est donc bien trop long pour que nous puissions l�utiliser.

[t�l�m�tre](https://www.gotronic.fr/art-capteur-de-mesure-sharp-gp2y0a21yk0f-11539.htm) 

[Desscription compl�te] (/EtudesCapteurs/t�l�m�tre.pdf)

Le potentiom�tre�: Le probl�me avec ce capteur est qu�il mesure 60 mm de long et donc son positionnement � la vertical est impossible car nous n�avons pas la hauteur n�cessaire. De ce fait nous voulions le positionner � l�horizontal au fond de notre boitier mais cela implique de faire une transformation du mouvement vertical en horizontal. Pour �viter les impr�cisions li�es � notre montage nous avons pr�f�r� changer de capteur. 

[potentiom�tre]�(https://www.gotronic.fr/art-potentiometre-a-glissiere-grove-101020036-19012.htm)

[Description compl�te] (https://www.gotronic.fr/art-potentiometre-a-glissiere-grove-101020036-19012.htm#complte_desc)

Le gyroscope�: Ce capteur-l� agit comme une boussole et il r�pond partiellement � nos besoins mais l�absence d�un d�tecteur de mouvement sur son axe vertical le rend inadaptable � notre syst�me.

[gyroscope] (https://www.gotronic.fr/art-module-boussole-3-axes-grove-101020034-18955.htm)

[Description compl�te] (https://www.gotronic.fr/art-module-boussole-3-axes-grove-101020034-18955.htm#complte_desc)

Le capteur de collision: Ce capteur semblait tr�s prometteur, cependant apr�s de nombreux tests et une lecture approfondi de la documentation, le capteur ne permet pas une mesure assez fini pour d�tecter la r�ception d�une lettre de moins de 20 grammes.

[capteur de collision] (https://www.gotronic.fr/art-capteur-de-collision-grove-101020005-23847.htm)

[Description compl�te] (http://wiki.seeed.cc/Grove-Collision_Sensor/)

Le capteur de force�: Ce capteur est � �tudier, cependant il ne nous semble que tr�s peu adapt� � notre syst�me. En effet, nous objet dispose d�une grande surface en mouvement (le capot), ainsi il nous semble difficile d�utiliser qu�un seul capteur de force pour d�tecter la r�ception d�une lettre.

[capteur de force] (https://www.gotronic.fr/art-capteur-de-force-adaptateur-1131-12151.htm)

[Sch�ma] (/EtudesCapteurs/force.pdf)

[Mode d'emploi] (https://www.phidgets.com/docs/1131_User_Guide)

L�acc�l�rom�tre�: En dernier lieu nous sommes partis sur un acc�l�rom�tre pour d�tecter une acc�l�ration � chaque fois qu�une lettre est d�pos�. Ce capteur nous convient totalement: l��talonnage des donn�es est bon et surtout la pr�cision est bonne car nous d�tectons la pose d�une feuille de 5 grammes.

[acc�l�rom�tre] (https://www.gotronic.fr/art-module-accelerometre-3-axes-grove-101020039-23846.htm)

[Description compl�te] (http://wiki.seeed.cc/Grove-3-Axis_Digital_Accelerometer-1.5g/)

Pour le deuxi�me point nous avons choisi d�utiliser un capteur de proximit� infrarouge afin de d�tecter l�ouverture et la fermeture de la porte de la bo�te aux lettres.

[acc�l�rom�tre] (https://www.gotronic.fr/art-detecteur-de-distance-ir-grove-101020175-26434.htm)

[Description compl�te] (http://wiki.seeed.cc/Grove-IR_Distance_Interrupter_v1.2/)



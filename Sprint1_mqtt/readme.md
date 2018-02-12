# Prototype

## 1. Structure Logicielle

Afin de mieux comprendre l�architecture de notre application voici un sch�ma illustratif des composants de notre syst�me ainsi que les protocoles utilis�s�: 

![image alt text](/images/image_0_proto.png)

			 Figure 1 : sch�ma illustratif de notre architecture

* Pour les n�uds finaux�� ce stade on utilise les cartes Raspberry pi pour des raisons de prototypage. Ces cartes regroupent la collecte de donn�es ainsi bien que leurs pr�traitements et les fonctionnalit�s de la passerelle. On a choisi d�utiliser NodeJs comme langage de programmation aux niveaux de ces n�uds.

* Pour les communications entre les n�uds finaux et la passerelle�: le r�seaux LoRa sera le mieux adapt�. Cette technologie de modulation de fr�quence open source ne peut faire circuler que les petits paquets de donn�es �mis par nos capteurs et fait en sorte de ne pas grignoter beaucoup de bande passante et de cons�quent ne pas gaspiller trop d��nergie critique au fonctionnement de nos objets connect�s.   

* Pour la communication entre la passerelle et nos services d�orchestrations on distingue deux types de protocoles qui sont adapt�s aux objets connect�s de mani�re g�n�rale gr�ce � leurs faibles consommations d��nergie�: le premier c�est CoAP qui est un protocole de transfert de documents semblable aux HTTP cependant une contrainte nous emp�che de l�impl�menter�: les n�uds finaux (les capteurs) sont consid�r�s comme des serveurs par ce protocole et les clients doivent les solliciter afin d�avoir leurs informations. Ce type de communication posera un probl�me si ces capteurs sont derri�re un NAT et il faudra configurer manuellement les redirections de port au niveau du routeur ce qui est impossible pour notre syst�me. On Utilise alors le MQTT qui en plus de sa consommation faible d��nergie permet aux clients de s�abonner � un type pr�d�fini de message.

* Les autres parties de l�architecture se divise en un serveur d�velopp� en NodeJs qui permet d�orchestrer les services, de les stocker dans notre base de donn�es et de fournir une logique impl�mentable par les interfaces pour les utilisateurs finaux.

## 2. Prototype

    ### 1. Physique

![image alt text](/images/image_1_proto.jpg)![image alt text](/images/image_2_proto.jpg)

Figure 2 : Prototype physique de notre plug-in bo�te aux lettres

Voici notre prototype permettant de faire nos tests autant physique que logiciel.

    ### 2. Logiciel

Au niveau du logiciel, il est actuellement possible de d�tecter la r�ception d�une lettre et d�envoyer un mail au propri�taire de la bo�te aux lettres. De plus, une notification gr�ce au bouton poussoir est possible. Enfin le prototype d�tecte l�ouverture et la fermeture d�une porte fictive gr�ce au capteur de proximit�.

Pour conclure, le prototype peut communiquer avec notre serveur et une base de donn�es afin de faire persister toutes ces notifications.


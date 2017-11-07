# Prototype

## 1. Structure Logicielle

Afin de mieux comprendre l’architecture de notre application voici un schéma illustratif des composants de notre système ainsi que les protocoles utilisés : 

![image alt text](/images/image_0_proto.png)

			 Figure 1 : schéma illustratif de notre architecture

* Pour les nœuds finaux à ce stade on utilise les cartes Raspberry pi pour des raisons de prototypage. Ces cartes regroupent la collecte de données ainsi bien que leurs prétraitements et les fonctionnalités de la passerelle. On a choisi d’utiliser NodeJs comme langage de programmation aux niveaux de ces nœuds.

* Pour les communications entre les nœuds finaux et la passerelle : le réseaux LoRa sera le mieux adapté. Cette technologie de modulation de fréquence open source ne peut faire circuler que les petits paquets de données émis par nos capteurs et fait en sorte de ne pas grignoter beaucoup de bande passante et de conséquent ne pas gaspiller trop d’énergie critique au fonctionnement de nos objets connectés.   

* Pour la communication entre la passerelle et nos services d’orchestrations on distingue deux types de protocoles qui sont adaptés aux objets connectés de manière générale grâce à leurs faibles consommations d’énergie : le premier c’est CoAP qui est un protocole de transfert de documents semblable aux HTTP cependant une contrainte nous empêche de l’implémenter : les nœuds finaux (les capteurs) sont considérés comme des serveurs par ce protocole et les clients doivent les solliciter afin d’avoir leurs informations. Ce type de communication posera un problème si ces capteurs sont derrière un NAT et il faudra configurer manuellement les redirections de port au niveau du routeur ce qui est impossible pour notre système. On Utilise alors le MQTT qui en plus de sa consommation faible d’énergie permet aux clients de s’abonner à un type prédéfini de message.

* Les autres parties de l’architecture se divise en un serveur développé en NodeJs qui permet d’orchestrer les services, de les stocker dans notre base de données et de fournir une logique implémentable par les interfaces pour les utilisateurs finaux.

## 2. Prototype

    ### 1. Physique

![image alt text](/images/image_1_proto.jpg)![image alt text](/images/image_2_proto.jpg)

Figure 2 : Prototype physique de notre plug-in boîte aux lettres

Voici notre prototype permettant de faire nos tests autant physique que logiciel.

    ### 2. Logiciel

Au niveau du logiciel, il est actuellement possible de détecter la réception d’une lettre et d’envoyer un mail au propriétaire de la boîte aux lettres. De plus, une notification grâce au bouton poussoir est possible. Enfin le prototype détecte l’ouverture et la fermeture d’une porte fictive grâce au capteur de proximité.

Pour conclure, le prototype peut communiquer avec notre serveur et une base de données afin de faire persister toutes ces notifications.


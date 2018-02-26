Sprint 3

## Application Mobile

### 	Swift

Nous avons souhaité développer une application mobile pour les clients voulant acheter notre boite aux lettres.

Dans cette application il y a accès à toutes les données utilisateurs ainsi que la gestion des boites aux lettres.

L’application étant développé en swift, elle n’est disponible que sur iOS et donc sur iPhone ou iPad.

### 	Ionic

Dans le même cadre que précédemment, la nécessité d’une application pour vendre un produit fini était nécessaire. De plus, nous ne pouvons nous contenter de viser le public sur iOS. Ainsi nous avons développé une application en Ionic afin de viser le public iOS et le public Android. L’application est opérationnelle. De la même manière que sur l’application codée en Swift, vous pouvez avoir accès à toutes les infos concernant les données utilisateurs ainsi que la gestion des boites.

Actuellement il n’y a pas encore d’application destinée pour la poste et nous ne comptant pas en faire. Nous mettons simplement à disposition nos services pour la poste puisse y avoir accès depuis leur terminaux.

## Interface Web

Pour toucher le plus de personnes possible, nous avons mis en place notre site web afin d'interagir avec notre produit. Dans cette IHM il y a deux côtés: le premier étant pour les particulier, c’est à dire les personnes qui seront clientes de nos services et donc de notre boite aux lettres. Le deuxième côté est celui destiné à la poste. Avec cette interface, elle pourra voir toutes les données des boîtes aux lettres de ses clients dans son rayon d’action. Ainsi, il y aura une meilleure gestion des relevés de lettres ou de colis chez les particuliers et la poste pourra de la même manière optimiser la tournée de ses facteurs en fonction du temps passé pour la dépose du courrier.

![image alt text](/images/particulier_web.png)

Exemple de l’interface d’un utilisateur qui a qu’une seule boite.

![image alt text](/images/poste_web.png)

Exemple de l’interface de la poste qui peut gérer tous ses potentiels clients.

## Application Passerelle

Souhaitant vivre avec les technologie de l’avenir, nous avons mis en place une application s’installant directement dans les box de nos futurs clients. Cette application permet de faire le lien entre la boite aux lettres et le serveur de données, qui lui est hébergé dans le cloud.

Cette application est générique. En effet, une fois installée, elle "écoute" tous les objets qu’elle peut voir sur le réseau local en UPnP. Dès lors qu’elle trouve un objet nommé Smartil, la communication commence et le système est prêt à fonctionner.

## Serveur et base de données

Nous avons décidé de mettre en place un serveur de type REST afin de gérer l’intelligence de notre projet. C’est lui que fait la gestion de toutes les informations recueillis dans le sites web, l’application mobile ou bien la boite aux lettres.

Il contact aussi l’API Google Maps afin de gérer le rayon d’action des différentes postes qui utilisent notre service.

Toutes les données sont sauvegardées par le serveur dans une base de données persistante.

![image alt text](/images/serveur.png)

## Serveur Raspberry (Boite aux lettres)

Enfin voici l’objet en lui même. Notre boite aux lettres connectées utilisant une raspberry PI 3. 

Dans cet objet nous utilisons le protocole UPnP afin de déployer nos services.

Parmis les services que nous proposons, il y a:

* la notification de la réception de courrier

* l’envoi de courrier par notre boite aux lettres

* la prise du courrier par le facteur

* l’accès à tous les capteurs et actionneurs: LED, bouton, accéléromètre et télémètre infrarouge.

L’objet est très simple d’utilisation, en effet, il suffit de le brancher pour qu’il fonctionne. Il va se connecter automatiquement au réseau wifi disponible afin de déployer ses services. Ces services sont visibles simplement avec l’outils Device Spy et de ce fait, une autre utilisation de nos services est possible.


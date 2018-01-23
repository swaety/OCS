Sprint 2

## Etude de la signature électronique automatique de la boite aux lettres

Nous avons proposé à nos encadrants le fait de faire une signature électronique automatique avec la boite aux lettres lors de la réception du courrier. En effet le facteur apporte un colis ou une lettre à faire signer cependant si la personne n’est pas présente, cela pose problème et il y a une perte de temps autant pour le facteur que pour la personne.

De ce fait nous voulions que le facteur puisse déposer le courrier à faire signer directement dans la boite aux lettres et que celle ci signe avec une signature électronique. 

La solution d’émettre un signal d’une quelconque manière au propriétaire de la boite est une idée qui ne résout pas le problème du temps perdu. En effet le facteur ne peut pas attendre que le propriétaire se prenne le temps de regarder son téléphone par exemple et de signer électroniquement pour qu’il puisse déposer le courrier.

Nos encadrants nous ont malheureusement immédiatement bloqué car nous n’avons pas le droit légalement parlant de faire signer la boite aux lettres à la place d’un humain.

Pour être totalement sur de la faisabilité ou non de ce service dans ce projet nous avons pris contact avec une avocate de Metz. Celle ci nous a confirmé le fait que seule une personne physique peut signer électroniquement et non un objet. Il n’y a pas encore eu de cas de jurisprudence dans ce sens afin de faire évoluer la loi.
Ainsi nous avons dû oublier ce point.

## Optimisation de la boite aux lettres pour la poste

Dans le cadre de ce projet, nous nous sommes présentés à la Poste de Bouzonville afin de parler avec le directeur d’agence. Celui-ci nous a reçu et nous avons pu lui exposer notre projet. Nous lui avons expliqué que si les boites aux lettres étaient toutes équipées de notre système, il pourrait voir le moment de passage de chaque facteur au niveau des boîtes aux lettres. Cette énorme quantité de données pourrait lui permettre d’optimiser la tourner de chaque facteur afin de gagner du temps et de ne pénaliser personne sur la charge de travail.

## Mise en place des services sur la Raspberry

Parmis les deux points précédents, la signature électronique et automatique n’est pas possible, comme précisé dans l’article. Cependant l’optimisation de la boite aux lettres pour la poste est implémentée dedans et est l’un des points les plus importants.

Ensuite vu que ça reste tout de même une boite aux lettres, nous avons intégrer un service permettant de détecter la réception du courrier par l’ajout d’une notification dans la base de données. De plus nous avons choisi de pouvoir poster du courrier avec notre boite aux lettres. Pour se faire, il y aura une diode pour prévenir le facteur qu’il doit prendre ce qu’il y a dans la boite.

Enfin, nous avons mis en place un service à la personne. Celui-ci permet de détecter l’inactivité de la levée du courrier pendant une durée calculée en fonction de la levée habituelle du courrier.

## Mise en place d’un serveur REST

Nous avons décidé de mettre en place un serveur de type REST afin de gérer l’intelligence de notre projet.

Toutes les données sont sauvegardées par le serveur dans une base de données persistante.

## Développement d’un interface web

Pour avoir la meilleure performance possible, nous avons développé une interface web en vanilla JS. Celle ci est assez minimaliste au niveau de design mais suffisante l’utilisabilité de notre projet

url de l’interface bientot disponible
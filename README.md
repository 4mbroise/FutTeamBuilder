# FutTeamBuilder
L'application permet de parcourir une base de données qui contient plus de 10000 joueurs de football avec leurs stats et leurs informations personnelles.
Elle permet aussi de créer des équipes de 11 joueurs. Une fois créé, une équipe peut être modifier ou suprrimer.

La base de données a été récupéré depuis ce lien : https://www.kaggle.com/datasets/stefanoleone992/fifa-22-complete-player-dataset?select=players_22.csv


Pour l'organisation des deux membres, Eliott a travaillé sur la totalité du backend et a permis l'initialisation de la base de données.
Khaled a travaillé que sur le front. Comme la partie FrontEnd était beaucoup plus compliqué (surtout avec l'affichage des joueurs, des formulaires de création 
d'une équipe), Eliott et KHaled se sont entraidés pour assurer le dévellopement de l'application.

Principales fonctionnalités de l'application :
- consulter la base de données de joueurs
- afficher les joueurs sur une carte avec leurs stats, nom complet, logo de leur club, ... etc
- afficher les joueurs sur des pages déroulantes
- afficher les équipes créées
- créer, modifier et supprimer une équipe

Une fois le projet clonée, les consignes suivantes doivent être éxecutées :
- se connecter à une base de données mongodb avec l'URL : mongodb://localhost:27017 ou http://localhost:27017 (peut être remplacer localhost par 0.0.0.0 pour certaines
machines
-créer deux collections teams et players dans votre base de données
-Pour l'initialistion de la collection players : fichier JSON nommé players se trouvant à la racine du projet
-dans le dossier front : yarn install
-dans le dossier api : yarn install
-dans le dossier front : yarn add @swimlane/ngx-charts@18.0.1

Pour lancer l'application :
- dans le dossier api : yarn run start:dev
- dans le dossier front : yarn ng serve
- acceder au url généré par la commande yarn ng serve




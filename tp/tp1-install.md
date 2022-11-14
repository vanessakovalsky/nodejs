# TP 1 - Installation et premier pas avec les modules et les évènements

## Objectifs de cette partie

- Installer NodeJS
- Développer un chat-bot simple en Node.js à l'aide de Express
- Savoir écrire une API avec des points d'entrée synchrones


## Installer NodeJS

* Nous allons travailler avec la dernière version LTS de NodeJS
* En fonction de votre environnement, télécharger le fichier correspondant sur la page : https://nodejs.org/en/download/ 
* Lancer l'installation et suivre les étapes d'installations
* Une fois l'installation terminée, ouvrir un terminal / une invite de commande et taper
```
node --version
```
* Vous devriez obtenir :
```
v18.12.1
```
* NodeJS est maintenant installé et prêt à être utilisé


## Exercice 1 - Afficher Hello World dans la sortie standard

* Nous allons écrire et exécuter un premier programme Node.js dont la seule responsabilité sera d'afficher la chaîne de caractères "Hello World" dans la console. (sortie standard)

* Attentes techniques: Le programme doit être constitué d'une seule ligne de code.


## Exercice 2 - Affichage d'une page HTML

* Nous souhaitons afficher le HTML se trouvant à cette adresse : http://bliaudet.free.fr/IMG/zip/node-TP1.zip  
* Pour cela on utilise le module HTTP (à importer) avec ses méthodes writeHead, write et end sur la réponse

## Exercice 3 - Utiliser du code JS existants

* Nous souhaitons utiliser du code JS déjà écris et disponible à cette adresse : http://bliaudet.free.fr/IMG/zip/node-TP0.zip 
* Utiliser le module HTTP comme dans l'exercice précédent, pour afficher la todo list du lien.

## Exerice 4 - Utiliser des modules de NPM

* Installer avec NPM le module nodemon
* A l'aide de ce module créer une fonction qui permet d'afficher le texte Hello World !!! 
    * en majuscules sur fond rose, 
    * en minuscules sur fond jaune 
    * et sans changement de casse ni fond coloré. 
* Le texte sera contenu dans une variable

## Exercice 5 - Création de son propre module

* Créer un module qui permet d'afficher :
    * le compteur de l'exercice 2
    * la todo list
* Utiliser ce module dans un fichier en l'important

# TP4 - Premier serveur web

# Exercice 1 - Une API simple mais polie

Le but est de développer un serveur Web/API basique qui répondra systématiquement "Bonjour !" à toutes les requêtes HTTP GET émises par des clients au chemin `/` (racine). Nous allons pour cela utiliser les modules HTTP et URL

Attentes fonctionnelles: Une fois le serveur lancé, l'envoi d'une requête HTTP GET à la racine du serveur web retourne bien le texte "Bonjour !".


## Exercice 2 - Paramètres `GET`

Nous avons à présent un serveur web dont l'API contient un seul point d'entrée (*endpoint*):
- `GET /` retourne systématiquement "Bonjour !".

Nous allons ajouter un point d'entrée `GET /hello` qui acceptera un paramètre `nom`, et ajustera le contenu de la réponse en fonction de la valeur de ce paramètre:

- toute requête à `GET /hello?nom=Sasha` doit obtenir la réponse `Bonjour, Sasha !`
- toute requête à `GET /hello?nom=Michel` doit obtenir la réponse `Bonjour, Michel !`
- toute requête à `GET /hello` doit obtenir la réponse `Quel est votre nom ?`


## Exercice 3 - Envoi de message en `POST`

Nous avons à présent un serveur web dont l'API contient deux points d'entrée (*endpoints*):
- `GET /` retourne systématiquement "Bonjour !".
- `GET /hello` retourne une salutation au `nom` fourni en paramètre GET.

Maintenant, on souhaite que l'API réponde un message pertinent à chaque message envoyé par les utilisateurs. Sachant qu'un message peut être trop long pour passer par un paramètre GET, nous allons le passer via le corps d'une requête HTTP POST.

Pour cela, nous allons y ajouter un point d'entrée (*endpoint*) de méthode POST au chemin `/chat`. Celui-ci pourra adapter sa réponse en fonction du contenu passé avec chaque requête. Le contenu devra être passé au format JSON, et le message de l'utilisateur devra être transmis comme valeur de la propriété `msg`.

Exemples / cas d'usage:
- toute requête `POST http://localhost:3000/chat` avec le contenu `{"msg":"ville"}` doit obtenir la réponse "Nous sommes à Paris"
- toute requête `POST http://localhost:3000/chat` avec le contenu `{"msg":"météo"}` doit obtenir la réponse "Il fait beau"


> Indice: vous allez devoir intégrer un autre module à votre aookucatuib afin qu'elle soit en mesure d'extraire les données au format JSON.



## Exercice 4 - Tester le serveur en local


### Tests: vérifier si le serveur répond comme prévu

Commandes à exécuter (dans une session de shell Linux séparée de celle depuis laquelle votre serveur est exécuté), pour tester la réponse du serveur aux requêtes:

- `$ curl "http://localhost:3000/"` doit obtenir la réponse "Bonjour !"
- `$ curl "http://localhost:3000/hello?nom=Sasha"` doit obtenir la réponse "Bonjour, Sasha !""
- `$ curl "http://localhost:3000/hello?nom=Michel"` doit obtenir la réponse "Bonjour, Michel !""
- `$ curl "http://localhost:3000/hello"` doit obtenir la réponse "Quel est votre nom ?"
- `$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"ville\"}" "http://localhost:3000/chat"` doit obtenir la réponse "Nous sommes à Paris"
- `$ curl -X POST --header "Content-Type: application/json" --data "{\"msg\":\"météo\"}" "http://localhost:3000/chat"` doit obtenir la réponse "Il fait beau"


### Étapes proposées

À chaque étape, assurez-vous de (re)démarrer votre serveur (`$ node server.js`), de lui envoyer les requêtes listées ci-dessus (depuis un shell Linux séparé) puis d'observer la réaction du serveur à cette requête, jusqu'à ce que l'objectif de l'exercice soit atteint:

1. Depuis votre shell Linux, positionnez-vous dans votre répertoire personnel (`home`) puis créez un répertoire `nodejs-chatbot` dans ce dernier.
2. Dans le répertoire `nodejs-chatbot`, créez un fichier `server.js` puis collez-y le contenu de l'exercice précédent.
3. Toujours depuis `nodejs-chatbot`, exécutez `$ npm init` pour initialiser le fichier de projet Node.js: `package.json`.

    > Observez le contenu de `package.json`. À quoi sert ce fichier ?

4. Créez un fichier `README.md` pour expliquer le plus simplement possible à d'autres personnes: que fait votre programme Node.js, comment l'installer et l'exécuter sur sa propre machine, et comment le tester.


## Pour aller plus loin

### Modules: `module.exports` et `require()`

- [Comprendre module.exports et exportations dans Node.js](https://blog.arcoptimizer.com/comprendre-module-exports-et-exportations-dans-node-js)
- [What is the purpose of Node.js module.exports and how do you use it? - Stack Overflow](https://stackoverflow.com/a/5311377/592254)
- [Modules - Node.js Documentation](https://nodejs.org/api/modules.html#modules_module_exports)

### Fat arrow functions (`=>`)

- Explication concise: [Fonctions fléchées - JavaScript - MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es)
- [Les fat arrow function en Javascript](https://blog.nathanaelcherrier.com/fr/les-fat-arrow-function-en-javascript/)
- [ES6, ES2015 : les fonctions fléchées](https://putaindecode.io/fr/articles/js/es2015/arrow-functions/)

### Typage avec TypeScript

- [How To Use TypeScript In A Node.js and Express Project](https://catalins.tech/how-to-use-typescript-in-a-nodejs-and-express-project)


## Création d'un véritable chat-bot

Toujours à l'aide de Node.js et Express, écrire un chat-bot contactable depuis Facebook Messenger ou autre application mobile de messagerie instantanée (ex: Telegram).

Liens:
- [Build a Personal Facebook Messenger Bot in 10 minutes with Nodejs and Standard Library](https://hackernoon.com/build-a-personal-facebook-messenger-bot-in-10-minutes-a7a237f3f018)
- [How to Deploy Express on Now.sh - DEV Community](https://dev.to/warenix/how-to-deploy-express-on-nowsh-414i)
- [Serverless Telegram Bot with Firebase - Francisco Gutiérrez - Medium](https://medium.com/@pikilon/serverless-telegram-bot-with-firebase-d11d07579d8a)
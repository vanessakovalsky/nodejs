# TP 3 - evenement


## Objectifs de cette partie

- Savoir **appeler** une fonction asynchrone à base de callback ou `Promise`
- Savoir **définir** une fonction asynchrone à base de callback ou `Promise`
- Application: envoyer une requête vers une autre API, puis traiter sa réponse

## Prérequis:
- définition et appel de fonctions synchrones en JavaScript
- écriture et exécution de programmes JavaScript avec Node.js
- compréhension basique du fonctionnement des requêtes HTTP



## Exercice 1 - Envoi de requête à l'aide d'un _callback_

Dans cet exercice, nous allons écrire un programme qui émet une requête HTTP GET vers l'API d'un autre serveur. Nous allons donc développer un _client_ d'API, afin de découvrir le concept d'appel de fonction _asynchrone avec callback_. (cf aide-mémoire: [Fonctions synchrones VS asynchrones](../sync-vs-async))

> Indice: [exemple d'usage de `request`](https://github.com/request/request#super-simple-to-use).

Note: En dehors de ce cours, n'utilisez pas le module `request`, car il est déprécié.

---

## Exercice 2 - Gestion d'erreurs de callback

Dans l'exercice précédent, nous sommes naïvement partis du principe que la requête fonctionnerait systématiquement. Cela revient à espérer que l'API interrogée ne sera jamais indisponible et que l'utilisateur de notre programme sera connecté à Internet de manière fiable. En réalité, un programme n'est jamais à l'abri de traitements qui ne se passent pas comme prévu, et c'est au développeur de prévoir et traiter correctement ces cas d'erreur, afin de ne pas laisser l'utilisateur dans l'embarras face à un problème qu'il ne saura pas résoudre.

Dans cet exercice, nous allons volontairement envoyer une requête sur un serveur qui n'existe pas, et afficher l'erreur retournée par l'appel à `request()` dans la sortie standard.


> Indice: [exemple d'usage de `request`](https://github.com/request/request#super-simple-to-use).

---

## Exercice 3 - Requête à l'aide de `Promise`

Dans les exercices 1 et 2, nous avons envoyé une requête HTTP GET à l'aide de la fonction `request()`. Pour définir le traitement de la réponse (ou erreur) à cette requête, nous avons passé une fonction de _callback_ en paramètre de l'appel à `request()`. Cette fonction de _callbacks_ sera _rappelée_ (c'est la traduction française de l'expression _call back_) par la fonction `request()` une fois que la requête aura réussi ou échoué.

Les fonctions fournies par la bibliothèque standard de Node.js s'appuient généralement sur ce principe de _callback_ pour être informé d'événements asynchrones. Dans l'exercice précédent, l'événement asynchrone qui nous intéressait était la réception d'une réponse à notre requête.

Le concept de _promesse_ (en anglais: `Promise`; cf [javascript.info](https://javascript.info/promise-basics) et [Référence MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)) a été intégré au langage JavaScript afin de simplifier le séquençage d'appels asynchrones, et améliorer leur lisibilité en évitant le "callback hell".

Dans cet exercice, nous allons utiliser une _promesse_ pour récupérer le résultat d'un appel à une fonction asynchrone. Pour cela, nous allons utiliser la bibliothèque [`node-fetch`](https://www.npmjs.com/package/node-fetch).


> Indice: consulter la documentation de `node-fetch` pour savoir comment l'utiliser. (cf lien fourni ci-dessus)


## Exercice 4 - Gestion d'erreurs de `Promise`

Encore une fois, nous avons implémenté une version naïve de notre requête, en partant du principe que celle-ci se passerait comme prévu.

Dans cet exercice, nous allons volontairement envoyer une requête sur un serveur qui n'existe pas, et afficher dans la sortie standard l'erreur (aussi appelée _exception_) retournée par la promesse de `fetch()`.

> Indice: consulter les références fournies en fin de page, pour savoir comment récupérer les erreurs lorsqu'on appelle une fonction qui retourne une `Promise`.


## Exercice 5 - Requête à l'aide de `await`

Le mot clé `await` a été intégré au langage JavaScript pour simplifier et rendre encore plus lisible l'appel de fonctions asynchrones à base de Promesses.

Dans cet exercice, nous allons utiliser `await` au lieu de `.then()` pour afficher la réponse retournée par l'appel à `fetch()`.

> Indice: Sachant que `await` ne peut être employé qu'au sein d'une fonction `async`, vous allez devoir définir une fonction `async` et l'appeler dans la foulée pour que la requête soit envoyée. Cf l'exemple fourni dans l'annexe suivante: [Fonctions synchrones VS asynchrones](../sync-vs-async).

---

## Exercice 6 - Gestion d'erreurs de `await`

Encore une fois, nous avons implémenté une version naïve de notre requête, en partant du principe que celle-ci se passerait comme prévu.

Dans cet exercice, nous allons volontairement envoyer une requête sur un serveur qui n'existe pas, intercepter l'erreur renvoyée par `await fetch()` et afficher cette erreur dans la sortie standard.

> Indice: Lorsqu'une fonction asynchrone est appelée avec `await`, les erreurs sont interceptées de la même manière que lorsqu'on appelle une fonction synchrone: à l'aide d'un bloc `try`-`catch`. Cf l'exemple fourni dans l'annexe suivante: [Fonctions synchrones VS asynchrones](../sync-vs-async).

---

## Exercice 7 - Requête complète

Dans les exercices précédents, nous avons employé les 3 façons d'effectuer un appel de fonction asynchrone: _callback_, `Promise` et `await`. Pour chacune de ces façons de faire, nous avons écrit un programme affichant la réponse quand aucune erreur ne survient, et un exercice séparé ne traitant que les cas d'erreurs.

Nous avons vu que l'usage de `await` permet d'appeler des fonctions asynchrones et de gérer leurs erreurs comme si ces fonctions étaient synchrones. Ce _sucre syntaxique_ est à privilégier, pour la lisibilité et la robustesse qu'il apporte au code.

Dans cet exercice, nous allons combiner la solution des exercices 5 et 6 afin d'obtenir un programme qui affichera la réponse à la requête ou l'erreur obtenue, selon le cas.

Afin de nous permettre de tester les deux cas à la demande, ce programme:
- récupérera sous forme d'argument l'URL à laquelle envoyer une requête;
- en cas de succès, il affichera la réponse dans la sortie standard; (`console.log()`)
- en cas d'échec, il affichera l'erreur obtenue dans la sortie d'erreurs. (`console.error()`)

Par exemple:

```sh
node get.js https://jsonplaceholder.typicode.com/photos # affichera la réponse
node get.js https://serveur-inexistant.xyz # affichera un message d'erreur
```

> Indice: [How to parse command line arguments | Node.js](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/).



## Prise de recul: appels synchrones et asynchrones

Questions auxquelles savoir répondre:

- Quelles fonctions avez-vous appelées de manière asynchrone ?
- Quelles fonctions avez-vous appelées de manière synchrone ?
- Comment reconnaître un appel synchrone d'un appel asynchrone ? Quelle différence ?
- Quelles fonctionnalités auraient pu être implémentées de manière synchrone ou asynchrone ?
- Quels auraient été les impacts de ces deux manières de faire sur notre application ? (ex: avantages, inconvénients, risques, impacts sur la performance, cas limites, etc...)
- Qu'est-ce qu'un *callback* ?


## Pour aller plus loin

### Ressources sur l'exécution de code asynchrone

- Aide-mémoire: [Fonctions synchrones VS asynchrones](../sync-vs-async)
- [Apprendre les mécanismes de base de l'asynchrone en JavaScript, un tutoriel de Yahiko](https://javascript.developpez.com/actu/102019/Apprendre-les-mecanismes-de-base-de-l-asynchrone-en-JavaScript-un-tutoriel-de-Yahiko/)
- [What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ) (26mn, VOST)
- [Callbacks - The Art of Node](https://github.com/maxogden/art-of-node#callbacks)
- [Promises in 15 minutes - DEV Community](https://dev.to/marianesantana/promises-in-15-minutes-9l7)
- [JavaScript Visualized: Promises & Async/Await - DEV Community](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke)

### Manières d'effectuer une requête HTTP depuis Node.js

Il existe plusieurs manières d'effectuer des requêtes HTTP depuis Node.js.

Notamment:

- les fonctions fournies par Node.js dans les moduldes `http` et `https`, ex: [`https.get()`](https://nodejs.org/api/https.html#https_https_get_options_callback)
- un package inspiré par l'API Fetch du W3C: [node-fetch](https://www.npmjs.com/package/node-fetch)
- un package isomorphique: [Axios](https://www.npmjs.com/package/axios)
- un petit nouveau: [httpie](https://github.com/lukeed/httpie)
- autres: [HTTP GET Request in Node.js - Stack Overflow](https://stackoverflow.com/questions/9577611/http-get-request-in-node-js-express)

Quelle solution préférez-vous ? Pourquoi ?







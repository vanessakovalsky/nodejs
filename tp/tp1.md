# TP 1 - Installation et premier pas avec les modules et les évènements

## Objectifs de cette partie

- Installer NodeJS
- Lire et modifier des fichiers avec Node.js.
- **Définir** des fonctions asynchrones.
- Application: améliorer notre chat-bot de la partie 1.


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



## Exercice 1 - Lecture et écriture synchrone

Écrivez un programme Node.js nommé `minuscules.js` qui:

- récupère dans une variable le contenu d'un fichier dont le chemin d'accès est fourni en argument de ligne de commande;
- remplace toutes les lettres majuscules de ce contenu par des minuscules, en modifiant cette variable;
- affiche le contenu de cette variable, après l'avoir modifiée;
- puis écrit ce contenu modifié dans le fichier `résultat.txt`.

🤖 Execution du robot de correction en local:

```sh
$ npm install github:adrienjoly/cours-nodejs # une fois pour toutes, pour installer le robot
$ npx cours-nodejs test 3-1 minuscules.js # pour faire tester minuscules.js au robot de l'exercice 1 de la partie 3
```

Références Node.js et JavaScript utiles:

- [`fs.readFileSync()`](https://devdocs.io/node/fs#fs_fs_readfilesync_path_options),
- [`fs.writeFileSync()`](https://devdocs.io/node/fs#fs_fs_writefilesync_file_data_options),
- [`<string>.toLowerCase()`](https://devdocs.io/javascript/global_objects/string/tolowercase)
- [How to parse command line arguments | Node.js](https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/).



## Exercice 2 - Utilisation d'appels asynchrones

Dupliquer puis modifier le programme `minuscules.js` de l'exercice précédent, en utilisant cette fois les fonctions asynchrones `readFile()` et `writeFile()` au lieu de `readFileSync()` et `writeFileSync()`.

Intercepter les erreurs qui pourraient survenir lors de l'écriture ou de la lecture de fichiers, et les afficher dans la sortie d'erreurs.


🤖 Execution du robot de correction en local:

```sh
$ npx cours-nodejs test 3-2 minuscules.js
```

Références Node.js et JavaScript utiles:

- [`fs.readFile()`](https://devdocs.io/node/fs#fs_fs_readfile_path_options_callback)
- [`fs.writeFile()`](https://devdocs.io/node/fs#fs_fs_writefile_file_data_options_callback)

---

## Exercice 3 - Création d'une fonction intermédiaire avec _callback_

Dupliquer puis modifier le programme `minuscules.js` de l'exercice précédent.

Définir une fonction `lireFichier()` qui acceptera deux paramètres: le nom de fichier à lire et une fonction _callback_. Cette fonction intermédiaire sera responsable de lire le fichier passé en paramètre, puis de transmettre son contenu à la fonction _callback_.

Faites en sorte que:
- la transformation du contenu ainsi que l'écriture du fichier `résultat.txt` soit effectués en dehors de la fonction `lireFichier()`;
- la fonction `readFile()` ne soit appelée **que** par votre fonction `lireFichier()`;
- votre fonction `lireFichier()` appelle la fonction `callback` qui lui aura été passée en paramètre, dès que la lecture sera terminée;
- si la lecture a échoué, appeler `callback(err)`, où le paramètre `err` représente l'erreur en question;
- sinon, appeler `callback(null, contenu)`, où le paramètre `contenu` représente le texte qui a été lu dans le fichier.

Après ces modifications, le programme doit fonctionner de manière identique à celui de l'exercice précédent.

🤖 Execution du robot de correction en local:

```sh
$ npx cours-nodejs test 3-3 minuscules.js
```

---

## Exercice 4 - Utilisation de Promesses

Dupliquer puis modifier le programme `minuscules.js` de l'exercice précédent, en utilisant des _Promesses_ au lieu des _callback_ dans tous les appels et définitions de fonctions asynchrones. Vous devrez implémenter la lecture du fichier en définissant la fonction `lireFichier(nomFichier)`.

Après ces modifications:
- votre programme ne doit donc plus employer de _callback_;
- et il doit fonctionner de manière identique à celui de l'exercice précédent.


🤖 Execution du robot de correction en local:

```sh
$ npx cours-nodejs test 3-4 minuscules.js
```

Conseil: Commencez par transformer seulement l'appel à `writeFile()` dans un premier temps, puis celui à `lireFichier()` dans un deuxième temps.

Références Node.js et JavaScript utiles:

- [`fs.promises.readFile()`](https://devdocs.io/node/fs#fs_fspromises_readfile_path_options)
- [`fs.promises.writeFile()`](https://devdocs.io/node/fs#fs_fspromises_writefile_file_data_options)
- [Aide-mémoire sur différents types de fonctions asynchrones](../sync-vs-async) et [autres ressources](../02-async/#ressources-sur-lexcution-de-code-asynchrone) fournies dans la partie 2.

---

## Exercice 5 - Utilisation de `async` et `await`

Dupliquer puis modifier le programme `minuscules.js` de l'exercice précédent, en utilisant des `async` et `await` au lieu des _Promesses_ dans tous les appels et définitions de fonctions asynchrones. Vous devrez implémenter la lecture du fichier en définissant la fonction `lireFichier(nomFichier)`.

Après ces modifications:
- votre programme ne doit donc plus employer `Promise`, `resolve`, `reject`, `.then()`, `.catch()` ni de _callback_;
- et il doit fonctionner de manière identique à celui de l'exercice précédent.

🤖 Execution du robot de correction en local:

```sh
$ npx cours-nodejs test 3-5 minuscules.js
```

Conseil: Commencez par transformer seulement l'appel à `writeFile()` dans un premier temps, puis celui à `lireFichier()` dans un deuxième temps.


## Références

- cf [Aide-mémoire](../sync-vs-async) et autres [ressources sur l'exécution de code asynchrone](../02-async/#ressources-sur-lexcution-de-code-asynchrone) fournies dans la partie 2.


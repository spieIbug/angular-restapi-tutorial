#Structure de la formation
1. Branche Front-Start   ```git checkout Front-Start```
2. Branche router   ```git checkout router```
3. Branche modules-dependecy-injection   ```git checkout modules-dependency-injection```
4. Branche controllers-scopes   ```git checkout controllers-scopes```
5. Branche databinding   ```git checkout databinding```
6. Branche filters   ```git checkout filters```
7. Branche services   ```git checkout services```
8. Branche directives   ```git checkout directives```
9. Branche js-minification   ```git checkout js-minification```
10. Branche binding-with-external-libraries   ```git checkout binding-with-external-libraries```
11. Branche validation   ```git checkout validation```
12. Branche internationalization   ```git checkout internationalization```

#Installation

```$ composer dump-autoload```

```$ cd webapp```

```$ npm install```

#Architecture du projet

##FRONTEND avec une SPA (Single Page App)

    Angular MVVM
    Router (ui.router) voir https://github.com/angular-ui/ui-router

##BACKEND PHP

    Router
    Contrôleur
    Service
    Repository (DAO)
    Model

#Environnement technique
PHP 5.6 > + Angular 1.x
##[Optionnel mais recommandé]
Dans cette formation j'utilise Git (Outil de versionning du code). Vous pouvez l'installer via :

### Git-scm

https://git-scm.com/downloads

##[Obligatoire]
Vous aurez besoin d'installer (Apache serveur web, Php pour notre backend, MySQL pour la base de données). Pour éviter des configurer
Ces outils ensembles, je recommande d'installer xampp:

###Xampp

https://www.apachefriends.org/fr/download.html

### NPM

On développera aussi une interface utilisateur (SPA : Single Page Application) avec AngularJS by Google. Certains packages seront
utilisés dans cette formation. Je recommande donc d'installer NodeJS, on utilisera après npm (Node Package Manager) pour les
dépendances (FRONT) Ce que l'utilisateur verra à l'écran.

https://nodejs.org/en/

### Composer

Enfin on aura besoin d'installer composer; un outil qui permet de configurer les dépendances d'applications PHP. Je l'utiliserai principalement pour
l'autoload psr-4 (structure de dossiers)

Voir http://www.php-fig.org/psr/psr-4/

voir http://php.net/manual/fr/language.oop5.autoload.php

Enfin, je vais utiliser un generateur de code fait maison :) Pour vous montrer un bref aperçu de l'architecture qu'on va developper. voir sur la vidéo

Je citerai aussi certains problèmes que vous pourrez rencontrez à l'avenir.

Je recommande aussi l'utilisation d'un bon éditeur de code type : SublimeText, Atom, Notepad++ :p, etc. Pour mon cas je suis sur
PhpStorm (payant)

Je recommande aussi deux autres outils, MySQL Workbench pour la modélisation de la base de données, et Postman (plugin chrome) pour interroger
 les API

 Enjoy!
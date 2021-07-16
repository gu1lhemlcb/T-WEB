# EpiTravel

<p align="center">
  <img height="100" src="https://media.giphy.com/media/1eEv6Vgj7CQgDr8yLh/giphy.gif">
</p>
<p align="center">
  because Troa + Kirby = :heart::boom::trollface:
</p>

## Setup

Supprimez le `.git` du projet et initialisez votre nouveau dépôt git.
<br>
Vous pouvez renommer `EpiTravel` à votre convenance en faisant une recherche globale dans votre éditeur.

```bash
# Build Docker environment
docker-compose --file utils/docker/docker.yml build

# Start Docker environment
docker-compose --file utils/docker/docker.yml up

# Install dependencies
docker exec --user application -w /var/html/www EpiTravel composer install
docker exec --user application -w /var/html/www EpiTravel npm install
```

Ajoutez le `vhost` à votre fichier `hosts` :

```bash
127.0.0.1 EpiTravel.vm www.EpiTravel.vm
```

Une fois ceci fait, rendez-vous sur le panel et créez votre compte. Vous serez donc l'administrateur du site. L'action de créer ce compte aura pour effet de créer les pages par défaut dont Kirby a besoin pour fonctionner telles que la page d'accueil ou encore la page d'erreur.

Vous pouvez désormais acceder au projet via :

- `http://EpiTravel.vm`
- `http://EpiTravel.vm:3000` avec BrowserSync

## How to

Principales commandes pour le développement :

```bash
# Stop Docker environment
docker-compose --file utils/docker/docker.yml stop

# Log into the container
docker exec -it --user application -w /var/html/www EpiTravel /bin/zsh

# Build assets (inside the container)
npm run build

# Dev assets (inside the container)
npm run start
```

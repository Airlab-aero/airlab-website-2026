# Guide de publication et maintenance du site AIR Lab
# AIR Lab Website — Publication & Maintenance Guide

---

## FR — Comment fonctionne le site

Le site est construit avec **Astro 6** (framework statique) et hébergé sur **GitHub Pages**. Il n'y a pas de serveur à maintenir : GitHub génère et publie le site automatiquement à chaque fois que tu pousses du code.

### URL actuelle (staging)
```
https://airlab-aero.github.io/airlab-website-2026/
```

---

## FR — Publier officiellement sur airlab.aero

Pour passer de l'URL GitHub à un vrai domaine (`www.airlab.aero` ou `airlab.aero`), il faut 3 étapes.

### Étape 1 — Préparer le fichier CNAME

Crée un fichier `CNAME` dans le dossier `public/` avec une seule ligne :

```
airlab.aero
```

Ce fichier dit à GitHub Pages quel domaine utiliser.

### Étape 2 — Mettre à jour la configuration Astro

Dans `astro.config.mjs`, remplace :

```js
site: isGitHubPages ? 'https://airlab-aero.github.io' : 'https://airlab.aero',
base: isGitHubPages ? '/airlab-website-2026' : '/',
```

par :

```js
site: 'https://airlab.aero',
base: '/',
```

Cette modification supprime le préfixe `/airlab-website-2026` des URLs — le site sera accessible à la racine du domaine.

### Étape 3 — Configurer le DNS chez ton registrar

Va dans l'interface de gestion de ton nom de domaine (`airlab.aero`) et ajoute ces enregistrements DNS :

| Type | Nom | Valeur |
|------|-----|--------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | airlab-aero.github.io |

Ensuite, dans les **Settings > Pages** du dépôt GitHub, entre `airlab.aero` dans le champ "Custom domain" et active **Enforce HTTPS**.

La propagation DNS peut prendre quelques heures.

### Étape 4 — Pousser les changements

```bash
git add public/CNAME astro.config.mjs
git commit -m "feat: configure custom domain airlab.aero"
git push
```

Le site sera en ligne sur `https://airlab.aero` après le déploiement (~2 min) et la propagation DNS.

---

## FR — Modifier le site au quotidien

### Modifier le code (design, textes dans les pages)

1. Ouvre le dossier du projet dans VS Code ou Claude Code
2. Modifie les fichiers dans `src/pages/` ou `src/styles/`
3. Prévisualise localement :
   ```bash
   npm run dev
   ```
   → Ouvre `http://localhost:4321` dans le navigateur
4. Publie :
   ```bash
   git add .
   git commit -m "description de la modification"
   git push
   ```

GitHub Actions déploie automatiquement en ~2 minutes.

### Modifier le contenu (news, équipe, stats)

Le contenu dynamique est géré via **Sanity CMS** (project `x0ftpq7o`).

1. Va sur le Sanity Studio (voir l'URL dans `sanity.config.ts`)
2. Modifie ou ajoute des articles, membres d'équipe, etc.
3. Publie les changements dans Sanity
4. Déclenche un redéploiement du site :
   ```bash
   git commit --allow-empty -m "refresh: update content from Sanity"
   git push
   ```

### Ajouter des images

Copie les fichiers dans le dossier `public/images/`, puis pousse :

```bash
git add public/images/
git commit -m "feat: add images"
git push
```

---

## FR — Résumé rapide

| Action | Commande |
|--------|----------|
| Prévisualiser | `npm run dev` |
| Publier une modification | `git add . && git commit -m "..." && git push` |
| Mettre à jour le contenu Sanity | Push vide : `git commit --allow-empty -m "refresh" && git push` |
| Vérifier le déploiement | GitHub → onglet Actions du dépôt |

---
---

## EN — How the site works

The site is built with **Astro 6** (static framework) and hosted on **GitHub Pages**. There is no server to manage: GitHub automatically builds and publishes the site every time code is pushed to the `main` branch.

### Current URL (staging)
```
https://airlab-aero.github.io/airlab-website-2026/
```

---

## EN — Publishing officially on airlab.aero

To move from the GitHub URL to a real domain (`www.airlab.aero` or `airlab.aero`), follow these 3 steps.

### Step 1 — Create the CNAME file

Create a file named `CNAME` in the `public/` folder containing a single line:

```
airlab.aero
```

This tells GitHub Pages which domain to serve the site from.

### Step 2 — Update the Astro configuration

In `astro.config.mjs`, replace:

```js
site: isGitHubPages ? 'https://airlab-aero.github.io' : 'https://airlab.aero',
base: isGitHubPages ? '/airlab-website-2026' : '/',
```

with:

```js
site: 'https://airlab.aero',
base: '/',
```

This removes the `/airlab-website-2026` path prefix — the site will be served from the domain root.

### Step 3 — Configure DNS at your registrar

In the DNS management interface for `airlab.aero`, add the following records:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | airlab-aero.github.io |

Then, in the GitHub repository **Settings > Pages**, enter `airlab.aero` in the "Custom domain" field and enable **Enforce HTTPS**.

DNS propagation may take a few hours.

### Step 4 — Push the changes

```bash
git add public/CNAME astro.config.mjs
git commit -m "feat: configure custom domain airlab.aero"
git push
```

The site will be live at `https://airlab.aero` after the deployment (~2 min) and DNS propagation.

---

## EN — Day-to-day maintenance

### Editing code (design, page content)

1. Open the project folder in VS Code or Claude Code
2. Edit files in `src/pages/` or `src/styles/`
3. Preview locally:
   ```bash
   npm run dev
   ```
   → Open `http://localhost:4321` in your browser
4. Publish:
   ```bash
   git add .
   git commit -m "description of the change"
   git push
   ```

GitHub Actions deploys automatically in ~2 minutes.

### Editing content (news, team, stats)

Dynamic content is managed via **Sanity CMS** (project `x0ftpq7o`).

1. Go to the Sanity Studio (see URL in `sanity.config.ts`)
2. Edit or add articles, team members, etc.
3. Publish changes in Sanity
4. Trigger a site redeploy:
   ```bash
   git commit --allow-empty -m "refresh: update content from Sanity"
   git push
   ```

### Adding images

Copy files into the `public/images/` folder, then push:

```bash
git add public/images/
git commit -m "feat: add images"
git push
```

---

## EN — Quick reference

| Action | Command |
|--------|---------|
| Preview locally | `npm run dev` |
| Publish a change | `git add . && git commit -m "..." && git push` |
| Refresh Sanity content | Empty push: `git commit --allow-empty -m "refresh" && git push` |
| Check deployment status | GitHub → Actions tab of the repository |

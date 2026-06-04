# AIR Lab Website — Comment ça fonctionne / How It Works

---

# 🇫🇷 FRANÇAIS

## Vue d'ensemble

Le site airlab.aero est composé de **3 briques** qui travaillent ensemble :

```
Sanity (contenu)  →  GitHub (code)  →  GitHub Pages (site en ligne)
```

---

## Les 3 outils

### 1. Sanity — Le CMS (gestion du contenu)
**Accès :** https://airlab-aero.sanity.studio

C'est le **back-office** du site. Il permet de :
- Publier et modifier les **articles de news**
- Gérer les **membres de l'équipe**
- Ajouter des **images**

> ⚠️ Publier un article dans Sanity ne le rend pas visible immédiatement en ligne. Il faut ensuite déclencher un push GitHub.

---

### 2. GitHub — Le code source
**Repo :** https://github.com/Airlab-aero/airlab-website-2026

C'est l'endroit où tout le **code du site** est stocké. Chaque modification (contenu ou design) est enregistrée ici sous forme de "commit".

Dès qu'un commit est poussé sur GitHub, le site se **reconstruit automatiquement** et la mise à jour est visible en ligne dans 2 à 5 minutes.

---

### 3. GitHub Pages — L'hébergement
**Site en ligne :** https://airlab-aero.github.io/airlab-website-2026

C'est là que le site est **hébergé**. Il est statique (généré une fois, servi rapidement), ce qui le rend rapide et sécurisé.

> Le nom de domaine final (airlab.aero) devra être redirigé vers cette adresse lors du lancement officiel.

---

## Le workflow en pratique

### Pour modifier du contenu (articles, équipe)
1. Se connecter à **Sanity Studio**
2. Faire les modifications et cliquer **Publish**
3. Déclencher un push GitHub (ou demander à l'équipe technique)
4. Le site se met à jour en **2–5 minutes**

### Pour modifier le design ou la structure du site
1. Modifier les fichiers dans le dossier `/airlab-website/src/`
2. Tester en local avec `npm run dev`
3. Pousser sur GitHub → le site se reconstruit automatiquement

---

## Technologies utilisées

| Outil | Rôle |
|-------|------|
| **Astro** | Framework qui génère le site (rapide, moderne) |
| **Sanity** | CMS headless — gestion du contenu |
| **GitHub** | Stockage du code + déclencheur de build |
| **GitHub Pages** | Hébergement gratuit du site statique |
| **Formspree** | Gestion du formulaire de contact |

---

## À faire avant le lancement officiel
Les 3 points bloquants :
1. **Configurer Formspree** pour le formulaire de contact
2. **Migrer les articles** de l'ancien site vers Sanity
3. **Rediriger le domaine** airlab.aero vers le nouveau site

→ Voir `TODO.md` pour la liste complète.

---
---

# 🇬🇧 ENGLISH

## Overview

The airlab.aero website is built on **3 components** working together:

```
Sanity (content)  →  GitHub (code)  →  GitHub Pages (live website)
```

---

## The 3 Tools

### 1. Sanity — The CMS (Content Management)
**Access:** https://airlab-aero.sanity.studio

This is the **back-office** of the website. It allows you to:
- Publish and edit **news articles**
- Manage **team members**
- Upload **images**

> ⚠️ Publishing an article in Sanity does not make it live immediately. A GitHub push must be triggered afterwards.

---

### 2. GitHub — The Source Code
**Repo:** https://github.com/Airlab-aero/airlab-website-2026

This is where all the **website code** is stored. Every change (content or design) is saved here as a "commit".

As soon as a commit is pushed to GitHub, the website **rebuilds automatically** and the update goes live within 2 to 5 minutes.

---

### 3. GitHub Pages — The Hosting
**Live website:** https://airlab-aero.github.io/airlab-website-2026

This is where the website is **hosted**. It is static (built once, served fast), making it fast and secure.

> The final domain name (airlab.aero) will need to be redirected here at official launch.

---

## Workflow in Practice

### To update content (articles, team)
1. Log in to **Sanity Studio**
2. Make changes and click **Publish**
3. Trigger a GitHub push (or ask the technical team)
4. The website updates in **2–5 minutes**

### To update design or page structure
1. Edit files in the `/airlab-website/src/` folder
2. Test locally with `npm run dev`
3. Push to GitHub → the website rebuilds automatically

---

## Technologies Used

| Tool | Role |
|------|------|
| **Astro** | Framework that generates the website (fast, modern) |
| **Sanity** | Headless CMS — content management |
| **GitHub** | Code storage + build trigger |
| **GitHub Pages** | Free static website hosting |
| **Formspree** | Contact form handling |

---

## Before Official Launch
The 3 blocking points:
1. **Set up Formspree** for the contact form
2. **Migrate articles** from the old website to Sanity
3. **Redirect the domain** airlab.aero to the new website

→ See `TODO.md` for the full checklist.

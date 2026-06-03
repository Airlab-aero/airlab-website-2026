# AIR Lab Website — Checklist avant publication officielle

---

## 🔴 Bloquant — à faire avant le lancement

### Formulaire Contact
- Créer un compte sur formspree.io avec `contact@airlab.aero`
- Créer un nouveau formulaire → récupérer l'ID (format `xabcdefg`)
- Remplacer dans `src/pages/contact.astro` :
  ```
  https://formspree.io/f/contact@airlab.aero
  ```
  par :
  ```
  https://formspree.io/f/TON_ID_ICI
  ```
- Tester l'envoi du formulaire en production

### Migration des articles manquants (airlab.aero → Sanity)
Le nouveau site ne récupère que les articles déjà dans Sanity. Tous les articles de l'ancien site doivent être recrées manuellement :
- Identifier la liste complète des articles sur airlab.aero/news
- Copier le contenu de chaque article manquant et le créer dans Sanity
- Vérifier que chaque article a : titre, slug, date, catégorie, excerpt, image de couverture, body complet
- **Note :** après chaque ajout dans Sanity, un push GitHub est nécessaire pour déclencher le rebuild

---

## 🟡 Important — à vérifier avant le lancement

### Liens partenaires
- **Thales Digital Factory (TDF)** — lien supprimé (site 404). Remettre si une nouvelle URL est disponible
- **ICAI** — mis à jour vers `https://icai-aviation.org` — à revérifier si le site répond bien

### Images de couverture des articles
- Vérifier que chaque article dans Sanity a une image de couverture
- En particulier : "Managing growth, complexity & disruption for tomorrow's ATM" (article récent, pas d'image)

### SEO & métadonnées
- Vérifier les balises `<title>` et `<description>` de chaque page
- Vérifier que les slugs des articles correspondent aux URLs de l'ancien site (liens cassés)

### Liens internes
- Tester tous les liens de navigation (menu, footer, CTAs)
- Vérifier le lien vers la plateforme RCP
- Vérifier les liens vers Open-ATMS API

### Responsive / mobile
- Tester toutes les pages sur mobile et tablette
- En particulier : ATM Ecosystem hub, page partners, page news (filtres)

---

## 🟠 Contenu — à compléter

### Page RCP in Action
- Ajouter des images pour les événements du carousel (si disponibles)

### Page About / Team
- Vérifier que tous les membres de l'équipe sont à jour dans Sanity

### Page Partners
- Confirmer si une nouvelle URL est disponible pour Thales Digital Factory
- Vérifier que tous les logos partenaires s'affichent correctement

---

## 🟢 Technique — avant ou juste après le lancement

### Déploiement & domaine
- Confirmer le nom de domaine final et la redirection depuis l'ancien site (airlab.aero)
- Tester le site sur le domaine final (HTTPS, redirections)

### Rebuild automatique depuis Sanity
- Mettre en place un webhook Sanity → GitHub Actions pour rebuilder automatiquement à chaque publication Sanity (actuellement, un push manuel est nécessaire)

### Analytics
- Vérifier que le tracking (Google Analytics ou autre) est bien configuré

---

## ✅ Terminé

- Logos A*STAR, NTU, ASI ajoutés dans le panel Universities
- Logo HeLa Labs ajouté dans Partner Spotlight
- TDF rendu non-cliquable (lien cassé)
- ICAI mis à jour vers `https://icai-aviation.org`
- Page news : tri chronologique corrigé lors du filtrage par catégorie
- ATM Ecosystem : ouverture automatique sur "Research Topics" au chargement
- ATM Ecosystem : schéma centré, panneau détail en dessous, contraste renforcé
- Section Partnerships with Startups : fond futuriste (grille cyan)
- Use Cases : logo Meteomatics retiré, texte agrandi en blanc
- "Co-development" renommé en "Development & iteration" (page RCP in Action)
- Section "02 Technical Backbone" (placeholder) supprimée de la page RCP in Action
- Article ASR : catégorie changée en "Partnerships"
- Formulaire contact migré de Netlify Forms vers Formspree
- 6 articles nettoyés (doublons supprimés) et republiés :
  - RCP: Navigating the future of ATM
  - Enhancing CDO Efficiency through AI
  - Enhancing ASR (A*STAR × AIR Lab)
  - Meet Our Experts: Chris Lee
  - ATM Twin Minister's Innovation Award
  - Meteomatics × AIR Lab
- Article créé et publié : "Managing growth, complexity & disruption for tomorrow's ATM"
- Bug build corrigé (apostrophe typographique dans contact.astro)

---

## ℹ️ Notes techniques
- Site hébergé sur **GitHub Pages** (pas Netlify)
- CMS : **Sanity** — project ID `x0ftpq7o`, dataset `production`
- Repo : `https://github.com/Airlab-aero/airlab-website-2026`
- Dev local : `npm run dev` dans `/Website april 2026/airlab-website/`
- **Important :** le site est statique — chaque modification Sanity nécessite un push GitHub pour être visible en production

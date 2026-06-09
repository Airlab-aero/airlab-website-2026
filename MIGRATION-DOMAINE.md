# Migration du domaine airlab.aero — Checklist complète

---

## ⏱️ Timing recommandé
Faire la migration un **mardi ou mercredi matin** (heure de Singapour), jamais un vendredi ou avant un week-end — pour pouvoir réagir rapidement si problème.

---

## PHASE 1 — Préparation (à faire AVANT de toucher aux DNS)

### Contenu
- [ ] Configurer Formspree pour le formulaire de contact
- [ ] Migrer tous les articles manquants dans Sanity (vérifier airlab.aero/news)
- [ ] Vérifier que chaque article a une image de couverture
- [ ] Comparer les URLs de l'ancien site avec les slugs du nouveau → corriger les différences

### Technique
- [ ] Configurer le webhook Sanity → GitHub (rebuild automatique)
- [ ] Tester toutes les pages en local (`npm run dev`)
- [ ] Tester sur mobile et tablette
- [ ] Vérifier tous les liens (menu, footer, CTAs, partenaires)
- [ ] Faire une capture complète de l'ancien site (archive ou screenshots)

### DNS — vérification préalable
- [ ] Noter tous les enregistrements DNS actuels de airlab.aero (surtout les MX pour les emails)
- [ ] Confirmer que l'hébergeur du domaine est accessible (identifiants à portée de main)
- [ ] Vérifier que GitHub Pages accepte les domaines custom (activer dans les settings du repo)

---

## PHASE 2 — Configuration GitHub Pages (J-1)

- [ ] Aller sur https://github.com/Airlab-aero/airlab-website-2026/settings/pages
- [ ] Dans "Custom domain", entrer : `airlab.aero`
- [ ] GitHub va créer un fichier `CNAME` dans le repo → vérifier qu'il apparaît
- [ ] Cocher "Enforce HTTPS" (si disponible)

---

## PHASE 3 — Changement DNS (Jour J)

Chez ton hébergeur de domaine, modifier les enregistrements DNS :

### Option A — Apex domain (airlab.aero)
Ajouter 4 enregistrements **A** pointant vers GitHub Pages :
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

### Option B — www (optionnel)
```
CNAME    www    airlab-aero.github.io
```

### ⚠️ NE PAS TOUCHER aux enregistrements MX (emails)

- [ ] Modifier les enregistrements A
- [ ] Vérifier que les MX sont intacts
- [ ] Noter l'heure exacte du changement

---

## PHASE 4 — Vérification après changement (J à J+2)

### Dans les premières heures
- [ ] Vérifier la propagation DNS : https://dnschecker.org (chercher airlab.aero)
- [ ] Tester le site sur https://airlab.aero (peut prendre 2-48h)
- [ ] Vérifier que le certificat HTTPS est actif (cadenas vert dans le navigateur)
- [ ] Tester le formulaire de contact → vérifier réception email

### Dans les 48h
- [ ] Vérifier que les emails @airlab.aero fonctionnent toujours
- [ ] Tester toutes les pages principales sur mobile
- [ ] Vérifier les principaux liens partagés sur LinkedIn

### Dans la semaine
- [ ] Soumettre le nouveau sitemap à Google Search Console
- [ ] Vérifier qu'il n'y a pas de pages 404 (Google Search Console → Coverage)
- [ ] Vérifier les analytics (trafic normal ?)

---

## 🚨 Plan de secours
Si quelque chose ne va pas après la migration :
1. Remettre les anciens enregistrements DNS → l'ancien site reprend en 1-2h
2. Contacter l'équipe technique immédiatement
3. Ne pas paniquer — la propagation DNS prend du temps, certaines erreurs se résolvent seules

---

## 📋 Contacts utiles
- **Repo GitHub :** https://github.com/Airlab-aero/airlab-website-2026
- **Sanity Studio :** https://airlab-aero.sanity.studio
- **Vérifier DNS :** https://dnschecker.org
- **GitHub Pages IPs :** 185.199.108-111.153

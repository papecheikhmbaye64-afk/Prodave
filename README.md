# 🚀 Prodave — Application Web Progressive (PWA)

## Fichiers inclus

| Fichier | Rôle |
|---------|------|
| `index.html` | Application principale (tout-en-un) |
| `manifest.json` | Manifeste PWA (installation sur écran d'accueil) |
| `sw.js` | Service Worker (fonctionnement hors-ligne) |

---

## ✅ Déploiement en 2 minutes

### Option 1 — Netlify (recommandé, gratuit)
1. Allez sur [netlify.com](https://netlify.com)
2. Glissez-déposez le dossier `prodave-app/` sur la page
3. Votre app est en ligne instantanément avec HTTPS ✓

### Option 2 — Vercel
```bash
npm i -g vercel
cd prodave-app
vercel --prod
```

### Option 3 — GitHub Pages
1. Créez un repo GitHub
2. Uploadez les 3 fichiers
3. Activez GitHub Pages dans Settings → Pages

### Option 4 — Hébergement local (test)
```bash
cd prodave-app
npx serve .
# Ouvrir http://localhost:3000
```

---

## 📱 Installation sur appareils

Une fois l'app déployée avec HTTPS :

**Android / Chrome :**
- Menu ⋮ → "Ajouter à l'écran d'accueil"
- Ou bannière automatique d'installation

**iPhone / Safari :**
- Bouton Partager → "Sur l'écran d'accueil"

**PC / Chrome / Edge :**
- Icône d'installation dans la barre d'adresse

---

## 🔐 Compte administrateur

- **Identifiant :** `AdjiT`
- **Mot de passe :** `Adji2005`

---

## 🗄️ Base de données

L'application utilise `localStorage` du navigateur pour stocker :
- Utilisateurs (porteurs + investisseurs)
- Projets et investissements
- Sessions utilisateur

### Vue "Base de données" dans le panneau Admin
Accessible via l'onglet **"Base de données"** → tableau complet avec :
- Recherche en temps réel
- Statut de chaque utilisateur
- Accès aux documents soumis
- Actions de validation/rejet

### Pour passer à une vraie base de données
Remplacez les fonctions `save()` / `load()` par des appels à :
- **Supabase** (PostgreSQL, gratuit) → [supabase.com](https://supabase.com)
- **Firebase Firestore** → [firebase.google.com](https://firebase.google.com)
- **PocketBase** (auto-hébergé) → [pocketbase.io](https://pocketbase.io)

---

## 🌐 Compatibilité

| Appareil | Support |
|----------|---------|
| Android (Chrome) | ✅ Installable |
| iPhone (Safari) | ✅ Installable |
| PC Chrome/Edge | ✅ Installable |
| PC Firefox | ✅ Navigateur |
| Tablette | ✅ Responsive |

---

*Prodave © 2025 — Dakar, Sénégal*

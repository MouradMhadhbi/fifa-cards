# ⚽ Projet React – Cartes de Joueurs FIFA

## 🎯 Objectif du projet
Ce projet a pour but de créer une application React simple permettant d’afficher des **cartes de joueurs de football**.  
Chaque carte contient les informations d’un joueur (nom, équipe, nationalité, numéro, âge, image).

L’objectif est d’utiliser **React**, **React-Bootstrap** et la gestion des **props / defaultProps** tout en appliquant un peu de **style et d’interactivité**.

---

## 🏗️ Structure du projet

fifa-cards/
│
├── src/
│ ├── components/
│ │ ├── Player.js # Composant individuel pour chaque joueur
│ │ └── PlayersList.js # Liste des joueurs affichés avec .map()
│ │
│ ├── data/
│ │ └── players.js # Tableau JSON contenant les données des joueurs
│ │
│ ├── App.css 
│ ├── App.js # Composant racine de l’application
│ └── index.css
│ └── index.js # Point d’entrée React
│
├── .gitignore
├── package-lock.json
├── package.json
└── README.md

---

## ⚙️ Technologies utilisées

- [React](https://reactjs.org/) – bibliothèque principale
- [React-Bootstrap](https://react-bootstrap.github.io/) – composants visuels
- [Bootstrap](https://getbootstrap.com/) – styles CSS
- JSX – syntaxe JavaScript + XML
- ES6 – déstructuration, opérateur de propagation (`...props`)

---

## 🚀 Installation et exécution du projet

1. **Créer un projet React :**
   ```bash
   npx create-react-app fifa-cards
   ```
2. **Installer React-Bootstrap :**
   ```bash
   npm install react-bootstrap bootstrap
   ```
3. **Importer le CSS Bootstrap dans App.js :**
   ```bash
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
4. **Copier les fichiers :**
   - Player.js et PlayersList.js dans src/components/

   - players.js dans src/data/
5. **Lancer le serveur :**
   ```bash
   npm start;
   ```
6. **Ouvrir le navigateur sur :**
    👉 http://localhost:3000

---

## 🧠 Concepts React utilisés

- Déstructuration des props dans les composants.

- defaultProps (valeurs par défaut) pour éviter les erreurs.

- Opérateur de propagation (...props) pour transmettre facilement les données.

- Styles en ligne pour personnaliser les composants.

- Effets de survol avec les événements onMouseEnter / onMouseLeave.

- Itération avec .map().
 
---

## 🎨 Résultat attendu

Chaque joueur s’affiche sous forme de carte avec :

- Une image

- Le nom du joueur

- L’équipe

- La nationalité

- Le numéro

- L’âge (sans “ans” si inconnu)

Avec un effet de zoom au survol et une ombre douce sur la carte.

---

##🧾 Auteur

Mourad Mhadhbi
Projet React – Formation Frontend
Année : 2025
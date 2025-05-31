# Prepa MoP – Roster Guilde Corp

Ce projet est une application React (Vite + TypeScript) créée pour la guilde **Corp** en vue de la sortie de **Mists of Pandaria (WoW MoP)**.

L'application permet aux membres de :

- Renseigner leur **pseudo**
- Indiquer leur **classe** et **spécialisation principale**
- Proposer une **classe/spé secondaire**
- Visualiser le roster actuel (lecture depuis un Google Sheet)
- Ajouter directement leur participation au roster via un formulaire

## 🔗 Accès en ligne

> 🐼 [Accéder à l'application](https://cerynna.github.io/prepa-mop/)

## 🛠️ Technologies utilisées

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- TypeScript
- Google Sheets (utilisé comme base de données)
- Déploiement via GitHub Pages

## 🚀 Déploiement

L'application est déployée avec `gh-pages`.

```bash
npm run build
npm run deploy
```

Assurez-vous que vite.config.ts contient bien :

```typescript
base: "/prepa-mop/";
```

## 🔮 Fonctionnalités prévues

| Fonctionnalité                        | Statut      | Détail                                           |
| ------------------------------------- | ----------- | ------------------------------------------------ |
| Ajout d’un joueur                     | ✅ Fait     | Formulaire pour ajouter pseudo, classe et spé    |
| Lecture en temps réel du roster       | ✅ Fait     | Chargement depuis Google Sheets                  |

---

## 🧠 À propos

Ce projet est maintenu par **Cerynna** pour la guilde **Corp**, en préparation du lancement de **World of Warcraft : Mists of Pandaria Classic**.

Il s'agit d'un outil communautaire simple, accessible depuis le navigateur, sans base de données ni backend complexe.

---

## 📬 Contact

Pour signaler un bug ou proposer une amélioration :

- Créez une _issue_ sur ce dépôt GitHub
- Ou contactez **Cerynna** directement via Battle.net ou Discord

---

> 🐼 _"Prépare ton parchemin, la Pandarie nous attend."_

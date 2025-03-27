# Revue de code Marc-André Bilodeau
---

# Qualité du code
## Utilisation correcte de Vue.js
Tu as nommé l'un de tes component `HeaderComponent`.
Étant donné que le fait qu'il est par nature un component, tu n'es pas sensé le mentiionner dans son nom.
Une solution possible serait de le nommer simplement `Header`.
## Utilisation correcte de TypeScript
Dans ton fichier `types.ts` tu déclare 2 interfaces :
```ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
}

export interface ProductData {
    name: string;
    description: string;
    price: number;
    stock: number;
}
```
Le problème est que **ProductData** est répétitif avec product, car leur seul différence est que **ProductData** n'a pas d'**id**.
Dans le reste de ton code tu aurais pu utiliser uniquement **Product** en prenant en compte les cas où les **id** seraient nuls.
Cela permetrait d'éviter d'ajouter de la complexité pas forcément requiese.
## Bonnes pratiques de programmation et code propre
Rien à redire, bon travail.
## Structure du projet
Tu aurais du mettre ton fichier `styles.css` dans un dossier `css`, et ton `main.ts` dans un dossier `script`.
## Gestion des états
Tout semble ok.
# Fonctionnalités
## Implémentation des fonctionnalités requises 1 à 5
## Implémentation des fonctionnalités requises 6 à 10
## Bonnes pratiques UI 1 à 5
## Bonnes pratiques UI 6 à 10

# Contrôle de qualité
## Bogues et performances
## Qualité de l'interface

# Déploiement et documentation
## Repo correctement créé sur GitHub (fichier README.md)
## Application déployée correctement sur GitHub Pages

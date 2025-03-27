# Revue de code Marc-André Bilodeau
---

# Qualité du code
## Utilisation correcte de Vue.js
Tu as nommé l'un de tes component `HeaderComponent.vue`.
Étant donné que le fait qu'il est par nature un component, tu n'es pas sensé le mentiionner dans son nom.
Une solution possible serait de le nommer simplement `Header.vue`.
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

# Contrôle de qualité
## Bogues et performances
Aucun bogue dans ton application.
## Qualité de l'interface
Tu as du franglais dans ton code. Par exemple dans le template de ton `ProductItem.vue`, tu as des boutons en français :
```html{15-18}
<template>
  <div class="product-card bg-dark text-white h-100">
    <div class="product-name">{{ props.product.name }}</div>

    <div class="product-price">PRICE ${{ props.product.price.toFixed(2) }}</div>

    <div class="product-stock" :class="[
      props.product.stock === 0 ? 'stock-empty' :
      props.product.stock < 10 ? 'stock-low' : 'stock-good'
    ]">
      STOCK {{ props.product.stock }}
    </div>

    <div class="product-actions">
      <button class="btn btn-sm btn-outline-light mb-1 w-100" @click="emits('view-details', props.product)">Détail</button>
      <button class="btn btn-sm btn-outline-success mb-1 w-100" @click="emits('edit-product', props.product)">Modifier</button>
      <button class="btn btn-sm btn-outline-warning mb-1 w-100" @click="emits('duplicate-product', props.product)">Dupliquer</button>
      <button class="btn btn-sm btn-outline-danger w-100" @click="emits('delete-product', props.product.id)">Supprimer</button>
    </div>

  </div>
</template>
```
Cependant le reste de ton interface est en français, en effet, tu parle de **PRICE** et nom de **PRIX**.

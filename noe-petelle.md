# **Travail Pratique 1 - Noe Petelle**

### **Revue de code**


## **1 - Utilisation correcte de Vue.js**

#### **Simplification de App.vue**

Séparation des fonctionnalité et méthodes majeurs dans les composants. La majorité des méthodes sont tous dans App.vue.


# App.vue
```md
<script setup lang="ts">
...

const filterProducts = () => {
};

const addProduct = (product: Product) => {
};

const editProduct = (product: Product) => {
};

const handleDeleteClick = (product: Product) => {
};

const confirmDelete = () => {
};

const cancelDelete = () => {
};

const deleteProduct = (id: number) => {
};

const duplicateProduct = (product: Product) => {
};

const handleSubmit = (product: Product) => {
};

</script>
```

## **- Commentaire -**

Les méthodes sont toutes fonctionnelles et pertinentes. Cependant, elles sont toutes situées dans le composant App.vue, qui devrait contenir le moins de logique possible. 

Il serait préférable de répartir ces fonctionnalités dans des composants utilisants ces méthodes ou des composants parents pour améliorer la structure de l'application.

## **2 - Utiliation correcte de TypeScript**

L'utilisation du langage TypeScript est excellente. Les méthodes sont clairement définies et faciles à comprendre. 

Les types sont bien définis pour les propriétés et les méthodes.

Les validations sont biens définis et pertinantes au contexte.


## **3 - Bonnes pratiques de programmation et code propre**

Les bonnes pratiques de programmation sont utilisés pour le développement de cette application, mais avec quelques lacunes. La principale amélioration à apporter concerne la structure du code : la déclaration des méthodes aurait dû être faite dans des fichiers séparés plutôt que dans App.vue, afin de réduire les dépendances et d'améliorer la modularité du code.

L'utilisation de la fonctionnalité "emit" de Vue.js permet une communication efficace entre les composants et est bien utilisé.

## **4 - Structure du projet**

La structure du projet utilise une bonne séparation des éléments en composants. Chaque composant est pertinent et communique bien avec les autres.

```md
src/
│
├── components/
│   ├── ConfirmationModal.vue         
│   ├── Footer.vue          
│   ├── Header.vue          
│   ├── ProductDetails.vue        
│   ├── ProductExportCSV.vue
│   ├── ProductForm.vue 
│   ├── ProductList.vue
│   ├── SearchBar.vue         
│   └── StockAlerts.vue                
│
├── css/
│   └── main.css 
│
├── scripts/
│   ├── interfaces.ts
│   ├── main.ts  
│   └── validation.ts
│
└── App.vue 
```

## **5 - Implémentation des fonctionnalités demandé**

Chaque élément des récits utilisateurs sont présent et fonctionnel selon les demandes du travail pratique.

## **6 - Bonne pratique UI**

L'interface utilisateur est simple et facile à utiliser. Les visuels sont conformes aux exigences.

L'utilisation de modals aurait pu être utilisé afin d'améliorer l'affichages du formulaire d'ajout.

Les messages de rupture de stock devraient disparaître après un certain temps ou simplement apparaître en modal. Sur la version actuel, le message reste affiché sur le haut de la page.
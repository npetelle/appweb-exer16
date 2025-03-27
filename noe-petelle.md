# **Travail Pratique 1 - Noe Petelle**

### **Revue de code**


## **1-**

Séparation des fonctionnalité et méthodes majeurs dans les composants. La majorité des méthodes sont tous dans App.vue.


# App.vue
```md
const filterProducts = () => {
    return products.value.filter(
        (product: Product) =>
            product.name
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()) ||
            product.team
                .toLowerCase()
                .includes(searchQuery.value.toLowerCase()),
    );
};

const addProduct = (product: Product) => {
    const maxId = Math.max(...products.value.map((p: Product) => p.id), 0);
    product.id = maxId + 1;
    products.value.push({ ...product });
};

const editProduct = (product: Product) => {
    const index = products.value.findIndex((p: Product) => p.id === product.id);
    if (index !== -1) {
        products.value[index] = product;
    }
    editingProduct.value = null;
    showForm.value = false;
};

const handleDeleteClick = (product: Product) => {
    productToDelete.value = product;
    showDeleteModal.value = true;
};

const confirmDelete = () => {
    if (productToDelete.value) {
        deleteProduct(productToDelete.value.id);
        showDeleteModal.value = false;
        productToDelete.value = null;
    }
};

const cancelDelete = () => {
    showDeleteModal.value = false;
    productToDelete.value = null;
};

const deleteProduct = (id: number) => {
    const product = products.value.find((p: Product) => p.id === id);
    if (product) {
        const index = products.value.findIndex((p: Product) => p.id === id);
        if (index !== -1) {
            products.value.splice(index, 1);
        }
    }
};

const duplicateProduct = (product: Product) => {
    const duplicatedProduct = {
        ...product,
        id: 0,
        name: `${product.name}`,
    };
    editingProduct.value = { ...duplicatedProduct };
    showForm.value = true;
};

const handleSubmit = (product: Product) => {
    if (product.id !== 0) {
        editProduct(product);
    } else {
        addProduct(product);
    }
    editingProduct.value = null;
    showForm.value = false;
};
```

## **- Commentaire -**

Les fonctionnalité sont tous 
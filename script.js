document.addEventListener('DOMContentLoaded', () => {
    const usersContainer = document.getElementById('productList');
    
    function createUserElement(product) {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `
            <img src="${product.image}" height="170px" width="150px">
            <h2>${product.title}</h2>
            <p>Price: $${product.price}</p>`;
        return userElement;
    }

    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const userElement = createUserElement(product);
                usersContainer.appendChild(userElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
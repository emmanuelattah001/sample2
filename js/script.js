window.alert('welcome to liz-food-hub')


//for five star
// function toggleStar(star) {
//             if (star.classList.contains('active')) {
//                 star.classList.remove('active');
//             } else {
//                 star.classList.add('active');
//             }
//         }

// adding to favorite
// function toggleFavorite(favoriteIcon, productName) {
//             favoriteIcon.classList.toggle('active');

//             const favoritesBar = document.getElementById('favorites-bar');

//             if (favoriteIcon.classList.contains('active')) {
//                 // Show a pop-up
//                 alert(`${productName} added to favorites!`);

//                 // Add to favorites bar
//                 const favoriteItem = document.createElement('span');
//                 favoriteItem.textContent = productName;
//                 favoriteItem.dataset.productName = productName;
//                 favoritesBar.appendChild(favoriteItem);
//             } else {
//                 // Remove from favorites bar
//                 const favoriteItems = favoritesBar.querySelectorAll('span');
//                 favoriteItems.forEach(item => {
//                     if (item.dataset.productName === productName) {
//                         favoritesBar.removeChild(item);
//                     }
//                 });
//             }
//         }

// function to add to chart
document.addEventListener("DOMContentLoaded", () => {
            const cart = [];

            // Function to add product to cart
            const addToCart = (productId) => {
                const product = {
                    id: productId,
                    quantity: 1,
                };

                // Check if the product is already in the cart
                const existingProduct = cart.find(item => item.id === productId);

                if (existingProduct) {
                    existingProduct.quantity++;
                } else {
                    cart.push(product);
                }

                console.log(cart); // For debugging
                updateCartUI();
            };

            // Update the UI (e.g., show the number of items in the cart)
            const updateCartUI = () => {
                const cartCount = document.getElementById("cart-count");
                const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
                cartCount.textContent = totalItems;
            };

            // Add event listeners to all "Add to Cart" buttons
            const addToCartButtons = document.querySelectorAll(".add-to-cart");
            addToCartButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const productId = button.getAttribute("data-id");
                    addToCart(productId);
                });
            });
        });


//for mobile nav bar
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuItem = document.getElementById('nav-items');


    menuIcon.addEventListener('click', () => {
        menuItem.classList.toggle('show');
        menuIcon.classList.toggle('change');
    });
});
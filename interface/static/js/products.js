var productsList = [];

var updateProducts = function(products) {
    productsList.length = 0;
    products.forEach(function (product, idx) {
        productsList.push(product);
    })
}

Vue.component('product-card', {
    props: ['product'],
    template: '<div class="product">' +
    '    <img class="product-image" :src="product.src" alt="Product Image" \>' +
    '    <h6 class="product-title">{{ product.title }}</h6>' +
    '    <span class="product-price">{{ product.price }}</span>' +
    '</div>'
});

var products_window = new Vue({
    el: '#products-window',
    data: {
        products: productsList
    }
})

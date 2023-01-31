
const productsArray = [
    {
        id: "1",
        img: "https://via.placeholder.com/300x200",
        title: "Martillo",
        price: 17000
    },
    {
        id: "2",
        img: "https://via.placeholder.com/300x200",
        title: "Bisturi",
        price: 4500
    },
    {
        id: "3",
        img: "https://via.placeholder.com/300x200",
        title: "Caja Clavos",
        price: 9400
    },
    {
        id: "4",
        img: "https://via.placeholder.com/300x200",
        title: "Broca 1/4",
        price: 5300
    },
    {
        id: "5",
        img: "https://via.placeholder.com/300x200",
        title: "Destornillador",
        price: 5000
    },
    {
        id: "6",
        img: "https://via.placeholder.com/300x200",
        title: "Clavija",
        price: 3000
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
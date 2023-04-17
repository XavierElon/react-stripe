const getProductData = (id: number) => {
    let productData = productsArray.find(product => product.id === id)

    if (productData == undefined) {
        console.log('Product data does not exist for ID ' + id)
        return undefined
    }

    return productData
}

const productsArray = [
    {
        id: 1,
        title: 'Achilles',
        price: '5'
    },
    {
        id: 2,
        title: 'Flocka',
        price: '10'
    },
    {
        id: 3,
        title: 'Elon',
        price: '15'
    },
    {
        id: 4,
        title: 'XXX',
        price: '50'
    },
    {
        id: 5,
        title: 'Bezos',
        price: '51'
    },
    {
        id: 6,
        title: 'Musk',
        price: '500'
    },
]
 
export { productsArray, getProductData }
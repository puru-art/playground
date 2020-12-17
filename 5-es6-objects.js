// Object property shorthand

const name = 'Puru'
const userAge = 21

const user = {
    name,
    age: userAge,
    location: 'Jaipur'
}

// Object destructing

const product = {
    label: 'Blue notebook',
    price: 9,
    stock: 108,
    salePrice: undefined
}

// const {label:productLabel, price, stock, salePrice, rating = 4} = product;
// console.log(productLabel+' '+price+' '+stock+' '+salePrice+' '+rating);

const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product);
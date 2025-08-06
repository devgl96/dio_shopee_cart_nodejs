async function addItem(userCart, item) {
    userCart.push(item)
}

async function calculateTotal(userCart) {
    return userCart.reduce((total, item) => total + item.subTotal(), 0)
}

async function deleteItem(userCart, id) {
    const index = userCart.findIndex(item => item.id === id);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

async function deleteItemByIndex(userCart, index) {
    const deleteIndex = index - 1;

    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

async function decreaseItem(userCart, item) {
    const indexFound = userCart.findIndex(product => product.name === item.name);

    if (indexFound == -1) {
        console.log("Item não encontrado");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }
    
    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function increaseItem(userCart, item) {
    const indexFound = userCart.findIndex(product => product.id === item.id);

    if (indexFound === -1) {
        console.log("Produto não encontrado! Tente novamente!")
        return;
    }

    userCart[indexFound].quantity += 1;
}

async function displayCart(userCart) {
    console.log("Shopee Cart List: ")

    console.log('id  |      Produto       |      Preço       |       Quantidade    |       Subtotal      |');

    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}(${item.id}) | R$ ${item.price} | ${item.quantity} | Subtotal: R$ ${item.subTotal()}`)
    })

    const resultTotalMyCart = await calculateTotal(userCart);

    console.log(`TOTAL: R$ ${resultTotalMyCart}`);
}

export {
    addItem,
    calculateTotal,
    deleteItem,
    decreaseItem,
    deleteItemByIndex,
    displayCart,
    increaseItem
}
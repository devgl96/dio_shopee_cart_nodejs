async function createItem(id, name, price, quantity) {
    return {
        id, name, price, quantity, subTotal: () => price * quantity
    }
}

export default createItem;
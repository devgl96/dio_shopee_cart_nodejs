## Goal
Criar um carrinho de compras baseado no carrinho de compras da shopee, aonde o carrinho armazene itens e faça o cálculo de sub-itens automaticamente

### Domínio da aplicação: Carrinho de Compras

### Entidades
- Carrinho = services/cart.js
- Casos de uso
[x] Adicionar item do carrinho (addItem)
[x] Calcular o total (calculateTotal)
[x] Deletar item do carrinho (deleteItem)
[x] Remover item do carrinho pelo index (removeItemByIndex)
[x] Remover um item do carrinho (decreaseItem)
[x] Acrescentar um item ao produto do carrinho (increaseItem)

- Itens = services/item.js
- Casos de uso
[x] Criar item com subtotal certo (createItem)

### Aprendizado
- Modularizar o código para manter as regras de negócio (services) de forma organizada
- Organização do código
- Um item controlador (controller) que é o responsável para ser a porta de entrada para a aplicação
- Arquitetura em camadas (layers)
class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        const codigos = [ 'cafe', 'chantily', 'suco', 'sanduiche', 'queijo', 'salgado', 'combo1', 'combo2' ]
        const precos = [3.00, 1.50, 6.20, 6.50, 2.00, 7.25, 9.50, 7.50]
        const pagamentosAceitos = ['debito', 'credito', 'dinheiro']
        let pagamentoValido = false
        if(!itens.length){           
            return 'Não há itens no carrinho de compra!'
        }
        for(let metodo of pagamentosAceitos){
            if(metodoDePagamento == metodo){
                pagamentoValido = true
            }
        }
        if(pagamentoValido == false){
            return 'Forma de pagamento inválida!'
        }

        let itemAnterior = '';
        let soma = 0.00
        for(let item of itens){
            const itemSplit = item.split(',');
            const cod = itemSplit[0]
            const qtd = itemSplit[1]
            let preco = 0.00
            let codigoValido = false
            for(let i = 0; i < codigos.length; i++){
                if (codigos[i] == cod){
                    preco = precos[i]
                    codigoValido = true
                }
            }
            if(codigoValido == false){
                return 'Item inválido!'
            }
            if(qtd == 0){
                return 'Quantidade inválida!'
            }
            if(cod == 'chantily'){
                if(itemAnterior != 'cafe'){
                    return 'Item extra não pode ser pedido sem o principal'
                }
            }
            if(cod == 'queijo'){
                if(itemAnterior != 'sanduiche'){
                    return 'Item extra não pode ser pedido sem o principal'
                }
            }
            soma = soma + (preco * qtd)
            
            itemAnterior = cod
        }
        
        if(metodoDePagamento == 'dinheiro'){
            soma = soma - (soma * 0.05)
        }
        else if(metodoDePagamento == 'credito'){
            soma = soma + (soma * 0.03)
        }

        soma = soma.toFixed(2)
        soma = soma.toString().replace(".", ",")
        return "R$ " + soma;
    }

}

export { CaixaDaLanchonete };

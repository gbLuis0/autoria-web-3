function calcularPedido() {
    const nomeCliente = document.getElementById('nomeCliente').value;
    const bebida = document.querySelector('input[name="bebida"]:checked');
    const bebidaNome = bebida ? bebida.value : '';

    let docesSalgados = [];
    document.querySelectorAll('input[name="docesSalgados"]:checked').forEach((item) => {
        docesSalgados.push(item.value);
    });

    const precos = {
        'Suco': 7.00,
        'Refrigerante': 5.50,
        'Água': 2.50,
        'Bolo': 7.50,
        'Pastel': 6.00,
        'Torta': 8.00
    };

    let total = 0;
    if(bebidaNome){
        total += precos[bebidaNome];
    }
    docesSalgados.forEach(item => {
        total += precos[item];
    });

    const resultado = `Nome do Cliente: ${nomeCliente}<br>
                       Bebida: ${bebidaNome}<br>
                       Doces e Salgados: ${docesSalgados.join(', ')}<br>
                       Total a Pagar: R$ ${total.toFixed(2)}`;
    
    document.getElementById('resultado').innerHTML = resultado;
}
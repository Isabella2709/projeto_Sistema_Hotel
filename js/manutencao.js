function comparacombust(){
    let precoAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil: "));
    let precoGasWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil: "));
    let precoAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Pretol: "));
    let precoGasStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol: "));
    let litrosAbastecimento = 42;
    let percentual = 0.30;
    let precoAlcoolStarkComDesconto = precoAlcoolStark * (1 - percentual);
    let precoAlcoolWayneComDesconto = precoAlcoolWayne * (1 - percentual);
   
    if(precoGasStark > precoAlcoolStarkComDesconto && precoGasWayne > precoAlcoolWayneComDesconto){
        alert("O álcool está 30% mais barato do que a gasolina, abasteça com álcool");
    
        if(precoAlcoolWayneComDesconto < precoAlcoolStarkComDesconto){
            let totalAbast = litrosAbastecimento * precoAlcoolWayneComDesconto;
            alert(`O posto Wayne oil é o melhor para abastecer, com o valor ${precoAlcoolWayne} É o melhor posto para abastecer e encher o tanque ficará no valor de ${totalAbast}`);
        } else if(precoAlcoolStarkComDesconto < precoAlcoolWayneComDesconto){
            let totalAbast = litrosAbastecimento * precoAlcoolStarkComDesconto;
            alert(`O posto Stark petrol é o melhor para abastecer, com o valor  ${precoAlcoolStark} É o melhor posto para abastecer e encher o tanque ficará no valor de ${totalAbast}`);
        } 
    } else {
        if(precoGasStark < precoGasWayne){
            let totalAbast = litrosAbastecimento * precoGasStark; 
            alert(`O posto Stark petrol é o melhor para abastecer, com o valor ${precoGasStark} por litro, e encher o tanque ficará no valor de ${totalAbast}`);
        } else if(precoGasWayne < precoGasStark){
            let totalAbast = litrosAbastecimento * precoGasWayne; 
            alert(`O posto Wayne oil é o melhor para abastecer, com o valor ${precoGasWayne} É o melhor posto para abastecer e encher o tanque ficará no valor de ${totalAbast}`);
        }
    }
}



function arcondicionado() {
    let propostas = prompt("Cadastrar propostas de orçamentos: (S - Sim/ PARE - Sair): ");
    let totalValorServico = 0;
    let melhorProposta = null;
    let menorValor = Infinity;

    propostas = propostas.toLocaleUpperCase();

    while (propostas !== "PARE") {
        let nomeEmpresa = prompt("Informe o nome da empresa: ");
        let valorAparelho = parseFloat(prompt("Informe o valor do aparelho: "));
        let quantidadeAparelhos = parseInt(prompt("Informe a quantidade de aparelhos: "));
        let porcentagemDesconto = parseFloat(prompt("Informe a porcentagem de desconto: "));
        let minimoDesconto = parseInt(prompt("Informe o mínimo de aparelhos para conseguir o desconto: "));

        if (minimoDesconto < quantidadeAparelhos) {
            let valortotal = (quantidadeAparelhos * valorAparelho) * (1 - porcentagemDesconto / 100);
            totalValorServico += valortotal;

            if (valortotal < menorValor) {
                melhorProposta = nomeEmpresa;
                menorValor = valortotal;
            }
            alert(`Segundo o orçamento o valor do serviço com desconto fica ${valortotal}`);
        }

        propostas = prompt("Cadastrar propostas de orçamentos: (S - Sim/ PARE - Sair): ");
        propostas = propostas.toLocaleUpperCase();
    }

    alert(`O valor total para consertar todos os aparelhos de ar condicionado é de ${totalValorServico} reais.`);
    alert(`A melhor proposta é da empresa ${melhorProposta} com o valor de ${menorValor} reais.`);
}

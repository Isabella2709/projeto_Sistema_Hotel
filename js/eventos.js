function cadastraEvento() {
    let auditorioLaraja = 150;
    let auditorioColorado = 350;
    let nomeEmpresa; 
  
    alert("Bem vindo a area de cadastros de eventos.");
    let quantidadeConvidados = parseInt(
      prompt("Informe a quantidade necessária de assentos: ")
    );
  
    if (quantidadeConvidados > 350 || quantidadeConvidados <= 1) {
      alert("Numero de assentos invalido, favor digite novamente.");
    } else if (quantidadeConvidados <= 220) {
      alert(
        `O melhor auditorio para esse evento é o Laranja, com capacidade de ${auditorioLaraja}, podendo acrescentar mais 70 cadeiras, caso necessário.`
      );
      alert("Agora vamos agenda o evento");
    } else if (quantidadeConvidados >= 220) {
      alert(
        `O melhor auditorio para esse evento é o auditorio Colorado, com capacidade maxima de ${auditorioColorado} assentos.`
      );
      alert("Agora vamos agenda o evento");
    }
    
    let auditorioEscolhido = prompt("Digite o auditório desejado: ");
    
    let dataEvento = prompt(
      "Informe a data do evento (lembrando de colocar os espaços xx/xx/xxxx): "
    );
    let diaEvento = prompt("Digite o dia em que o evento sera realizado: ");
    let horaEvento = parseInt(
      prompt(
        "Digite a hora do evento (apenas a hora sem minutos nem segundos ex: 13): "
      )
    );
  
    diaEvento = diaEvento.toLocaleLowerCase();
  
    if (
      (diaEvento === "sabado" || diaEvento === "domingo") &&
      (horaEvento < 7 || horaEvento > 15)
    ) {
      alert(
        "Horario invalido, apenas usamos os auditorios apos as 7h as 15h nos Sabados e domingos"
      );
    } else if (
      diaEvento !== "sabado" &&
      diaEvento !== "domingo" &&
      (horaEvento < 7 || horaEvento >= 23)
    ) {
      alert(
        "Horario invalido, apenas usamos os auditorios após as 7h as 23h em dias de semana"
      );
    } else if (
      (diaEvento === "sabado" || diaEvento === "domingo") &&
      horaEvento >= 7 &&
      horaEvento <= 15
    ) {
      nomeEmpresa = prompt("Qual é o nome da empresa: "); 
      alert(
        `Auditório Reservado para ${nomeEmpresa} na data de ${dataEvento} as ${horaEvento}`
      );
    } else {
      nomeEmpresa = prompt("Qual é o nome da empresa: "); // Atribuindo o valor aqui
      alert(
        `Auditório Reservado para ${nomeEmpresa}, na data de ${dataEvento} as ${horaEvento}h.`
      );
    }
  
    let horaGarcon = 10.4;
    let duracao = parseInt(
      prompt("Digite a duração do evento em horas (apenas o numero ex: 6): ")
    );
    let quantidadeGarcons = (duracao * 6);
    let valorContratacao = (duracao * 6 * horaGarcon * duracao);
    alert(`Serão necessários ${quantidadeGarcons} garçons`);
    alert(`Com o valor de ${valorContratacao}`);
    alert("Agora vamos caulcular o buffet do hotel");
  
    let cafeLitragemPessoa = 0.2;
    let aguaLitragemPessoa = 0.5;
    let salgadosPessoas = 7;
  
    let quantidadeAguaTotal = (quantidadeConvidados * aguaLitragemPessoa);
    let quantidadeCafeTotal = (quantidadeConvidados * cafeLitragemPessoa);
    let quantidadeSalgadoTotal = (quantidadeConvidados * salgadosPessoas);
    let custobuffet = (quantidadeAguaTotal + quantidadeCafeTotal + quantidadeSalgadoTotal);
    let valortoTalEvento = (custobuffet + valorContratacao);
  
    alert(`Contando com a quantidade de convidados, sera necessário: ${quantidadeCafeTotal} litros de cafe, ${quantidadeAguaTotal} litros de água e ${quantidadeSalgadoTotal} salgados.`);
  
    alert( `Evento no auditório ${auditorioEscolhido}, para a empresa ${nomeEmpresa}, para o dia de ${diaEvento} ${horaEvento}h, com a duração de ${duracao}, quantidade de garçons: ${quantidadeGarcons}`);
    alert(`Custo garçons: ${valorContratacao}`);
    alert(`Custo total do buffet: ${custobuffet}`);
  
    alert(`Valor total do evento ${valortoTalEvento}`);
  
    let confirma = prompt(
      "Gostaria de confirmar a reserva: (S- Sim confirmar/ N- Não confirmo a reserva): ");
  
    confirma = confirma.toLocaleUpperCase();
  
    if (confirma === "S") {
      alert("Reserva confirmada com sucesso");
    } else if (confirma === "N") {
      alert("Reserva não confirmada");
    } else {
      alert("Opção invalida");
    }
  }
  
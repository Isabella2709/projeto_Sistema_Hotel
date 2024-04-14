function pesquisas_Cadastros() {
  let nomesHospedes = [
    "Isabella",
    "Rosani",
    "Jailson",
    "Gabriel",
    "Luiz",
    "Leandra",
  ];

  let perguntaAcao = parseInt(
    prompt(
      "Informe o que quer fazer: (1-Cadastrar hospedes: max 15 cadastros/ 2-Pesquisar hospedes/ 3-Listar hospedes/ 4- Sair):  "
    )
  );

  if (perguntaAcao === 1) {
    let continuar = prompt("Cadastrar hospedes S - Cadastrar/ PARE - Sair: ");

    continuar = continuar.toLocaleUpperCase();

    while (continuar === "S") {
      let nomes = [];
      let cadastro = prompt("Digite o nome do hospede:  ");
      if (cadastro.toUpperCase() === "PARE") {
        alert("Cadastros finalizados");
        break;
      } else {
        alert("Opção invalida, retornando ao inicio, tente novamente");
        return;
      }
      nomes.push(cadastro);
      continuar = prompt("Cadastrar hospedes S - Cadastrar/ PARE - Sair: ");
      continuar = continuar.toLocaleUpperCase();
      nomesHospedes = nomesHospedes.concat(nomes);
    }

    if (continuar !== "S" && continuar !== "PARE") {
      alert("Opção inválida, retornando ao início. Tente novamente.");
    }
  } else if (perguntaAcao === 2) {
    let pesquisaNome = prompt("Digite o nome do hospede para pesquisar: ");
    pesquisaNome = pesquisaNome.toLocaleLowerCase();

    let encontrado = false;
    for (let i = 0; i < nomesHospedes.length; i++) {
      if (pesquisaNome === nomesHospedes[i].toLocaleLowerCase()) {
        alert(`Hospede ${nomesHospedes[i]} encontrado`);
        encontrado = true;
        break;
      }
    }

    if (!encontrado) {
      alert(
        `Nome pesquisado inexistente no sistema. O nome ${pesquisaNome} não foi encontrado.`
      );
    }
  } else if (perguntaAcao === 3) {
    let listaHospede = "Segue lista de hospedes cadastrados até então: ";
    for (let i = 0; i < nomesHospedes.length; i++) {
      listaHospede += nomesHospedes[i];
      if (i < nomesHospedes.length - 1) {
        listaHospede += ", ";
      } else {
        listaHospede += ".";
      }
    }
    alert(listaHospede);
  } else if (perguntaAcao === 4) {
    alert(
      "Cadastros e pesquisas interrompidos pelo usuário, saindo automaticamente."
    );
    return;
  }
}

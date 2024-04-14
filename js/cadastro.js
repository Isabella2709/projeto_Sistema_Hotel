function cadastrar() {
  let valorDiaria = parseFloat(prompt("Digite o valor da Diaria: "));
  let cadastrar = prompt("Iniciar cadastro de hospedes (S - Sim / N - Não): ");
  cadastrar = cadastrar.toLocaleUpperCase();

  if (cadastrar == "S") {
    let cadastros = prompt(
      "Cadastrar (C - Cadastrar / PARE - sair (Sairá automaticamente)): "
    );
    cadastros = cadastros.toLocaleUpperCase();

    if (cadastros === "PARE") {
      return;
    }

    let nomes = [];
    let idades = [];
    let valores = [];

    while (cadastros !== "PARE") {
      let nome = prompt("Digite o nome do hospede: ");
      let idade = parseInt(prompt("Digite a idade do hospede: "));
      alert(`${nome} Cadastrada com Sucesso`);

      nomes.push(nome);
      idades.push(idade);

      cadastros = prompt("Cadastrar (C - Cadastrar / PARE - sair): ");
      cadastros = cadastros.toLocaleUpperCase();
    }

    let valorTotal = 0;
    let gratuidades = 0;
    let meias = 0;


    for (let i = 0; i < idades.length; i++) {
      if (idades[i] < 6) {
        gratuidades++;
      } else if (idades[i] >= 60) {
        meias++;
        valorTotal += valorDiaria/2;
      } else {
        valorTotal += valorDiaria;
      }
    }

    alert(
      `${nomes.length} hóspedes cadastrados e ${gratuidades} gratuidades, e ${meias} meia. Com o valor total de ${valorTotal}`
    );
  }
}

function reservar() {
  let quartos = [
    {
      nome: 1,
      Ocupado: false,
    },
    {
      nome: 2,
      Ocupado: false,
    },
    {
      nome: 3,
      Ocupado: false,
    },
    {
      nome: 4,
      Ocupado: false,
    },
    {
      nome: 5,
      Ocupado: false,
    },
    {
      nome: 6,
      Ocupado: false,
    },
    {
      nome: 7,
      Ocupado: false,
    },
    {
      nome: 8,
      Ocupado: false,
    },
    {
      nome: 9,
      Ocupado: false,
    },
    {
      nome: 10,
      Ocupado: false,
    },
    {
      nome: 11,
      Ocupado: false,
    },
    {
      nome: 12,
      Ocupado: false,
    },
    {
      nome: 13,
      Ocupado: false,
    },
    {
      nome: 14,
      Ocupado: false,
    },
    {
      nome: 15,
      Ocupado: false,
    },
    {
      nome: 16,
      Ocupado: false,
    },
    {
      nome: 17,
      Ocupado: false,
    },
    {
      nome: 18,
      Ocupado: false,
    },
    {
      nome: 19,
      Ocupado: false,
    },
    {
      nome: 20,
      Ocupado: false,
    },
  ];

  let valorReserva = parseFloat(prompt("Informe o valor da Diaria: "));
  let diasDeRerserva = parseInt(
    prompt("Informe a quantidade de dias que o hospede passará no hotel: ")
  );

  if (valorReserva <= 249 || diasDeRerserva < 1 || diasDeRerserva >= 31) {
    alert(
      "Valor informano invalido, temos quartos a paritr de R$250,00/ noite, e a reserva minina é de uma noite e a maxima 30 dias, tente novamente iniciar uma reserva."
    );
    return;
  }

  let numeroQuarto = parseInt(
    prompt("Digite o numero do quarto (apenas o numero sem 0): ")
  );

  for (let i = 0; i < quartos.length; i++) {
    if (quartos[i].Ocupado === false && quartos[i].nome === numeroQuarto) {
      let nomeHospede = prompt("Perfeito, agora informe o nome do hospede: ");
      let total = diasDeRerserva * valorReserva;

      let confirmaReserva = prompt(
        `Confirma reserva para ${nomeHospede}, com ${diasDeRerserva} dias, para o quarto ${numeroQuarto}. Com valor total de: ${total}. (Escreva "S" para confirmar ou "N" para não confirmar): `
      );

      confirmaReserva = confirmaReserva.toUpperCase();

      if (confirmaReserva === "S") {
        // Altera o status do quarto para ocupado
        quartos[i].Ocupado = true;
        alert("Perfeito, reserva confirmada.");

        // Salva os dados atualizados do quarto no localStorage
        localStorage.setItem(
          `quarto_${numeroQuarto}`,
          JSON.stringify(quartos[i])
        );
      } else if (confirmaReserva === "N") {
        alert("Reserva não confirmada pelo usuário.");
      }
      // Se o quarto desejado for encontrado e a reserva confirmada, o loop pode ser interrompido
      break;
    }
  }

  // Verifica se o quarto está ocupado
  for (let i = 0; i < quartos.length; i++) {
    if (quartos[i].Ocupado === true && quartos[i].nome === numeroQuarto) {
      alert("Quarto já está ocupado. Escolha outro quarto.");
      return; // Sai da função para impedir a reserva no quarto ocupado
    }
  }
}

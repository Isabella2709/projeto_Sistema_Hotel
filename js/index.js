function entrar(){
    alert("Bem vindo ao Ribas Luxury Hotel");
    let usuario = prompt("Digite seu nome de usuario: ");
    let senha = parseInt(prompt("Digite sua Senha: "));

    if(senha === 2678 ){
        alert(`Bem vindo ao sistema do hotel ${usuario} um prazer imenso ter você aqui`);
        window.location.href="quartos.html";
    }else if(senha != 2678){
        alert("Senha Incorreta por favor, tente novamente");
        let senha = parseInt(prompt("Digite sua Senha: "));
        if(senha == 2678){
            alert(`Bem vindo ao sistema do hotel ${usuario} um prazer imenso ter você aqui`);
            window.location.href="quartos.html"
        }else{
            alert("Contate o adiministrador para uma nova senha");
        }
    }
}


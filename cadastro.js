const form = document.getElementById("form-cadastro");

form.addEventListener("submit", function(event){
  event.preventDefault();
  
  const nome= document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  if(senha.length < 6){
  const msg = document.getElementById("senha-pequena");
msg.textContent = "Senha muito curta, mínimo 6 caracteres";
  return;
}
  const usuario = {
    nome: nome,
    email: email,
    senha: senha,
  }
  
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

usuarios.push(usuario);

localStorage.setItem("usuarios", JSON.stringify(usuarios));
  
  const msg = document.getElementById("realizado");
msg.textContent = "Cadastro realizado!";;
});


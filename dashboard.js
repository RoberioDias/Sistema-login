const usuario = JSON.parse(localStorage.getItem("logado"));

const bemVindo = document.getElementById("bem-vindo");

if(usuario){
  bemVindo.textContent = "Bem vindo, " + usuario.nome;
}else{
  window.location.href = "login.html";
}

const botaoLogout = document.getElementById("logout");

botaoLogout.addEventListener("click", function(){
  localStorage.removeItem("logado");
  window.location.href = "login.html"
});

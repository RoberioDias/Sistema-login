const formLogin = document.getElementById("form-login");

if(formLogin){
  formLogin.addEventListener("submit", function(event){
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const usuarioSalvo = usuarios.find(u =>
  u.email === email && u.senha === senha
);
    
    if(usuarioSalvo && email == usuarioSalvo.email && senha == usuarioSalvo.senha){
      localStorage.setItem("logado", JSON.stringify(usuarioSalvo));
      window.location.href = "dashboard.html";
    }else{
      const msg = document.getElementById("mensagem");
msg.textContent = "Email ou senha incorretos";
    }
  });
}

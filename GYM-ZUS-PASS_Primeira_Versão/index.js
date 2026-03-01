// Aguarda o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
 
   const btnLogin = document.getElementById("btn-ir-login");
   const btnCadAluno = document.getElementById("btn-cadastro-aluno");
   const btnCadProf = document.getElementById("btn-cadastro-prof");

   if (btnLogin) {
      btnLogin.addEventListener("click", () => {
         window.location.href = "teladelogin.html";
      });
   }

   if (btnCadAluno) {
      btnCadAluno.addEventListener("click", () => {
         window.location.href = "teladecadastroAluno.html";
      });
   }

   if (btnCadProf) {
      btnCadProf.addEventListener("click", () => {
         window.location.href = "teladecadastroProfessor.html";
      });
   }
});


const formLogin = document.getElementById("form-login");

if (formLogin) {
   formLogin.addEventListener("submit", (event) => {
      event.preventDefault(); 
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;


      if (email && senha) {
         alert("Login realizado com sucesso! Redirecionando...");
         window.location.href = "index.html";
      } else {
         alert("Por favor, preencha todos os campos.");
      }
   });
}


const formCadastroAluno = document.getElementById("form-cadastro-aluno");
const formCadastroProf = document.getElementById("form-cadastro-professor");

function validarSenhaForte(senha) {
   const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   return regex.test(senha);
}

function configurarCadastro(form) {
   if (form) {
      form.addEventListener("submit", (event) => {
         event.preventDefault();
         const senha = form.querySelector("#password").value;

         if (!validarSenhaForte(senha)) {
            alert(
               "A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais (@$!%*?&).",
            );
            return;
         }

         alert(
            "Cadastro realizado com sucesso! Redirecionando para o login...",
         );
         window.location.href = "teladelogin.html";
      });
   }
}

configurarCadastro(formCadastroAluno);
configurarCadastro(formCadastroProf);



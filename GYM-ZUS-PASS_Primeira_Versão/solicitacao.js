document.addEventListener("DOMContentLoaded", () => {
   const formSolicitacao = document.getElementById("form-solicitacao");
   const listaSolicitacoes = document.getElementById("lista-solicitacoes");

   if (formSolicitacao) {
      formSolicitacao.addEventListener("submit", handleSolicitacaoSubmit);
   }

   // Delegação de evento para os botões de excluir
   if (listaSolicitacoes) {
      listaSolicitacoes.addEventListener('click', (event) => {
         // Verifica se o elemento clicado é um botão de excluir
         if (event.target.classList.contains('btn-excluir')) {
            // Encontra o card pai mais próximo e o remove
            const card = event.target.closest('.card');
            if (card) {
               card.remove();
            }
         }
      });
   }
});

function handleSolicitacaoSubmit(event) {
   event.preventDefault();

   const form = event.target;

   // Captura os dados
   const dados = {
      id: Date.now(), // Adiciona um ID único para cada solicitação
      nome: form.querySelector("#solicitante-nome").value.trim(),
      contato: form.querySelector("#solicitante-contato").value.trim(),
      tipoAula: form.querySelector("#solicitante-aula").value.trim(),
      descricao: form.querySelector("#solicitante-descricao").value.trim(),
   };

   // Validação
   if (!validarDados(dados)) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
   }

   // Adiciona na interface
   adicionarCardSolicitacao(dados);

   // Limpeza e Feedback
   form.reset();
   fecharModal("#solicitacaoModal");
   alert("Sua solicitação foi enviada com sucesso!");
}


function validarDados(dados) {
   return dados.nome && dados.tipoAula && dados.descricao;
}


function adicionarCardSolicitacao(dados) {
   const listaSolicitacoes = document.getElementById("lista-solicitacoes");
   if (!listaSolicitacoes) return;

   const novaSolicitacao = document.createElement("div");
   novaSolicitacao.classList.add("card", "mb-3");
   novaSolicitacao.setAttribute('data-id', dados.id); // Define o ID como um atributo de dados

 
   novaSolicitacao.innerHTML = `
        <div class="card-header">
            Solicitação de: <strong>${dados.nome}</strong>
        </div>
        <div class="card-body">
            <h5 class="card-title">Tipo de Aula: ${dados.tipoAula}</h5>
            <p class="card-text">${dados.descricao}</p>
            ${dados.contato ? `<p class="card-text"><small class="text-muted">Contato: ${dados.contato}</small></p>` : ""}
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <span class="text-muted">Status: Enviada</span>
            <button class="btn btn-sm btn-outline-danger btn-excluir">Excluir</button>
        </div>
    `;

   listaSolicitacoes.prepend(novaSolicitacao);
}

function fecharModal(selector) {
   const modalElement = document.querySelector(selector);
   if (modalElement && window.bootstrap) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      if (modalInstance) {
         modalInstance.hide();
      }
   }
}

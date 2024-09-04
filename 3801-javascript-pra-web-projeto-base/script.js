const inputItem = document.getElementById("input-item");
const adicionarBotao = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
const listasComprados = document.getElementById("lista-comprados");
let contador = 0;

function adicionarItem(evento) {
    evento.preventDefault(); // Previne o comportamento padrão do formulário

    const itemDaLista = document.createElement("li");

    // Criação e configuração do container do item da lista
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");

    // Criação do container para o nome do item
    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    // Adiciona o checkbox antes do nome do item
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++; // Incrementa contador após uso

    // Criação do label para o checkbox (opcional)
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    // Elemento de checkbox customizado (opcional)
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    // Adiciona checkbox e customização ao label
    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    // Adiciona o label (contendo checkbox e customização) ao container do nome
    containerNomeDoItem.appendChild(checkboxLabel);

    // Criação do nome do item
    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = inputItem.value; // Usando inputItem para pegar o valor do campo

    // Adiciona o nome do item após o checkbox
    containerNomeDoItem.appendChild(nomeDoItem);

    // Adicionando a data de criação do item
    const itemData = document.createElement("p");
    const dataAtual = new Date();
    itemData.innerText = `${dataAtual.toLocaleDateString("pt-BR", { weekday: "long" })} (${dataAtual.toLocaleDateString()}) às ${dataAtual.toLocaleTimeString()}`;
    itemData.classList.add("item-lista-texto");

    // Adiciona a data de criação ao container do nome
    containerNomeDoItem.appendChild(itemData);

    // Criação do container para os botões de ação
    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes");

    // Botão de remover com imagem
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botao-acao");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    // Botão de edição com imagem
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-acao");

    const imagemEditar = document.createElement("img");
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    // Adicionando elementos ao container principal do item
    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);

    // Adicionando o container do item na lista
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);

    // Listener para riscar o texto quando o checkbox é marcado
    checkboxInput.addEventListener("change", function () {
        if (this.checked) { 
            nomeDoItem.style.textDecoration = "line-through";
            listasComprados.appendChild(itemDaLista);
            checkboxCustomizado.classList.add("checked");
        } else { 
            nomeDoItem.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
            checkboxCustomizado.classList.remove("checked");
        }
    });

    // Limpar o campo de input após adicionar o item
    inputItem.value = "";
}

// Adiciona o evento de clique ao botão
adicionarBotao.addEventListener("click", function(event) {
    adicionarItem(event); // Passa o evento para a função
});

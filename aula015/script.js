let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");
let contador = 0;

function addTarefa(){
    let valorInput = input.value;

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div class="item-icone">
                <i class="material-symbols-outlined">radio_button_unchecked</i>
            </div>
            <div class="item-nome">
                ${valorInput}
            </div>
            <div class="item-botao">
                <button style="cursor: pointer" onclick="deletar(${contador})" class="delete"><i class="material-symbols-outlined">delete</i>Deletar</button>
            </div>
        </div>`;

        //add novo item no main
        main.innerHTML += novoItem;
        
        //zerar input
        input.value = "";
        input.focus(); //input ficar focado
        
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

//fazer com que a tecla ENTER de nº13, ative a função de click (adicionar);
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13) {
        event.preventDefault(); //previnir enter fazer outras funções;
        btnAdd.click();
    }
})
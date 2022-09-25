let tarefaInserida = document.querySelector("#tarefas");

let botaoInserir = document.querySelector("#botao");

botaoInserir.addEventListener ("click", function(event){


adicionaNaLista(tarefaInserida);

});


/* Cria li e adiciona tarefas do input */

function adicionaNaLista(tarefaInserida){
    let ol = document.querySelector("#lista-tarefas");
    let li = document.createElement("li");

    li.textContent = tarefaInserida.value;
    ol.appendChild(li)

    tarefaInserida.value = " ";
};





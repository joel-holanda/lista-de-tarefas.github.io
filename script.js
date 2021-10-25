function adicionar(){
    var tarefa = document.querySelector('#texto').value;

    document.querySelector('#texto').value = '';

    //criar botoes
    var titulo = document.createElement('ul');


    //Cria textos
    var texto = document.createTextNode('-  ' + tarefa);


    //Coloca o texto entre as Tags
    titulo.appendChild(texto);


    // Coloca a Tag criada e colocar na div #tarefas
    document.body.querySelector('#tarefas').appendChild(titulo);

    criareditar();
    criaremover();

}

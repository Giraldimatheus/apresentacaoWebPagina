function salvar(){
    var inputNovoNome = document.getElementById("novoNome");
    var nome = document.getElementById("nomeAtual");
    var inputNovoTitulo = document.getElementById("novoTitulo");
    var Titulo = document.getElementById("tituloAtual");
    var inputNovaIdade = document.getElementById("novaIdade");
    var Idade = document.getElementById("idadeAtual");
    var inputNovaLocalizacao = document.getElementById("novaLocalizacao");
    var localizacao = document.getElementById("localizacaoAtual");
    var inputNovaBiografia = document.getElementById("novaBiografia");
    var Biografia = document.getElementById("biografiaAtual");
    if (inputNovoNome.value == "" && inputNovoTitulo.value == "" && inputNovaIdade.value == "" && inputNovaLocalizacao.value == "" && inputNovaBiografia.value == "") {
        alert("Por favor, preencha os campos que deseja alterar.");
        return false;
    } else {

        if(inputNovoNome.value != ""){

            nome.innerText = inputNovoNome.value
        }
        if(inputNovoTitulo.value != ""){
            Titulo.innerText = inputNovoTitulo.value
        }
        if(inputNovaIdade.value != ""){
            Idade.innerText = inputNovaIdade.value
        }
        if(inputNovaLocalizacao.value != ""){
            localizacao.innerText = inputNovaLocalizacao.value
        }
        if(inputNovaBiografia.value != ""){
            Biografia.innerText = inputNovaBiografia.value
        }
        $('#modelId').modal('hide');
        return true;
    }
}

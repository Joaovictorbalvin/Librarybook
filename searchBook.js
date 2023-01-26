var btnSearch = document.getElementById('btnSearch');
//Pega o botão declarado no html como id btnSearch.

btnSearch.addEventListener("click", myFunction);
//Adiciona um evento de clique sobre o botão pesquisar.

function myFunction(){
    document.getElementById('results').innerHTML = '';
    //Pega a div delcarada no html.
    var txtSearch = document.getElementById('txtSearch').value;
    //input text declarado no html como id txtSearch.
    var txtSearch1 = txtSearch.split(" ").join("+");
    //variavel para criação de subsstring, join junta todos elementos da array.
    fetch("https://openlibrary.org/search.json?q="+txtSearch1)
    // maneira fácil e lógica para buscar recursos de forma assíncrona através da rede.
    .then(response => response.json())
    ////Buscando os dados e transformando em Json.
    .then(data => {
    ////Passando para o proximo metodo .then

    if(0<data.docs.length){
        for(var i=0; i<data.docs.length; i++){
        // no for enquanto a variavel i começara com 0 for menor que data.docs faça tal coisa, e incremente na variavel i o valor dela mesma 1 (i++).
        document.getElementById('results').innerHTML +=
        //Pega a div delcarada no html.
        "<div >" +
        //construo a parte visual.
            "<img src='http://covers.openlibrary.org/b/isbn/"+data.docs[i].isbn[0]+"-M.jpg' alt='"+data.docs[i].title+"'>" +
            //pego a imagem do livro.
            "<div>" +
            //construo a parte visiual onde vai os textos, por exemplo: auto, titulo, isbn...
            "<h5>"+data.docs[i].title+"</h5>" +
            //pego o titulo do livro.
            "<p>Autor: "+data.docs[i].author_name+"</p>" +
            //pego o nome do autor.
            "<p>ISBN: "+data.docs[i].isbn[0]+"</p>" +
            //pego o ISBN do livro.
            "<a href='http://openlibrary.org/isbn/"+data.docs[i].isbn[0]+"'>Ir ver</a>" +
            //aqui é um link que vai direto openlibrary.
            "</div>" +
            //termina a div.

        "</div>";
        //terminar a div mae.

        }
    }else{
        document.getElementById('results').innerHTML += 
         //Pega a div delcarada no html.
        "<div>" +
        //Construo uma div.
        "<Titulo não Encontrado"+
        //declaro que o livro não foi encontrado caso o usuário escreva errado, um livro nao existente, fora da biblioteca, etc.
        "</div>";
        //termino a div.

    }
    });
}
$(document).ready(function(){

    var urlParams = new URLSearchParams(window.location.search);
    let id = urlParams.get('id');


    $.getJSON("https://api.themoviedb.org/3/movie/"+id+"?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(data){
        $('#imagem').attr('src',"https://image.tmdb.org/t/p/original/"+data.poster_path)
        $('#titulo').html(data.title);
        $('#sinopse').html("<b>Sinopse: </b>"+data.overview);
        $('#data').html("<b>Estreia: </b>"+data.release_date);
        $('#aval').html("<b>Avaliação: </b>"+data.vote_average);
    });
    $.getJSON("https://api.themoviedb.org/3/movie/"+id+"/credits?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(data){

        let actors = "",writer="",director="";
                for(let i = 0; i < 3; i++){
                    actors += data.cast[i].name+" | ";
                }
                actors += data.cast[3].name;

                for(let i = 0; i < data.crew.length; i++){

                    if(data.crew[i].job == "Director"){
                        director = data.crew[i].name;
                    }
                    if (data.crew[i].department == "Writing"){
                        writer = data.crew[i].name;
                    }
                    if(writer && director){
                        break;
                    }

                }
         
                

        $('#diretor').html("<b>Diretor: </b>"+director);
        $('#roteiro').html("<b>Roteiro: </b>"+writer);
        $('#ator').html("<b>Atores: </b>"+actors);

    });


});


function pesquisar(){

    let fill = $('#pesq').val();

    console.log(fill);

    if(fill){
        window.location.href = "./pesquisa.html?pes="+fill;
    }
}
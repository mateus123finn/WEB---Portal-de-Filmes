$(document).ready(function(){

    var urlParams = new URLSearchParams(window.location.search);
    let pes = urlParams.get('pes');

    $.getJSON("https://api.themoviedb.org/3/search/movie?query="+pes+"&api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(data){

        if(data.results.length > 10){
            for(let i = 0; i < 10; i++){
                $('#item').html($('#item').html()+'<div class="col-lg-2 col-sm-12"><a href=./info.html?id='+data.results[i].id+'><img id="imagem" height="80%" width="100%" style="padding:8%" src="https://image.tmdb.org/t/p/original/'+data.results[i].poster_path+'" alt="Sem Foto"></a></div><div style="margin-top: 2em;" class="col-lg-9 saia"><h4 id="titulo">'+data.results[i].title+'</h4><p id="sinopse"><b>Sinopse: </b>'+data.results[i].overview+'</p></div>'); 
            }
        } else {
            for(let i = 0; i < data.results.length; i++){
                $('#item').html($('#item').html()+'<div class="col-lg-2 col-sm-12"><a href=./info.html?id='+data.results[i].id+'><img id="imagem" height="80%" width="100%" style="padding:8%" src="https://image.tmdb.org/t/p/original/'+data.results[i].poster_path+'" alt="Sem Foto"></a></div><div style="margin-top: 2em;" class="col-lg-9 saia"><h4 id="titulo">'+data.results[i].title+'</h4><p id="sinopse"><b>Sinopse: </b>'+data.results[i].overview+'</p></div>'); 
            }
        }

    });


});

function pesquisar(){

    let fill = $('#pesq').val();

    console.log(fill);

    if(fill){
        window.location.href = "./pesquisa.html?pes="+fill;
    }
}


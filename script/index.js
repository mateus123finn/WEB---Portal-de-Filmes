$(document).ready(function(){
    
    
    $.getJSON("https://api.themoviedb.org/3/movie/latest?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(data){
        console.log(data);
    });



    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function($data){

        for(let $i = 0; $i < 4; $i++){
            $.getJSON("https://api.themoviedb.org/3/movie/"+$data.results[$i].id+"/credits?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(dados,i){
                let actors = "",writer,director;
                for(let i = 0; i < 3; i++){
                    actors += dados.cast[i].name+" | ";
                }
                actors += dados.cast[3].name;

                for(let i = 0; i < dados.crew.length; i++){

                    if(dados.crew[i].job == "Director"){
                        director = dados.crew[i].name;
                    }
                    if (dados.crew[i].department == "Writing"){
                        writer = dados.crew[i].name;
                    }
                    if(writer && director){
                        break;
                    }

                }

                if($i == 0){
                    $('#pop').html('<div class="carousel-item active"><div class="row" style="margin-bottom: 35px;"><div class="col-xs-12 col-12 col-md-6" style="min-height: 294px;"><a href="./info.html?id='+$data.results[$i].id+'"><img src = "https://image.tmdb.org/t/p/original/'+$data.results[$i].poster_path+'"></a></div><div class="col-xs-12 col-12 col-md-6"><h5>'+$data.results[$i].title+'</h5><p><b>Sinopse:</b> '+$data.results[$i].overview+'</p><div class="row "><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Diretor:</b> '+director+'</div><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Roteiro:</b> '+writer+'</div><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Estreia:</b> '+$data.results[$i].release_date+'</div></div><div class="col-12"><b>Elenco:</b><p> '+actors+'</p></div><div class="col-12"><b>Avaliação: </b><p class="ava">'+$data.results[$i].vote_average+'</p></div></div></div></div>');
                } else {
                    $('#pop').html(
                        $('#pop').html()+'<div class="carousel-item"><div class="row" style="margin-bottom: 35px;"><div class="col-xs-12 col-12 col-md-6" style="min-height: 294px;"><a href="./info.html?id='+$data.results[$i].id+'"><img src = "https://image.tmdb.org/t/p/original/'+$data.results[$i].poster_path+'"></a></div><div class="col-xs-12 col-12 col-md-6"><h5>'+$data.results[$i].title+'</h5><p><b>Sinopse:</b> '+$data.results[$i].overview+'</p><div class="row "><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Diretor:</b> '+director+'</div><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Roteiro:</b> '+writer+'</div><div class="col-xs-12 col-sm-12 col-md-3 col-lg-4"><b>Estreia:</b> '+$data.results[$i].release_date+'</div></div><div class="col-12"><b>Elenco:</b><p> '+actors+'</p></div><div class="col-12"><b>Avaliação: </b><p class="ava">'+$data.results[$i].vote_average+'</p></div></div></div></div>'
                    );
                }


            });  
        }
    });

    $.getJSON( "https://api.themoviedb.org/3/movie/top_rated?api_key=3fd1aa1cebc44d2d37c0ded556a06d6b&language=pt-BR",function(data){

        for(let i = 0; i < 4; i++){

            $('#dstq').html($('#dstq').html()+'<div class="col-xs-6 col-md-5 col-xl-3"><div class="card" widht="100%"><a href="./info.html?id='+data.results[i].id+'"><img src="https://image.tmdb.org/t/p/original/'+data.results[i].poster_path+'" class="card-img-top" alt="filme1"></div></div></a>');

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
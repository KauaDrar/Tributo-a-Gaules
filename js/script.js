window.onload = function(){
    document.querySelector(".redes").style.display = 'none';
    var full = false;
    const nav=document.querySelector(".menu");
    const topoNav=nav.offsetTop;

    function fixarMenuNoTopo(){
        if(window.pageYOffset >= topoNav){
            nav.classList.add("FixoNoTopo");
        }else{
            nav.classList.remove("FixoNoTopo");
        }
    }
    window.onscroll=function(){
        console.log(full);
        if(full == false){
            fixarMenuNoTopo();
        }
    }
    function tirarDoTopo(){
        full = true;
        nav.classList.remove("FixoNoTopo");
    }
    function voltarAoTopo(){
        full = false;
        fixarMenuNoTopo();
    }

    

    document.querySelector("#galeria").addEventListener("click", function(){
        const or = getComputedStyle(document.documentElement).getPropertyValue('--orientation');
        console.log(or);
        console.log(document.querySelector("#imagem_aberta .nsei .imagem figure img").src);
        console.log(document.querySelector("#galeria .img9 img").getAttribute('src'));
        if(or == 'landscape'){
            if(document.querySelector("#imagem_aberta .nsei .imagem figure img").src == document.querySelector("#galeria .img10 img").getAttribute('src')){
                document.querySelector(".area_full").style.width = '77.5vh';
            }
            else{
                document.querySelector(".area_full").style.width = '130vh';
            }
        }
        else if(or = 'portrait'){
            document.querySelector(".area_full").style.width = '95%';
        }
    });
    document.querySelector(".img1").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img1 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules se divertindo durante uma livestream, enquanto ouvia uma canção do cantor Raffa Moreira.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img2").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img2 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules é escolhido a Personalidade do Ano no Prêmio eSports Brasil 2020.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img3").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img3 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules em sua primeira participação no podcast Flow Podcast.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img4").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img4 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules em sua segunda participação no podcast Flow Podcast.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img5").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img5 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules, segundo, da direita para a esquerda, posa com time do MIBR campeão da DreamHack 2007.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img6").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img6 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules durante o evento BLAST Pro Series: São Paulo 2019.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img7").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img7 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules em anúncio da NBA.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
    });
    document.querySelector(".img8").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img8 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules em propaganda do Banco do Brasil.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
        console.log(document.querySelector(".area_full").style.width);
    });
    document.querySelector(".img9").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img9 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules no programa Mais Você.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
        console.log(document.querySelector(".area_full").style.width);
    });
    document.querySelector(".img10").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img10 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules posa com a camisa 2 do Corinthians.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
        console.log(document.querySelector(".area_full").style.width);
    });
    document.querySelector(".img11").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img11 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules em seu anúncio de tranmissão da Fórmula 1.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
        console.log(document.querySelector(".area_full").style.width);
    });
    document.querySelector(".img12").addEventListener("click", function(){
        tirarDoTopo();
        document.querySelector("#imagem_aberta .nsei .imagem figure img").src = document.querySelector("#galeria .img12 img").getAttribute('src');
        document.querySelector("#imagem_aberta .nsei .imagem figure figcaption").innerHTML = 'Gaules é escolhido o Melhor Streamer do Ano no Prêmio eSports Brasil 2021.';
        document.querySelector("#imagem_aberta").style.display = 'flex';
        console.log(document.querySelector(".area_full").style.width);
    });
    document.querySelector(".meu_nome").addEventListener("click", function(){
        console.log(document.querySelector(".redes").style);
        if(document.querySelector(".redes").style.display == 'block'){
            document.querySelector(".redes").style.display = 'none'
        }
        else if(document.querySelector(".redes").style.display == 'none'){
            document.querySelector(".redes").style.display = 'block'
        }
    });
    document.querySelector("#fechar img").addEventListener("click", function(){
        voltarAoTopo();
        document.querySelector("#imagem_aberta").style.display = 'none';
    });
};

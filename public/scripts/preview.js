console.log("Estou online!")



const msg = document.getElementById("msg");
const file = document.getElementById("imgUploaded");
const fileVideo = document.getElementById("videoUploaded");
const myvideo = document.getElementById("myVideo");

const wallpaper = document.getElementById("wallpaper");

file.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    if(file.files.length > 0){
        nome = file.files[0].name;
        console.log(nome);
        document.getElementById("left").style.backgroundImage = "url(/public/assets/"  + nome + ")"
        document.getElementById("myVideo").style.display="none"
    }
});

fileVideo.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    if(fileVideo.files.length > 0){
        nome = fileVideo.files[0].name;
        console.log(nome);
        document.getElementById("myVideo").style.display="flex"
      document.getElementById("videoSource"). src = "public/assets/" + nome;
      myvideo.load();
    }
});

function addwall(){
    file.click();
}

function addvideo(){
    fileVideo.click();
    
}
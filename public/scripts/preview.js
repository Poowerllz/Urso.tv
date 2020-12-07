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
        document.getElementById("left").style.backgroundImage = "url(/public/assets/wallpapers/"  + nome + ")"
        document.getElementById("myVideo").style.display="none"
    }
});

fileVideo.addEventListener("change", function(){
    var nome = "Não há arquivo selecionado. Selecionar arquivo...";
    if(fileVideo.files.length > 0){
        nome = fileVideo.files[0].name;
        console.log(nome);
        document.getElementById("left").style.backgroundImage =""
        document.getElementById("myVideo").style.display="flex"
      document.getElementById("videoSource"). src = "public/assets/videos/" + nome;
      myvideo.load();

      document.getElementById("Icon").src = "public/assets/icons/pause.svg"
    }
});

function addwall(){
    file.click();
}

function addvideo(){
    fileVideo.click();
}

function PausePlay(){
    const icon = document.getElementById("Icon")
    if(myVideo.currentTime >= 001){
    if(myVideo.paused == true){
        myVideo.play();
        icon.src = "public/assets/icons/pause.svg"
    } else{
        icon.src = "public/assets/icons/play.svg"
        myVideo.pause();
    }
} else {
    fileVideo.click();
}
}

function Restart(){
    myvideo.currentTime = 002;
    myvideo.pause();
    document.getElementById("Icon").src = "public/assets/icons/play.svg"
}

function openBox(){
    document.getElementById("contentIndex").style.display = "none"
}

function Index(){
    document.getElementById("contentIndex").style.display = "flex"
}

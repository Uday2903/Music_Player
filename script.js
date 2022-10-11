console.log("Welcome")

let songIndex =0;
let audioelement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'))
let forward = document.getElementById('forward');
let backward = document.getElementById('backward');
let mastersongname = document.getElementById('mastersongname');

let songs = [
    {SongName : "LEGION", filepath : "songs/1.mp3", coverpath : "covers/1.jpg" },
    {SongName : "TRAP", filepath : "songs/2.mp3", coverpath : "covers/2.jpg" },
    {SongName : "THEY MAD", filepath : "songs/3.mp3", coverpath : "covers/3.jpg" },
    {SongName : "PLUG WALK", filepath : "songs/4.mp3", coverpath : "covers/4.jpg" },
    {SongName : "ALONE", filepath : "songs/5.mp3", coverpath : "covers/5.jpg" },
    {SongName : "SAFETY DANCE", filepath : "songs/6.mp3", coverpath : "covers/6.jpg" },
    {SongName : "BACK IT UP", filepath : "songs/7.mp3", coverpath : "covers/7.jpg" },
]

songitems.forEach((element,i) => {
    // element.getElementByTagName('img')[0].src = songs[i].coverpath;
    element.getElementsByClassName('SongNames')[0].b = songs[i].SongName;
});

masterPlay.addEventListener('click', ()=>{
    console.log('Play/Pause');
    if(audioelement.paused || audioelement.currentTime<=0){
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioelement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

forward.addEventListener('click', (element,i)=>{
    if(songIndex>6){
        songIndex = 0;
    }

    else{
        songIndex += 1;
    }
        audioelement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].SongName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})

backward.addEventListener('click', (element,i)=>{
    if(songIndex<0){
        songIndex = 6;
    }

    else{
        songIndex -= 1;
    }
        audioelement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].SongName;
        audioelement.currentTime = 0;
        audioelement.play();
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})

audioelement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioelement.currentTime / audioelement.duration)*100);
    progressBar.value = progress;
})

progressBar.addEventListener('change', ()=>{
    audioelement.currentTime = ((progressBar.value*audioelement.duration)/100);
})


const makeallplay = () =>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeallplay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioelement.src = `songs/${songIndex+1}.mp3`;
        audioelement.currentTime = 0;
        audioelement.play();
        mastersongname.innerText = songs[songIndex].SongName;
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
    })
})






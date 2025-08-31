console.log("Welcome to Spotify");

// initialize variables
let songIndex = 0;
let audioElement = new Audio('1song.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "A bar song", filePath:"1song.mp3",coverPath:"cover1.jpg"},
    {songName: "Let me love you", filePath:"2song.mp3",coverPath:"cover2.jpg"},
    {songName: "Bin tere", filePath:"3song.mp3",coverPath:"logo3.jpg"},
    {songName: "Humnava mere", filePath:"4song.mp3",coverPath:"logo4.jpg"},
    {songName: "They mad", filePath:"5song.mp3",coverPath:"logo5.jpg"},
    {songName: "Rich the kid", filePath:"6song.mp3",coverPath:"logo6.jpg"},
];

songItems.forEach((element, i)=>{  
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
});

// play/pause toggle
masterPlay.addEventListener('click', ()=> {
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');

    } 
    else{
        audioElement.pause()
         masterPlay.classList.remove('fa-circle-pause');
          masterPlay.classList.add('fa-circle-play');
    }

});

// update progress bar as song plays
audioElement.addEventListener('timeupdate', ()=> {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);

    myProgressBar.value = progress;
});

// allow seeking in song
myProgressBar.addEventListener('change', ()=> {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = ()=>
{
     
     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
     })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays(); // reset all to play

        songIndex = i; // set clicked song index
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        // play correct song
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();

        // sync master play button
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
});




// next button
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= songs.length-1){
        songIndex = 0;   // loop back to first
    } else {
        songIndex += 1;  // go to next song
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});

// previous button
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;   // stay at first song
    } else {
        songIndex -= 1;  // go to previous song
    }
    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
});







// next button
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >= songs.length-1){
        songIndex = 0;   // loop back
    } else {
        songIndex += 1;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    // reset icons
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');

    // update master play button
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    // update song name (if you have span)
    document.getElementById('masterSongName').innerText = songs[songIndex].songName;
});

// previous button
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0;
    } else {
        songIndex -= 1;
    }

    audioElement.src = songs[songIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();

    // reset icons
    makeAllPlays();
    document.getElementsByClassName('songItemPlay')[songIndex].classList.remove('fa-circle-play');
    document.getElementsByClassName('songItemPlay')[songIndex].classList.add('fa-circle-pause');

    // update master play button
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    // update song name (if span exists)
    document.getElementById('masterSongName').innerText = songs[songIndex].songName;
});



let loginBtn = document.getElementById('loginBtn');
let logoutBtn = document.getElementById('logoutBtn');
let username = document.getElementById('username');
let userAvatar = document.getElementById('userAvatar');

loginBtn.addEventListener('click', () => {
    username.innerText = "Vishwajeet"; 
    userAvatar.src = "myphoto.jpg";    
    loginBtn.style.display = "none";
    logoutBtn.style.display = "inline-block";
});

logoutBtn.addEventListener('click', () => {
    username.innerText = "Guest";
    userAvatar.src = "default-user.png";
    loginBtn.style.display = "inline-block";
    logoutBtn.style.display = "none";
});

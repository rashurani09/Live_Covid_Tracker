console.log("Welcome to Spotify !!! ");

let songIndex =0;
let audioElement = new Audio('C:\Users\hp\Desktop\vs code h\spotify\songs\1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar = document.getElementById('myProgressBar')
let gif =  document.getElementById('gif')
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'))  // array.from since it is a collection

let songs = [ 
    {songName: "Tere dil ka Rishta" , filePath:"C:\Users\hp\Desktop\vs code h\spotify\songs\1.mp3" },
    {songName: "Desi Girl" , filePath: "C:\Users\hp\Desktop\vs code h\spotify\songs\2.mp3" },
    {songName: "Munni" , filePath: "C:\Users\hp\Desktop\vs code h\spotify\songs\3.mp3"},
    {songName: "Palat" , filePath:"C:\Users\hp\Desktop\vs code h\spotify\songs\4.mp3" },
    {songName: "Raghupati" , filePath:"C:\Users\hp\Desktop\vs code h\spotify\songs\5.mp3" },
    {songName: "Saans" , filePath: "C:\Users\hp\Desktop\vs code h\spotify\songs\6.mp3"},
    {songName: "saree ka " , filePath:"C:\Users\hp\Desktop\vs code h\spotify\songs\7.mp3" }
]



//audioElement.play();

//listen to events
// The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.
// Related Events
//The HTMLMediaElement playing event
//The HTMLMediaElement waiting event
////The HTMLMediaElement seeking event
////The HTMLMediaElement seeked event
//The HTMLMediaElement ended event
//The HTMLMediaElement loadedmetadata event
//The HTMLMediaElement loadeddata event
//The HTMLMediaElement canplay event
//The HTMLMediaElement canplaythrough event
//The HTMLMediaElement durationchange event
//The HTMLMediaElement timeupdate event
//The HTMLMediaElement play event
//The HTMLMediaElement pause event
//The HTMLMediaElement ratechange event
//The HTMLMediaElement volumechange event
//The HTMLMediaElement suspend event
//The HTMLMediaElement stalled event
//The HTMLMediaElement emptied event

//handle play pause stop
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
gif.style.opacity =1;
 }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;

    }

}
)

// we use the HTML DOM to assign an "ontimeupdate" event to a video element. When the user starts to play the video, or skips to a new position in the video, a function is triggered, which will display the current position (in seconds) of the video playback..
audioElement.addEventListener('timeupdate' , ()=>{


//update seekbar   //parseint() - A string to convert into a number.
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);  //*100to cgeck % kitna chl chuka h
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100; //converted % to duration formula
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element. classList.remove('fa-pause');
        element.classList.add('fa-play');})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click' , (e)=>{
        makeAllPlays(); // e.target  jispe click hua vo mil jayega
        
        songIndex = parseInt(e.target.id) ;
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerHTML = songs[songIndex].songName; 
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    })
});

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>7){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName; 
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerHTML = songs[songIndex].songName; 
    audioElement.currentTime =0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');

})
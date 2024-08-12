const videoPlayer = document.querySelector(".videoPlayer")
const video = videoPlayer.querySelector('.video')
const playBtn = document.querySelector(".playButton")
const nextBtn = document.querySelector('.nextButton')
const prevBtn = document.querySelector('.prevButton')

let musicVideos = ['videos/aways phone.mp4', 'videos/CAn U b My.mp4', 'videos/Dont leave phone.mp4', 'videos/down.mp4', 'videos/exhale.mp4', 'videos/flow.mp4', 'videos/On The DANCE fLOOR (No Murdering).mp4', 'videos/otro lugaer.mp4', 'videos/Potions.mp4', 'videos/roads.mp4']

var source = document.createElement('source');

function returnRandArrayInt(i) {
   return Math.floor(Math.random() * i);
} 

let randMusicVideo = returnRandArrayInt(musicVideos.length)



video.setAttribute('src', musicVideos[randMusicVideo])



console.log(source)
console.log(video)
playBtn.addEventListener("click", (e) => {
    console.log("clicked")
     if(video.paused) {
        video.play()
        video.loop = true
        playBtn.style.backgroundImage="url('./images/Pause.png')"
     } else {
        video.pause();
        playBtn.style.backgroundImage="url('./images/Play.png')"
     }
})
console.log(video)

nextBtn.addEventListener("click", () => {
   
   window.location.reload();
   video.setAttribute('src', musicVideos[randMusicVideo++])
   
})


prevBtn.addEventListener("click", () => {
   
   window.location.reload();
   video.setAttribute('src', musicVideos[randMusicVideo--])
   
})
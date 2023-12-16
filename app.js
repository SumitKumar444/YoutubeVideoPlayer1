const API_KEY = 'AIzaSyC5i6d3D8Euv8lTi0OHjdwbktgxmZM0Og0';
const VIDEO_ID = 'QMMIBJ7EJ9c'; 


const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;


function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'iv_load_policy': 3,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


function onPlayerReady(event) {
    
}


function onPlayerStateChange(event) {
    
}

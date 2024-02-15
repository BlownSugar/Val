document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const originalLyrics = document.getElementById('original-lyrics');
    const translatedLyrics = document.getElementById('translated-lyrics');

    const heartPath = document.getElementById('heart-path');
    const gradientStop1 = document.querySelector('.gradient-stop1');
    const gradientStop2 = document.querySelector('.gradient-stop2');
    const invitation = document.getElementById('invitation');

    var heartClicked = false; 

    heartPath.addEventListener('click', function() {
        heartClicked = true;
    
        document.getElementById('heart-container').classList.add('pulse');
    
        animateGradient();
    
        var lyricsElements = document.querySelectorAll('#lyrics-container p');
        lyricsElements.forEach(function(element) {
            element.classList.add('melt-away');
        });

        var heartText = document.querySelector('#heart-container p');
        if (heartText) {
            heartText.style.visibility = 'hidden'; 
            heartText.style.pointerEvents = 'none'; 
        }
    
        setTimeout(function() {
            invitation.classList.remove('hidden'); 
            invitation.classList.add('scale-in');
        }, 1000);      
    });

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function() {

        music.play();


        startButton.style.display = 'none';


    });


    function animateGradient() {
     
        gradientStop1.classList.add('gradient-animate');
        gradientStop2.classList.add('gradient-animate');
    }


    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    

    const lyrics = [
        { start: 0, end: 4, original: "Привет", translated: "Я хочу тебе показать кое что," },
        { start: 4, end: 8, original: "Дослушай до конца.", translated: "..." },
        { start: 77, end: 82, original: "Face away", translated: "Отвернись," },
        { start: 83, end: 88, original: "Deal with the pain", translated: "Справься с этой болью" },
        { start: 89, end: 92, original: "Your own way", translated: "Собственными руками" },
        { start: 93, end: 94, original: "How could they...", translated: "А как бы они.." },
        { start: 95, end: 101, original: "deal with the pain?", translated: "справились с болью?" },
        { start: 102, end: 105, original: "I knew", translated: "Я знал," },
        { start: 106, end: 108, original: "That it was mine..", translated: "Она была и моей.." },
        { start: 109, end: 113, original: "..too", translated: "..тоже" },
        { start: 114, end: 117, original: "And you?", translated: "А ты?" },
        { start: 118, end: 127, original: "Is it really you?", translated: "Это правда ты?" },
        { start: 128, end: 133, original: "Let's search the sky..", translated: "Давай исследуем небо.." },
        { start: 134, end: 136, original: "..for a while", translated: "..хоть ненадолго " },
        { start: 137, end: 140, original: "You and I", translated: "Ты и я" },
        { start: 141, end: 146, original: "Collide like two stars...", translated: "Столкнемся, как две звезды.." },
        { start: 147, end: 149, original: "for a while", translated: "..хоть ненадолго" },
        { start: 150, end: 155, original: "You and I", translated: "Ты и я" },
        { start: 156, end: 161, original: "Crushed by silent snow", translated: "Раздавлен безмолвным снегопадом" },
        { start: 162, end: 169, original: "Not the first I know", translated: "Не первым что я знаю" },
        { start: 170, end: 175, original: "Caught in ebb and flow", translated: "Втянут в превратности судьбы" },
        { start: 176, end: 181, original: "I'm bleeding out, ..oh you know", translated: "Я истекаю кровью, ..ты знаешь" },
        { start: 182, end: 203, original: "----", translated: "----" },
        { start: 204.5, end: 205, original: "Is it really you?", translated: "Это правда ты?" },
        { start: 206, end: 210, original: "Let's search the sky..", translated: "Давай исследуем небо.." },
        { start: 211, end: 213, original: "..for a while", translated: "..хоть ненадолго" },
        { start: 214, end: 217, original: "You and I", translated: "Ты и я" },
        { start: 218, end: 223, original: "Collide like two stars.. ", translated: "Столкнемся, как две звезды.." },
        { start: 224, end: 226, original: "..for a while", translated: "..хоть ненадолго " },
        { start: 227, end: 232, original: "You and I", translated: "Ты и я" },
        { start: 233, end: 300, original: "Что ж, теперь я хочу тебя кое о чем попросить..", translated: "" }
    ];


    


    music.volume = 0.5; 


    music.play();



        var loopStart = 263;
        var loopEnd = 287;



        document.getElementById('heart-container').classList.add('hidden');
        invitation.classList.add('hidden');


        music.addEventListener('timeupdate', function() {
            var currentTime = music.currentTime;
            var heartAppearanceTime = 235;
            if (currentTime >= heartAppearanceTime && !heartClicked) {
                if (!heartClicked) { 
                    document.getElementById('heart-container').classList.remove('hidden');
                }
            } else {
         
                if (!heartClicked) { 
                    document.getElementById('heart-container').classList.add('hidden');
                    invitation.classList.add('hidden');
                    document.getElementById('heart-container').classList.remove('pulse');
                    gradientStop1.classList.remove('gradient-animate');
                    gradientStop2.classList.remove('gradient-animate');
                    gradientStop1.setAttribute('stop-color', '#808080');
                    gradientStop2.setAttribute('stop-color', '#808080');

                    
                    var heartText = document.querySelector('#heart-container p');
                    if (heartText) {
                        heartText.style.visibility = 'visible';
                    }
                }
            }
        });
    
        
        music.addEventListener('timeupdate', function() {
            if (music.currentTime >= loopEnd) {
                music.currentTime = loopStart; 
                music.play(); 
        
                document.getElementById('heart-container').classList.remove('hidden');
            }
        });
        
    

        function updateLyrics(time) {
            const segment = lyrics.find(lyric => time >= lyric.start && time < lyric.end);
        
            if (!segment) return;
        
            
            if (segment.start === 204.5) {
                if (originalLyrics.dataset.lastHandled !== '204.5') {
                    originalLyrics.innerHTML = '';
                    translatedLyrics.innerHTML = '';
        
                    const words = segment.original.split(/\s+/);
                    words.forEach((word, index) => {
                        setTimeout(() => {
                            const wordElement = document.createElement('p');
                            wordElement.textContent = word;
                            wordElement.classList.add('vhs-effect', 'trembling-text');
                            originalLyrics.appendChild(wordElement);
                        }, index * (500 / words.length));
                    });
        
                    originalLyrics.dataset.lastHandled = '204.5';
                }
            } else if (segment.start === 150 || segment.start === 227) { 
                if (originalLyrics.dataset.lastHandled !== segment.start.toString()) {
                    originalLyrics.innerHTML = '';
                    translatedLyrics.innerHTML = '';
            
                    
                    const parts = segment.original.split(" ");
                    parts.forEach((part, index) => {
                        const partElement = document.createElement('p');
                        partElement.textContent = part;
            
                       
                        partElement.classList.add('large-text');
            
                        
                        if (part === "You") {
                            partElement.classList.add('contour-gif'); 
                        }
            
                        originalLyrics.appendChild(partElement);
                    });
            
                    originalLyrics.dataset.lastHandled = segment.start.toString();
                }
            }
             else { 
                if (originalLyrics.dataset.lastHandled !== segment.start.toString()) {
                    originalLyrics.innerHTML = `<p>${segment.original}</p>`;
                    translatedLyrics.innerHTML = `<p>${segment.translated}</p>`;
        
                    originalLyrics.firstChild.classList.add('animate-lyrics');
                    translatedLyrics.firstChild.classList.add('animate-lyrics');
        
                    originalLyrics.dataset.lastHandled = segment.start.toString();
                }
            }
        }
        
        
        
        
    
    
    
    
    
    
    
    
    


    music.addEventListener('ended', function() {
        invitation.classList.remove('hidden');
    });


    music.addEventListener('timeupdate', function() {
        updateLyrics(music.currentTime);
    });


    
    yesBtn.addEventListener('click', function() {
        clearScreen();

        document.getElementById('yes-response').classList.remove('hidden');

        var yesVideo = document.getElementById('yes-bg-video');
        yesVideo.play();
        yesVideo.volume = 1; 
    });

    noBtn.addEventListener('click', function() {
        clearScreen();

        document.getElementById('no-response').classList.remove('hidden');

        var noVideo = document.getElementById('no-bg-video');
        noVideo.play();
        noVideo.volume = 1; 
    });
    
    function clearScreen() {

        document.getElementById('bg-video').style.display = 'none';
        document.getElementById('heart-container').style.display = 'none';
        document.getElementById('invitation').style.display = 'none';

    }
    
});


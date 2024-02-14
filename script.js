document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('background-music');
    const originalLyrics = document.getElementById('original-lyrics');
    const translatedLyrics = document.getElementById('translated-lyrics');

    const heartPath = document.getElementById('heart-path');
    const gradientStop1 = document.querySelector('.gradient-stop1');
    const gradientStop2 = document.querySelector('.gradient-stop2');
    const invitation = document.getElementById('invitation');

    var heartClicked = false; // Flag to track if the heart has been clicked

    heartPath.addEventListener('click', function() {
        heartClicked = true; // Set the flag to true when the heart is clicked
        
        // Start the pulse animation by adding it to the container
        document.getElementById('heart-container').classList.add('pulse');
    
        // Start the gradient animation
        animateGradient();
    
        // Hide the text under the heart by changing visibility
        var heartText = document.querySelector('#heart-container p');
        if (heartText) {
            heartText.style.visibility = 'hidden';
        }
    
        // Reveal the invitation after a delay
        setTimeout(function() {
            invitation.classList.remove('hidden');
        }, 1000); // Adjust timing as needed
    });

    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click', function() {
        // Play the music or any other action you need to start
        music.play();

        // Hide the start button
        startButton.style.display = 'none';

        // You can also initiate other actions here, like starting animations or displaying other elements
    });


    function animateGradient() {
        // Apply the gradient-animate class to both gradient stops
        gradientStop1.classList.add('gradient-animate');
        gradientStop2.classList.add('gradient-animate');
    }

    // Find the buttons by their IDs
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    

    const lyrics = [
        { start: 0, end: 4, original: "Привет", translated: "Я хочу тебе показать кое что," },
        { start: 4, end: 8, original: "Дослушай до конца.", translated: "Не вдавайся в подробности перевода. Я это скорее добавил для удобства." },
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
        { start: 182, end: 202, original: "----", translated: "----" },
        { start: 203, end: 205, original: "Is it really you?", translated: "Это правда ты?" },
        { start: 206, end: 210, original: "Let's search the sky..", translated: "Давай исследуем небо.." },
        { start: 211, end: 213, original: "..for a while", translated: "..хоть ненадолго" },
        { start: 214, end: 217, original: "You and I", translated: "Ты и я" },
        { start: 218, end: 223, original: "Collide like two stars.. ", translated: "Столкнемся, как две звезды.." },
        { start: 224, end: 226, original: "..for a while", translated: "..хоть ненадолго " },
        { start: 227, end: 232, original: "You and I", translated: "Ты и я" },
        { start: 233, end: 300, original: "Что ж, теперь я хочу тебя кое о чем попросить..", translated: "" }
    ];


    


    music.volume = 0.5; // Adjust this value between 0.0 and 1.0 as needed

    // Start playing music on load
    music.play();


        // Define the loop start and end points in seconds
        var loopStart = 263;
        var loopEnd = 287;


                // Initially hide the heart and invitation
        document.getElementById('heart-container').classList.add('hidden');
        invitation.classList.add('hidden');

        // Adjusted music 'timeupdate' event listener
        music.addEventListener('timeupdate', function() {
            var currentTime = music.currentTime;
            if (currentTime >= loopStart && currentTime <= loopEnd) {
                if (!heartClicked) { // Show the heart only if it hasn't been clicked
                    document.getElementById('heart-container').classList.remove('hidden');
                }
            } else {
                // Reset state when outside the loop
                if (!heartClicked) { // Reset only if the heart hasn't been clicked
                    document.getElementById('heart-container').classList.add('hidden');
                    invitation.classList.add('hidden');
                    document.getElementById('heart-container').classList.remove('pulse');
                    gradientStop1.classList.remove('gradient-animate');
                    gradientStop2.classList.remove('gradient-animate');
                    gradientStop1.setAttribute('stop-color', '#808080');
                    gradientStop2.setAttribute('stop-color', '#808080');

                    // Reset the text visibility
                    var heartText = document.querySelector('#heart-container p');
                    if (heartText) {
                        heartText.style.visibility = 'visible';
                    }
                }
            }
        });
    
        // When the music is playing, check its current time
        music.addEventListener('timeupdate', function() {
            if (music.currentTime >= loopEnd) {
                music.currentTime = loopStart; // Reset to loop start
                music.play(); // Continue playing
        
                document.getElementById('heart-container').classList.remove('hidden');
            }
        });
        
    

    // Function to update lyrics
    function updateLyrics(time) {
        const segment = lyrics.find(lyric => time >= lyric.start && time < lyric.end);
        if (segment && originalLyrics.innerText !== segment.original) {
            // Remove the animation class
            originalLyrics.classList.remove('animate-lyrics');
            translatedLyrics.classList.remove('animate-lyrics');
    
            // Force reflow to ensure the removal of the class is processed
            void originalLyrics.offsetWidth;
            void translatedLyrics.offsetWidth;
    
            // Update the lyrics text
            originalLyrics.innerText = segment.original;
            translatedLyrics.innerText = segment.translated;
    
            // Re-add the animation class
            originalLyrics.classList.add('animate-lyrics');
            translatedLyrics.classList.add('animate-lyrics');
        }
    }
    
    

    // Check for the end of the song to display the invitation
    music.addEventListener('ended', function() {
        invitation.classList.remove('hidden');
    });

    // Update lyrics in real-time
    music.addEventListener('timeupdate', function() {
        updateLyrics(music.currentTime);
    });


    
    yesBtn.addEventListener('click', function() {
        clearScreen();
        // Show the "Yes" response
        document.getElementById('yes-response').classList.remove('hidden');
        // Play the "Yes" response video with sound
        var yesVideo = document.getElementById('yes-bg-video');
        yesVideo.play();
        yesVideo.volume = 1; // Ensure the volume is up
    });

    noBtn.addEventListener('click', function() {
        clearScreen();
        // Show the "No" response
        document.getElementById('no-response').classList.remove('hidden');
        // Play the "No" response video with sound
        var noVideo = document.getElementById('no-bg-video');
        noVideo.play();
        noVideo.volume = 1; // Ensure the volume is up
    });
    
    function clearScreen() {
        // Hide elements individually instead of hiding the entire body
        document.getElementById('bg-video').style.display = 'none';
        document.getElementById('heart-container').style.display = 'none';
        document.getElementById('invitation').style.display = 'none';
        // Add any other elements you wish to hide
    }
    
    

    // Add event listeners for your buttons here
});


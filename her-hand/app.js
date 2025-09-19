let audio, buzzing = false, canFade = false;
        
        window.onload = () => {
            buzzing = true;
            buzzClock();
        };
        
        function buzzClock() {
            if (!buzzing) return;
            document.getElementById('clock').classList.toggle('flash');
            // REMINDER ADD buzz sound file here: new Audio('buzz.mp3').play();
            setTimeout(buzzClock, 500);
        }
        
        // Need to click clock to stop buzz and show second sentence
        document.getElementById('clock').onclick = () => {
            buzzing = false;
            document.getElementById('clock').style.display = 'none';
            document.getElementById('sentence2').style.display = 'inline';
            setTimeout(() => canFade = true, 5000);
        };
        document.onmousemove = () => {
            if (canFade) {
                document.getElementById('story').classList.add('fade');
                canFade = false;
            }
        };
        
        // Restart motion
        document.onclick = (e) => {
            if (e.target.id !== 'clock') {
                location.reload();
            }
        };

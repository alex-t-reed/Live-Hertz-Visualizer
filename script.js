async function startAudio() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioCtx.createAnalyser();
        const source = audioCtx.createMediaStreamSource(stream);
        const data = new Uint8Array(analyser.frequencyBinCount);
        source.connect(analyser);

        function getDominantFrequency() {
            analyser.getByteFrequencyData(data);
            let maxIndex = 0;
            for (let i = 1; i < data.length; i++) {
                if (data[i] > data[maxIndex]) maxIndex = i;
            }
            const nyquist = audioCtx.sampleRate / 2;
            const freq = Math.round(maxIndex * nyquist / data.length);
            return freq;
        }

        // Only map frequencies in visible range (approx. 20 Hz – 20 kHz) and colorable segment
        function hertzToColor(hz) {
            if (hz < 100 || hz > 1200) return null; // adjust range as needed
            let value = (hz % 700) / 700;
            let hue = value * 360;
            return `hsl(${hue}, 100%, 50%)`;
        }

        function updateDisplay() {
            const freq = getDominantFrequency();
            document.getElementById('frequency').textContent = `Frequency: ${freq} Hz`;

            const color = hertzToColor(freq);
            const box = document.getElementById('colorBox');
            if (color) {
                box.style.backgroundColor = color;
                box.style.visibility = 'visible';
            } else {
                box.style.visibility = 'hidden'; // hide color box for non-colorable frequencies
            }

            requestAnimationFrame(updateDisplay);
        }

        updateDisplay();
    } catch (err) {
        alert('Microphone access is required to visualize audio.');
        console.error(err);
    }
}

startAudio();

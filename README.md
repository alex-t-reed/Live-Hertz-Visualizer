# Live Hertz Visualizer

A JavaScript browser experiment that estimates the dominant frequency of microphone input and maps it to a changing color display. Built to explore sound, perception, and interactive visualization following my Biopsychology studies at UCSB.

[Open the demo](https://musiccolors.netlify.app)

## How it works

The Web Audio API processes microphone input, identifies a strong frequency component, and updates the frequency readout and color visualization. The color mapping is an interface choice, not a physical equivalence between sound and visible light.

## Run locally

From this repository's directory:

```bash
python3 -m http.server 8000
```

Open `http://localhost:8000` in a browser supporting the Web Audio API. Allow microphone access when you want to test, then hum, speak, or play a tone. Microphone access generally requires HTTPS or localhost.

## Files

- `index.html`: layout and styling
- `script.js`: microphone setup, frequency analysis, and visualization
- `favicon.png`: browser icon

## Scope and privacy

The app processes audio in the browser; its source does not implement audio uploads or saved recordings. Frequency estimates can be affected by noise, harmonics, and multiple simultaneous sounds. This is a learning experiment, not a calibrated tuner or diagnostic instrument.

## About and contact

Created by [Alex Reed](https://www.linkedin.com/in/alextreed/). Explore my [portfolio](https://alex-t-reed.github.io/) for project context and career interests. Professional inquiries are welcome through LinkedIn.

## What I learned

I practiced handling browser microphone permissions, processing audio through the Web Audio API, and updating a visual interface in real time. The project helped connect my interest in perception with JavaScript and showed why noisy inputs need careful interpretation.

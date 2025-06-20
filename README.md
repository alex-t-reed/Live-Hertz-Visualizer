# 🎧 Live Audio Hertz Visualizer

Created by [Alex Reed Aparicio](https://www.linkedin.com/in/alextreed/)

---

## 📖 Overview

**Live Audio Hertz Visualizer** is a real-time web application that listens to audio input from your microphone, calculates the dominant sound frequency (in Hertz), and dynamically visualizes it through color. When the frequency falls within a human-audible and color-mappable range, the app displays a glowing circle that changes color to reflect the pitch being heard. Frequencies outside this range are still shown numerically, but the color display is hidden — giving you insight without visual noise.

This project was designed to bridge science, perception, and code — showing how we can **see sound** and **feel data**. It uses the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) to analyze audio and blends auditory and visual cues in a minimalist interface.

---

## 🧠 Why I Built This

As a **Biopsychology graduate from UC Santa Barbara** and current **Computer Science student at Santa Rosa Junior College**, I’ve always been fascinated by the interplay between human perception, sound, and real-time systems. Programming since age 12, I’ve sought ways to make technology not just functional, but expressive.

This project is a natural blend of:
- My academic background in neuroscience and memory
- My technical skills in software engineering and audio processing
- My curiosity about how we perceive **frequency**, **pattern**, and **color**

This app acts as a tiny, real-time **perceptual experiment** — a modern tool to visualize what our brain constantly processes.

> Want to know more about the science behind audio frequency analysis?  
> See [Time–frequency analysis for music signals](https://en.wikipedia.org/wiki/Time%E2%80%93frequency_analysis_for_music_signals#:~:text=All%20musical%20sounds%20have%20their,multiples%20of%20the%20fundamental%20frequency.)

---

## ⚙️ How It Works

1. The app requests permission to access your **microphone**.
2. Using the **Web Audio API**, it processes the incoming audio signal in real-time.
3. It computes the **dominant frequency** (the strongest tone in the signal).
4. If that frequency falls within a pre-defined visible range (~100–1200 Hz), it:
   - Converts the frequency into a **color** using the **HSL color model**
   - Updates a circular UI element with that color
5. If the frequency is outside this range, only the numeric frequency is shown (no color display).

---

## 💻 Tech Stack

- **HTML5 / CSS3** – Responsive, mobile-friendly layout
- **JavaScript (ES6)** – Core audio processing and DOM updates
- **Web Audio API** – Real-time frequency analysis from microphone input

---

## 📁 Project Files

- `index.html` – Contains SEO metadata, layout, and styling
- `script.js` – The engine: handles microphone input, frequency detection, and color logic
- `favicon.png` – Optional custom favicon for browser tab
- `README.md` – This documentation

---

## 🚀 Getting Started

1. **Download** or **clone** this repository
2. Open `index.html` in any modern browser (Chrome, Firefox, Edge)
3. **Allow microphone access** when prompted
4. Speak, hum, or play a sound — and watch the frequency display respond in real time

---

## 🧪 Features

- 🎤 Real-time microphone input
- 🎚️ Displays the dominant frequency in Hertz (Hz)
- 🌈 Color visualization for sound between 100–1200 Hz
- 🛑 Frequencies outside that range are still shown numerically, but not colored
- 🧠 Completely browser-based: no installation, no data storage, no server required

---

## 🌐 Requirements

- A modern web browser that supports the Web Audio API
- A functioning microphone

---

## 🔒 Privacy Note

This app does **not** record, upload, or store any audio.  
All processing happens **locally** in your browser in real time. Your voice and audio never leave your device.

---

## 👤 Author

**Alex Reed Aparicio**  
- [LinkedIn Profile](https://www.linkedin.com/in/alextreed/)  
- [Time–Frequency Analysis (Wikipedia)](https://en.wikipedia.org/wiki/Time%E2%80%93frequency_analysis_for_music_signals#:~:text=All%20musical%20sounds%20have%20their,multiples%20of%20the%20fundamental%20frequency.)

---

## 📫 Contributing

This is an open learning and creativity project.  
Feel free to fork, modify, or expand it into something even more powerful!


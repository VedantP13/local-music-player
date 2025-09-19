# Musiqua - Liquid Glass Music Player

## 🎵 Overview

**Musiqua** is a modern, offline-first music player featuring a stunning liquid glass interface design.   
This web-based application allows loading local music collections and offers a premium listening experience with beautiful visual effects and comprehensive playback controls.   
Includes a fullscreen player with gesture controls and beat‑reactive visuals for an immersive experience. 

## ✨ Key Features

### 🎨 Visual Design

- Liquid Glass Interface: Animated liquid background and glassmorphism effects for an aesthetic look. 
- Responsive Design: Optimized for all screen sizes and devices. 
- Modern Typography: Uses the Inter font family for clean readability. 
- Animated Elements: Smooth transitions & marquee animations for long text. 
- Album‑art adaptive visuals: blurred background and playlist glow derived from cover colors. 
- Beat‑reactive liquid background powered by the Web Audio API for subtle, dynamic effects. 

### 🎧 Audio Playback

- Local Folder Loading: Browse and load entire music folders from your device. 
- Metadata Extraction: Automatic extraction of song info (title, artist, album). 
- Album Artwork Display: Embedded album covers or placeholder graphics. 
- High-Quality Playback: Supports various audio formats for quality sound. 
- Expanded format support: MP3, WAV, OGG, FLAC, and M4A are recognized. 
- Rich Media Session metadata for lock screen/system controls with artwork and track info. 
- Background playback stability improvements using a silent keep‑alive stream on mobile. 

### 🎛️ Playback Controls

- Standard Controls: Play, pause, next, previous track. 
- Progress Control: Interactive progress bar for track seek. 
- Volume Control: Adjustable slider plus mute functionality. 
- Shuffle Mode: Randomize playback order. 
- Repeat Mode: Loop single tracks or playlists. 
- Keyboard Shortcuts: Navigate playback quickly. 
- Fullscreen Player Mode: tap album art to enter; swipe left/right to skip, swipe down to close. 
- Keyboard shortcuts details: Space (play/pause), Left/Right (prev/next), M (mute). 
- System media keys supported via Media Session action handlers. 
- Haptic feedback on key actions for tactile responsiveness on supported devices. 

### 📝 Playlist Management

- Dynamic Playlist: Auto-generated from loaded folder. 
- Drag and Drop: Reorder tracks by dragging playlist items. 
- Edit Mode: Remove unwanted tracks from session. 
- Track Information: Shows song title, artist and duration. 
- Active track highlighter with auto-centering and a live now‑playing indicator. 
- Touch drag‑and‑drop reordering and per‑item remove controls in Edit Mode. 

### 📱 Progressive Web App (PWA)

- Offline Capability: Works without internet after initial load. 
- App-like Experience: Installable as standalone app. 
- Theme Integration: Custom theme colors and manifest. 
- Service worker registration for offline caching and resilient background playback. 

### 🔧 Interactive Features

- Touch Support: Full gesture and touch support. 
- Visual Feedback: Hover effects and smooth animations. 
- Auto-scrolling Text: Long titles scroll for visibility. 
- Session Persistence: Maintains playback state in browser session. 
- Ripple and wobble button animations for delightful micro‑interactions. 
- Swipe gestures on album art and fullscreen UI for quick navigation. 

## 🚀 Technical Specifications

- **Frontend Technologies**: HTML5, CSS3 (glassmorphism, responsive), Vanilla JavaScript. 
- **Web APIs**: File System Access, Media Session, AudioContext. 
- **External Dependencies**: jsmediatags for metadata, Google Fonts for typography. 
- **Browser Compatibility**: Works on modern browsers with File System Access API. 
- Web Audio API AnalyserNode drives real‑time, beat‑reactive visual effects. 
- Canvas color sampling from album art powers adaptive background/glow styling. 
- Media Session action handlers (play, pause, previous, next) with dynamic metadata updates. 
- Fullscreen UI clones controls and syncs state across main and fullscreen views. 
- Supported formats include mp3, wav, ogg, flac, and m4a at load time. 

## 📄 Download & Installation

### 🌐 Try It Live

**Live Demo:** [https://vedantp13.github.io/Musiqua-Liquid-Glass-Music-Player/](https://vedantp13.github.io/Musiqua-Liquid-Glass-Music-Player/) 

Experience Musiqua directly in your browser without any downloads required! 

### 📱 Mobile PWA Installation

**For Mobile Devices:** 
1. Visit the live demo link on your mobile browser 
2. Look for the "Add to Home Screen" or "Install App" prompt 
3. Tap "Add" or "Install" to install Musiqua as a native-like app 
4. Access from your home screen like any other app - works offline! 

**PWA Benefits:** 
- Works offline after first visit 
- Native app-like experience 
- Home screen installation 
- Full-screen immersive mode 
- Background audio playback 
- System media controls integration 

### 💻 Desktop Installation

**For Desktop/Laptop:** 
1. Visit [https://vedantp13.github.io/Musiqua-Liquid-Glass-Music-Player/](https://vedantp13.github.io/Musiqua-Liquid-Glass-Music-Player/) in Chrome, Edge, or Safari 
2. Click the install button (⬇️) in your browser's address bar 
3. Choose "Install" when prompted 
4. Launch from your applications folder or desktop 

## 🎯 Use Cases

- Organize and play personal music libraries. 
- Offline listening where internet is limited. 
- Privacy-focused: no data leaves your device. 
- Visual interface suitable for presentations or parties. 

**Get started now:** [Launch Musiqua](https://vedantp13.github.io/Musiqua-Liquid-Glass-Music-Player/) 🎵 

# RRTS

**RRTS** (Real-Time Strategy) is a game or simulation that involves real-time resource management, strategic planning, and tactical gameplay. This project serves as a foundation for a real-time strategy game, focusing on building mechanics, combat systems, and resource allocation.

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/) – JavaScript runtime
- [Express.js](https://expressjs.com/) – Web framework for Node.js
- [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) – For real-time communication
- [Canvas/HTML5](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) – For rendering game graphics

## 🚀 Getting Started

### 📦 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- npm (Node Package Manager)

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MateuszKar2/RRTS.git
   cd RRTS
   
2. **Install dependencies**

  npm install

3. **Start the game server**

  npm start
  
4.**Open the game in your browser Navigate to http://localhost:3000 to play.**

## 📁 Project Structure

- `RRTS/`
  - `node_modules/` – installed dependencies
  - `public/` – static files (e.g., images, sounds)
  - `src/` – source code for game logic
    - `game.js` – game mechanics and rules
    - `player.js` – player-related functions
    - `enemy.js` – enemy behavior and AI
  - `server.js` – main Express server file
  - `package.json` – project metadata and dependencies
  - `README.md` – project documentation

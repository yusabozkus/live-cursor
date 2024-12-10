# Real-time Cursor Tracking App

## Project Overview

This project is a real-time application where users can connect, see each other's cursor movements, and interact with a shared space. The application uses **Vite** for the frontend and **Node.js** with **WebSocket** for the backend. It utilizes **UUID** for unique user identification and **React** for the frontend.

### Key Features:
1. **Real-time User Interaction**: Users can see each other’s cursor movements in real-time.
2. **WebSocket Connection**: Utilizes **WebSocket** for real-time bi-directional communication between the server and clients.
3. **Unique User Identification**: Each user is assigned a unique \`uuid\`, and their cursor position is tracked.
4. **Frontend**: Built with **React** and **Vite** for fast development and hot module replacement.
5. **Backend**: **Node.js** and **WebSocket** handle multiple connections and broadcast user states.

## Folder Structure

\`\`\`
.
├── client/                   # Frontend React Application
│   ├── src/
│   │   ├── components/       # Shared components (e.g., Cursor)
│   │   │   └── Cursor.jsx    # Component to display user cursors
│   │   ├── hooks/            # Custom hooks (e.g., useCursor)
│   │   │   └── useCursor.jsx # Hook for cursor tracking
│   │   ├── pages/            # React Pages (Login, Home)
│   │   │   ├── Login.tsx     # Login page for user authentication
│   │   │   └── Home.tsx      # Home page displaying user cursors
│   │   ├── App.tsx           # Main app component
│   │   └── index.tsx         # Entry point
│   ├── package.json          # Vite + React dependencies
│   └── vite.config.js        # Vite configuration
├── server/                   # Backend WebSocket server
│   ├── index.js              # WebSocket server implementation
│   ├── package.json          # Node.js dependencies
│   └── package-lock.json     # Node.js package lock file
└── README.md                 # Project documentation
\`\`\`

## Detailed Description:

- **Frontend (Client)**: 
   - Users log in via a \`Login\` page where they enter a \`username\`, which is then paired with a unique \`uuid\`.
   - The \`Home\` page displays real-time cursor positions of other users using a WebSocket connection.
   - The **React** app communicates with the server over **WebSocket** to send and receive cursor positions, and updates the screen accordingly.

- **Backend (Server)**:
   - The **Node.js** server uses **WebSocket** to handle multiple user connections and broadcast user cursor movements.
   - Each user’s state (cursor position) is stored and updated on the server. Upon receiving new data from a user, the server broadcasts the updated state to all connected clients.

## Client-Side Details (React/Vite)

1. **Vite** is used to bundle the React app for fast development. It ensures a quick build process and supports hot module replacement during development.
2. **React** handles the UI and manages state with hooks like \`useState\` and \`useEffect\`.
3. The **WebSocket** connection is set up via the \`useWebSocket\` hook, sending and receiving real-time messages related to user cursor positions.
4. **Lodash's throttle** function is used to limit the frequency of sending cursor position updates, optimizing performance.
5. **Custom hooks** like \`useCursor\` are used for managing cursor state and behavior.

## Server-Side Details (Node.js/WebSocket)

1. **WebSocketServer** is used to handle real-time WebSocket connections. When a client connects, the server stores their connection and user data.
2. The server broadcasts updates to all connected clients, ensuring that each user sees the updated positions of others.
3. The server also handles client disconnects and cleans up connections.

## How to Run the Project

### 1. Backend (Server) Setup

- Navigate to the \`server/\` directory:
  \`\`\`bash
  cd server
  \`\`\`
- Install dependencies:
  \`\`\`bash
  npm install
  \`\`\`
- Start the server:
  \`\`\`bash
  node index.js
  \`\`\`
  The WebSocket server will run on \`ws://localhost:8000\`.

### 2. Frontend (Client) Setup

- Navigate to the \`client/\` directory:
  \`\`\`bash
  cd client
  \`\`\`
- Install dependencies:
  \`\`\`bash
  npm install
  \`\`\`
- Start the development server:
  \`\`\`bash
  npm run dev
  \`\`\`
  The frontend will be available at \`http://localhost:3000\`.

## Usage

1. Open two or more browser tabs and visit the frontend (\`http://localhost:3000\`).
2. Each tab should prompt you to enter a \`username\`.
3. Once you enter a username and submit, you should see the \`Home\` page with your cursor position being tracked.
4. As you move the cursor in one tab, it should appear in real-time on the other tabs.

## Tech Stack

- **Frontend**: 
  - **React**: JavaScript library for building user interfaces.
  - **Vite**: Build tool for frontend applications.
  - **WebSocket**: For real-time communication between the server and the client.
  
- **Backend**:
  - **Node.js**: JavaScript runtime for building the server.
  - **WebSocket**: Real-time communication protocol.

## Potential Improvements

- **Authentication**: Implement proper authentication for users (e.g., login system with credentials).
- **Security**: Add security layers like validation and sanitization for WebSocket messages.
- **Scalability**: Use a more scalable WebSocket solution, such as a cluster of WebSocket servers with a load balancer.
- **UI/UX**: Enhance the UI with more interactive features and animations.

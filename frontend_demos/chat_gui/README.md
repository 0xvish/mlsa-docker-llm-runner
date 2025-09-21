# Chat GUI

Basic chat interface with LLM.

## Run

1. Navigate to this folder: `cd frontend_demos/chat_gui`
2. Start the container: `docker compose up -d`
3. Open your browser to `http://localhost:8083`
4. Type messages and chat with the AI.
5. To stop: `docker compose down`

## Configuration

The AI model can be changed by editing `../config.js` and updating `window.MODEL`. Restart the container after changes.

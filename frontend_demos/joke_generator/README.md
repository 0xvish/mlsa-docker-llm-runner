# Tech Joke Generator

Web UI for generating tech/programming jokes.

## Run

1. Navigate to this folder: `cd frontend_demos/joke_generator`
2. Start the container: `docker compose up -d`
3. Open your browser to `http://localhost:8082`
4. Click "Generate Joke" for short jokes.
5. To stop: `docker compose down`

## Configuration

The AI model can be changed by editing `../config.js` and updating `window.MODEL`. Restart the container after changes.

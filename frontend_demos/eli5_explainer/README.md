# ELI5 Explainer

Explain technical text simply.

## Run

1. Navigate to this folder: `cd frontend_demos/eli5_explainer`
2. Start the container: `docker compose up -d`
3. Open your browser to `http://localhost:8081`
4. Paste technical text and click Explain for simple explanations.
5. To stop: `docker compose down`

## Configuration

The AI model can be changed by editing `../config.js` and updating `window.MODEL`. Restart the container after changes.

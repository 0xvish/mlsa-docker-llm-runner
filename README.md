# MLSA Docker LLM Runner Demos

Minimal containerized demos for running AI models with Docker Model Runner.

## Prerequisites

- Docker Desktop with Model Runner enabled (enable TCP access on port 12434)
- To switch models, edit `window.MODEL` in `frontend_demos/config.js` and restart containers

## Quick Start

1. Clone the repo: `git clone <repo-url>`
2. Choose a demo, e.g., `cd frontend_demos/eli5_explainer`
3. Run: `docker compose up -d`
4. Open `http://localhost:8081` in browser
5. Interact and enjoy!

## Configuration

All frontend demos share a common model configuration in `frontend_demos/config.js`. To change the AI model used across all demos:

1. Edit `frontend_demos/config.js` and update `window.MODEL`
2. Restart any running demo containers: `docker compose down && docker compose up -d`

## All Demos with Run Steps

### Frontend Demos

#### ELI5 Explainer

Explain technical text simply.

1. `cd frontend_demos/eli5_explainer`
2. `docker compose up -d`
3. Open `http://localhost:8081`
4. Paste text, get explanation.
5. `docker compose down`

#### Tech Joke Generator

Generate tech/programming jokes.

1. `cd frontend_demos/joke_generator`
2. `docker compose up -d`
3. Open `http://localhost:8082`
4. Click button for jokes.
5. `docker compose down`

#### Chat GUI

Basic chat interface with LLM.

1. `cd frontend_demos/chat_gui`
2. `docker compose up -d`
3. Open `http://localhost:8083`
4. Type messages and chat with the AI.
5. `docker compose down`

Each demo has its own folder with `docker-compose.yml`. Run `docker compose up` in the folder, then follow the README inside.

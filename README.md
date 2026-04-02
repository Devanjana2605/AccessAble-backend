
---

# README for **AccessAble-server** backend repo

```markdown
# AccessAble Backend Server

This repository contains the **backend server** for the AccessAble project.

AccessAble is a web-based accessibility assistance platform developed to support wheelchair users through SOS alerts, volunteer assistance, staff notifications, and real-time coordination.

The backend handles server-side logic, API integration, and emergency communication services used by the frontend application.

## Project Overview

The AccessAble backend is responsible for:

- Handling SOS alert requests
- Sending emergency notifications
- Integrating with Twilio for SMS alerts
- Processing location data
- Supporting frontend-backend communication
- Managing secure environment variables and API services

## Features

### 1. SOS Alert Handling
- Receives SOS requests from the frontend
- Processes emergency contact details
- Sends alert messages with live location

### 2. Twilio Integration
- Sends SMS notifications during emergencies
- Supports live location links in messages
- Handles delivery flow and response status

### 3. API Communication
- Exposes endpoints for frontend interaction
- Processes request data from the AccessAble frontend
- Returns response status to the client side

### 4. Environment-Based Configuration
- Stores credentials securely using `.env`
- Protects sensitive information such as:
  - Twilio SID
  - Twilio Auth Token
  - Twilio Phone Number

## Tech Stack

- Node.js
- Express.js
- Twilio API
- dotenv
- CORS

## Repository Scope

This repository contains:
- Server setup
- API route handling
- SMS alert logic
- Environment configuration
- Integration code for emergency alert services

## Project Structure

Typical backend files include:

- `server.js`
- `package.json`
- `.env` (not uploaded to GitHub)
- Route handling files if used
- Helper/service logic files

## How to Run the Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/Devanjana2605/AccessAble-backend.git

⚡ Example Backend Responsibilities

The backend performs operations such as:

Receiving SOS emergency requests
Sending SMS alerts with live location links
Returning success or failure responses to the frontend
Acting as a bridge between the frontend and Twilio API
🔗 Frontend Connection

This backend is part of the full AccessAble system and works together with the frontend repository.

Frontend handles:
User interface
Dashboards
Request forms
Tracking pages
Chat and reviews
Backend handles:
SOS processing
SMS integration
API communication
🔒 Security Note
Do not upload your .env file to GitHub
Ensure .env is included in .gitignore
Keep API keys and credentials private
🚀 Future Improvements
Email-based SOS fallback
Improved logging and error handling
Cloud deployment (Render / Railway / AWS)
Authentication middleware
Structured API routing
Scalable backend architecture
👩‍💻 Author

Devanjana A

📌 Note

This repository represents the backend part of the AccessAble project.
For full functionality, it should be used together with the frontend repository.

# ACCESSABLE BACKEND SERVER

This repository contains the **backend server** for the AccessAble project.

AccessAble is a web-based accessibility assistance platform developed to support wheelchair users through SOS alerts, volunteer assistance, staff notifications, and real-time coordination.

The backend handles server-side logic, API integration, and emergency communication services used by the frontend application.

## PROJECT OVERVIEW

The AccessAble backend is responsible for:

- Handling SOS alert requests  
- Sending emergency notifications  
- Integrating with Twilio for SMS alerts  
- Processing location data  
- Supporting frontend-backend communication  
- Managing secure environment variables and API services  

## FEATURES

### 1. SOS ALERT HANDLING
- Receives SOS requests from the frontend  
- Processes emergency contact details  
- Sends alert messages with live location  

### 2. TWILIO INTEGRATION
- Sends SMS notifications during emergencies  
- Supports live location links in messages  
- Handles delivery flow and response status  

### 3. API COMMUNICATION
- Exposes endpoints for frontend interaction  
- Processes request data from the AccessAble frontend  
- Returns response status to the client side  

### 4. ENVIRONMENT-BASED CONFIGURATION
- Stores credentials securely using `.env`  
- Protects sensitive information such as:  
  - Twilio SID  
  - Twilio Auth Token  
  - Twilio Phone Number  

## TECH STACK

- Node.js  
- Express.js  
- Twilio API  
- dotenv  
- CORS  

## REPOSITORY SCOPE

This repository contains:

- Server setup  
- API route handling  
- SMS alert logic  
- Environment configuration  
- Integration code for emergency alert services  

## PROJECT STRUCTURE

Typical backend files include:

- `server.js`  
- `package.json`  
- `.env` (not uploaded to GitHub)  
- Route handling files  
- Helper/service logic files  

## HOW TO RUN THE BACKEND

1. Clone the repository:
```bash
git clone https://github.com/Devanjana2605/AccessAble-backend.git
```
2. Open the folder in VS Code
3. Install dependencies:
```bash
npm install
```
4. Create a .env file and add:
```bash
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number
```

# ShareNotes C2C Note Sharing Platform

Welcome to the C2C Note Sharing Platform, a web application built using the MERN (MongoDB, Express, React, Node.js) stack with Redux Toolkit for state management. This platform allows users to upload, download, review, and preview notes in various formats such as Word or PDF.

## Features

- User Registration and Authentication using express-session
- Note Upload with Multer for handling file uploads
- Note Download
- User Reviews for Notes
- Note Content Preview

## Prerequisites

- Node.js and npm installed
- MongoDB installed and running

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/therohit25/ShareNotes.git

   ```

2. Install server dependencies:

   ```bash
    cd server
    npm install

   ```

3. Install server dependencies:

   ```bash
    cd server
    npm install

   ```

4. Configure your environment variables:

Create a .env file in the server/data directory with name config.env and configure it with your MongoDB URI, session secret, and any other necessary environment variables.

5. Start the server:

   ```bash
    cd server
    npm start

   ```

6. Start the client:

   ```bash
    cd client
    npm start

   ```

Your C2C Note Sharing Platform should now be running locally at http://localhost:3000.

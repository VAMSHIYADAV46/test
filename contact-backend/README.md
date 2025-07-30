# Contact Form Backend

This is a Node.js backend for handling contact form submissions. It uses Express for the server and Nodemailer for sending emails.

## Features

- Receives form submissions from the frontend
- Sends notification emails to the portfolio owner
- Sends confirmation emails to users who submit the form
- Uses Gmail SMTP with App Password (for accounts with 2FA enabled)
- Environment variables for secure credential storage

## Setup

### Prerequisites

- Node.js installed on your machine
- Gmail account with 2FA enabled
- Gmail App Password (generated from your Google Account)

### Installation

1. Navigate to the backend directory:
   ```
   cd contact-backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables:
   - Rename `.env.example` to `.env` (if needed)
   - Update the `.env` file with your Gmail credentials:
     ```
     EMAIL_USER=your-gmail-address@gmail.com
     EMAIL_PASS=your-gmail-app-password
     PORT=3001
     ```

### How to Generate a Gmail App Password

1. Go to your Google Account settings: https://myaccount.google.com/
2. Select "Security" from the left menu
3. Under "Signing in to Google," select "2-Step Verification"
4. Scroll to the bottom and select "App passwords"
5. Select "Mail" as the app and "Other" as the device
6. Enter a name (e.g., "Portfolio Contact Form")
7. Click "Generate"
8. Copy the generated password and use it in your `.env` file

## Running the Server

### Development Mode

```
npm run dev
```

### Production Mode

```
npm start
```

## API Endpoints

### POST /api/contact

Receives contact form submissions.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "message": "Hello, I'd like to discuss a project."
}
```

**Response:**

```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### GET /api/health

Health check endpoint to verify the server is running.

**Response:**

```json
{
  "status": "ok"
}
```

## Testing

You can test the API using tools like Postman or curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message"}'
```
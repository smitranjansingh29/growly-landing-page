# Growly Landing Page - Full Stack Implementation

A modern landing page for Growly, an AI-powered ad creative generator, built with the MERN stack.

## Features

- Responsive design with Tailwind CSS
- Dark mode toggle
- Lead capture form with validation
- Backend API to save leads to MongoDB
- Email notifications for new leads
- Admin route to view submitted leads

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, Nodemailer

## Setup Instructions

### Backend Setup

1. Navigate to the `server` directory
2. Create a `.env` file based on `.env.example`
3. Install dependencies: `npm install`
4. Start the server: `npm run dev` (development) or `npm start` (production)

### Frontend Setup

1. Navigate to the `client` directory
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Environment Variables

### Backend

- `MONGODB_URI`: MongoDB connection string
- `EMAIL_USER`: Email address for sending notifications
- `EMAIL_PASS`: Email password or app password
- `EMAIL_TO`: Recipient email address for notifications
- `PORT`: Server port (default: 5000)

## API Endpoints

- `POST /api/leads`: Submit a new lead
- `GET /api/admin/leads`: View all submitted leads (admin)

## Hosted Links

- Frontend: https://growly-landing-page-frontend.vercel.app/
- Backend: [Render Deployment](https://your-render-service.onrender.com)

## Screenshots

![Desktop Light Mode](/screenshots/desktop-light.png)
![Mobile Dark Mode](/screenshots/mobile-dark.png)
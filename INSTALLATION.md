# AI Integration Course - Installation & Deployment Guide

This document provides step-by-step instructions for setting up, running, and deploying the AI Integration Course website.

## Local Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation Steps

1. **Extract the project files**
   ```bash
   unzip ai_integration_course_fixed.zip -d ai_integration_course
   cd ai_integration_course
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the `.env.example` file to `.env`
   - Fill in your Firebase configuration details
   ```bash
   cp .env.example .env
   # Edit .env with your Firebase credentials
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   The application will be available at http://localhost:3000

## Firebase Setup

1. **Create a Firebase project** at [firebase.google.com](https://firebase.google.com)

2. **Enable Authentication**
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication

3. **Set up Firestore Database**
   - Create a Firestore database
   - Start in test mode initially

4. **Update Firebase configuration**
   - Get your Firebase config from Project Settings > General > Your apps
   - Update the `.env` file with these values

## Deployment to Vercel

### Prerequisites
- A GitHub account
- A Vercel account (can sign up with GitHub)

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/aiintegrationcourse.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Log in to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: Create React App
     - Build Command: `npm run build`
     - Output Directory: `build`
     - Install Command: `npm install`

3. **Set Environment Variables in Vercel**
   - Add all variables from your `.env` file to Vercel's Environment Variables section
   - Make sure to add them to Production, Preview, and Development environments

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete

5. **Custom Domain Setup**
   - In Vercel project settings, go to Domains
   - Add your domain (e.g., aiintegrationcourse.com)
   - Follow Vercel's instructions for DNS configuration

## Troubleshooting

- **Build Errors**: Run `npm run build` locally to identify issues before deploying
- **Firebase Connection Issues**: Verify your Firebase configuration in the `.env` file
- **Deployment Failures**: Check Vercel build logs for specific errors

## Maintenance

- **Updates**: Pull latest changes, run `npm install` to update dependencies
- **Environment Variables**: Update both local `.env` and Vercel environment variables when changing configurations
- **Database Backups**: Regularly export Firestore data for backup

For additional help, refer to:
- [Create React App documentation](https://create-react-app.dev/)
- [Firebase documentation](https://firebase.google.com/docs)
- [Vercel documentation](https://vercel.com/docs)

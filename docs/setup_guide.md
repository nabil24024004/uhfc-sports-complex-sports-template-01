# Setup & Development Guide

## Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

## Installation
```bash
npm install
```

## Running Development Server
```bash
npm run dev
```
The application will be available at `http://localhost:3000`.

## Building for Production
```bash
npm run build
npm start
```

## Project Structure
```
/app
  layout.tsx       # Root layout
  page.tsx         # Main landing page
  globals.css      # Global styles
/components        # React components (Sections, UI elements)
/public            # Static assets (images, logos)
/docs              # Project documentation
```

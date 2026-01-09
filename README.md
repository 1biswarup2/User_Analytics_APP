# 📊 User Analytics Application

A simple full-stack user analytics application that tracks user interactions (page views and clicks) on a webpage and visualizes them via a dashboard with session journeys and heatmaps.

This project was built as part of a **Full Stack Engineer assignment**.

---

## 🚀 Features

- Client-side event tracking (`page_view`, `click`)
- Session-based analytics
- Backend APIs for event ingestion and aggregation
- MongoDB-based event storage
- React dashboard with:
  - Sessions list
  - User journey (event timeline)
  - Click heatmap visualization

---

## 🧱 Tech Stack

### Frontend
- React (Create React App)
- JavaScript (ES6)
- HTML / CSS

### Backend
- Flask (Python)
- Flask-CORS
- PyMongo

### Database
- MongoDB (Community Edition)

### Client-side Tracking
- Plain JavaScript (`tracking.js`)
- `localStorage` for session management

---

## 📁 Project Structure
user-analytics-app/
├── backend/ # Flask backend
├── frontend/ # React dashboard
├── tracker/ # Tracking script + demo page
└── README.md



## ⚙️ Setup Steps
### 1️⃣ Prerequisites

Ensure the following are installed on your system:

Python 3.9 or higher

Node.js (LTS version)

npm

MongoDB Community Server

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally: (Default port: 27017)

### 3️⃣ Backend Setup (Flask)
1.
cd backend
python -m venv venv
venv\Scripts\activate # Windows
pip install -r requirements.txt
python app.py

2. The backend server will start at: http://localhost:4000

### 4️⃣ Frontend Setup (React)
1.
cd frontend
npm install
npm start
2. The frontend dashboard will be available at: http://localhost:3000

### 5️⃣ Client-side Tracking Demo

1. Open tracker/demo.html directly in the browser

2. Interact with the page (page load and clicks)

3. Events are automatically sent to the backend

## 📊 Dashboard Usage
### Sessions View

1. Displays all sessions with total event counts

2. Clicking a session shows the ordered list of events (user journey)

### Heatmap View

1. Enter the exact page URL where clicks were recorded

2. Example for local demo page: C:/Users/<your-path>/tracker/demo.html

3. Click positions are visualized as red dots

## 🧠 Assumptions

1. The tracking script is embedded only on pages owned or controlled by the user

2. User sessions are browser-based and identified using localStorage

3. MongoDB is running locally and accessible without authentication

4. Heatmaps are generated only for pages where the tracking script is loaded

5. Exact page URLs are used for querying heatmap data

## ⚖️ Trade-offs

1. Authentication and authorization are not implemented (out of scope)

2. Heatmap visualization uses simple dot-based rendering instead of density gradients

3. URL matching for heatmaps is exact and string-based

4. No batching or retry mechanism for event ingestion

5. Session timeout handling is not implemented

6. The application prioritizes simplicity and clarity over production-scale optimizations

## 🔮 Possible Improvements

1. Density-based heatmap visualization

2. Session timeout and expiration handling

4. Dockerized setup for easier deployment

5. Cloud deployment (AWS / Render / Railway)

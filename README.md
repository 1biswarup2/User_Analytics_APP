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


---

## ⚙️ Setup Steps

### 1️⃣ Prerequisites

Ensure the following are installed on your system:

- Python 3.9 or higher
- Node.js (LTS version)
- npm
- MongoDB Community Server

---

### 2️⃣ Start MongoDB

Make sure MongoDB is running locally:

```bash
mongod


(Default port: 27017)

3️⃣ Backend Setup (Flask)
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python app.py


The backend server will start at:

http://localhost:4000

4️⃣ Frontend Setup (React)
cd frontend
npm install
npm start


The frontend dashboard will be available at:

http://localhost:3000

5️⃣ Client-side Tracking Demo

Open tracker/demo.html directly in the browser

Interact with the page (page load and clicks)

Events are automatically sent to the backend

📊 Dashboard Usage
Sessions View

Displays all sessions with total event counts

Clicking a session shows the ordered list of events (user journey)

Heatmap View

Enter the exact page URL where clicks were recorded

Example for local demo page:

file:///C:/Users/<your-path>/tracker/demo.html


Click positions are visualized as red dots

🧠 Assumptions

The tracking script is embedded only on pages owned or controlled by the user

User sessions are browser-based and identified using localStorage

MongoDB is running locally and accessible without authentication

Heatmaps are generated only for pages where the tracking script is loaded

Exact page URLs are used for querying heatmap data

⚖️ Trade-offs

Authentication and authorization are not implemented (out of scope)

Heatmap visualization uses simple dot-based rendering instead of density gradients

URL matching for heatmaps is exact and string-based

No batching or retry mechanism for event ingestion

Session timeout handling is not implemented

The application prioritizes simplicity and clarity over production-scale optimizations

🔮 Possible Improvements

Batch event ingestion for improved performance

URL normalization and dropdown-based heatmap selection

Density-based heatmap visualization

Session timeout and expiration handling

Dockerized setup for easier deployment

Cloud deployment (AWS / Render / Railway)

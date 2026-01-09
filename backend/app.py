from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient

from config import MONGO_URI, DB_NAME
from routes.events import events_bp, init_events_routes
from routes.sessions import sessions_bp, init_sessions_routes
from routes.heatmap import heatmap_bp, init_heatmap_routes

app = Flask(__name__)
CORS(app)

# MongoDB connection
client = MongoClient(MONGO_URI)
db = client[DB_NAME]

init_events_routes(db)
app.register_blueprint(events_bp)


# after db initialization
init_sessions_routes(db)
app.register_blueprint(sessions_bp)



# after db initialization
init_heatmap_routes(db)
app.register_blueprint(heatmap_bp)

@app.route("/")
def index():
    return {"message": "User Analytics API running"}

@app.route("/health", methods=["GET"])
def health():
    return {"status": "ok"}

if __name__ == "__main__":
    app.run(port=4000, debug=True)

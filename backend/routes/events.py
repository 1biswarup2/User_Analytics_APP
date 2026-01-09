from flask import Blueprint, request, jsonify
from models.event_model import build_event
from utils.validators import validate_event

events_bp = Blueprint("events", __name__)

def init_events_routes(db):
    events_collection = db.events

    @events_bp.route("/events", methods=["POST"])
    def receive_event():
        payload = request.json

        is_valid, error = validate_event(payload)
        if not is_valid:
            return jsonify({"error": error}), 400

        event = build_event(payload)
        events_collection.insert_one(event)

        return jsonify({"status": "ok"})

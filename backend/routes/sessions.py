from flask import Blueprint, jsonify

sessions_bp = Blueprint("sessions", __name__)

def init_sessions_routes(db):
    events_collection = db.events

    # GET /sessions → list sessions with event counts
    @sessions_bp.route("/sessions", methods=["GET"])
    def get_sessions():
        pipeline = [
            {
                "$group": {
                    "_id": "$session_id",
                    "event_count": {"$sum": 1}
                }
            },
            {
                "$sort": {"event_count": -1}
            }
        ]
        sessions = list(events_collection.aggregate(pipeline))
        return jsonify(sessions)

    # GET /sessions/<session_id> → ordered events (journey)
    @sessions_bp.route("/sessions/<session_id>", methods=["GET"])
    def get_session_events(session_id):
        events = list(
            events_collection.find(
                {"session_id": session_id},
                {"_id": 0}
            ).sort("timestamp", 1)
        )
        return jsonify(events)

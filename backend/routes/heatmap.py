from flask import Blueprint, request, jsonify

heatmap_bp = Blueprint("heatmap", __name__)

def init_heatmap_routes(db):
    events_collection = db.events

    @heatmap_bp.route("/heatmap", methods=["GET"])
    def get_heatmap():
        url = request.args.get("url")

        if not url:
            return jsonify({"error": "url query param required"}), 400

        clicks = list(
            events_collection.find(
                {"type": "click", "url": url},
                {"_id": 0, "x": 1, "y": 1}
            )
        )
        return jsonify(clicks)

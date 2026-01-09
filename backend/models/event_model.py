def build_event(payload):
    """
    Normalize and clean incoming event payload
    """
    return {
        "session_id": payload.get("session_id"),
        "type": payload.get("type"),
        "url": payload.get("url"),
        "timestamp": payload.get("timestamp"),
        "x": payload.get("x"),
        "y": payload.get("y")
    }

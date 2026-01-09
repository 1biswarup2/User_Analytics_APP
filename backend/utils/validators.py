REQUIRED_FIELDS = ["session_id", "type", "url", "timestamp"]

def validate_event(payload):
    for field in REQUIRED_FIELDS:
        if field not in payload:
            return False, f"Missing field: {field}"
    return True, None

import { useEffect, useState } from "react";
import { fetchSessionEvents } from "../api/analytics";

function SessionDetails({ sessionId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!sessionId) return;

    fetchSessionEvents(sessionId).then(setEvents);
  }, [sessionId]);

  if (!sessionId) {
    return <p>Select a session to view details</p>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Session: {sessionId}</h3>

      <ul>
        {events.map((e, i) => (
          <li key={i}>
            <strong>{e.type}</strong> —{" "}
            {new Date(e.timestamp).toLocaleTimeString()}
            {e.type === "click" && (
              <> (x: {e.x}, y: {e.y})</>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SessionDetails;

import { useEffect, useState } from "react";
import { fetchSessions } from "../api/analytics";
import SessionDetails from "../components/SessionDetails";
import Heatmap from "../components/Heatmap";

function Dashboard() {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    fetchSessions().then(setSessions);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>User Analytics Dashboard</h1>

      <h2>Sessions</h2>
      <ul>
        {sessions.map((s) => (
          <li
            key={s._id}
            style={{ cursor: "pointer" }}
            onClick={() => setSelectedSession(s._id)}
          >
            <strong>{s._id}</strong> — {s.event_count} events
          </li>
        ))}
      </ul>

      <SessionDetails sessionId={selectedSession} />

      <hr />

      <h2>Heatmap</h2>
      <input
        type="text"
        placeholder="Enter page URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "60%" }}
      />

      <Heatmap url={url} />
    </div>
  );
}

export default Dashboard;

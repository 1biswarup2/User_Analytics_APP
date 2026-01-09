const API_BASE = "http://localhost:4000";

export async function fetchSessions() {
  const res = await fetch(`${API_BASE}/sessions`);
  return res.json();
}

export async function fetchSessionEvents(sessionId) {
  const res = await fetch(`${API_BASE}/sessions/${sessionId}`);
  return res.json();
}

export async function fetchHeatmap(url) {
  const res = await fetch(
    `${API_BASE}/heatmap?url=${encodeURIComponent(url)}`
  );
  return res.json();
}

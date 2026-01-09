(function () {
  const API_URL = "http://localhost:4000/events";

  function getSessionId() {
    let sessionId = localStorage.getItem("session_id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("session_id", sessionId);
    }
    return sessionId;
  }

  const sessionId = getSessionId();

  function sendEvent(event) {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event)
    }).catch(console.error);
  }

  // Page view
  sendEvent({
    session_id: sessionId,
    type: "page_view",
    url: window.location.href,
    timestamp: Math.floor(Date.now() / 1000)
  });

  // Click events (normalized)
  document.addEventListener("click", (e) => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    sendEvent({
      session_id: sessionId,
      type: "click",
      url: window.location.href,
      timestamp: Date.now(),
      x: e.clientX / width,
      y: e.clientY / height
    });
  });
})();

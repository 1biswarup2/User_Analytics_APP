import { useEffect, useState } from "react";
import { fetchHeatmap } from "../api/analytics";

function Heatmap({ url }) {
  const [clicks, setClicks] = useState([]);

  useEffect(() => {
    if (!url) return;
    fetchHeatmap(url).then(setClicks);
  }, [url]);

  if (!url) {
    return <p>Enter a page URL to view heatmap</p>;
  }

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Heatmap for: {url}</h3>

      <div
        style={{
          position: "relative",
          width: "100%",
          height: 400,
          border: "1px solid #ccc"
        }}
      >
        {clicks.map((c, i) => (
            <div
                key={i}
                style={{
                position: "absolute",
                left: `${c.x * 100}%`,
                top: `${c.y * 100}%`,
                width: 8,
                height: 8,
                backgroundColor: "red",
                borderRadius: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0.6
                }}
            />
        ))}
      </div>
    </div>
  );
}

export default Heatmap;

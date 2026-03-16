import React from "react";

export function Toast({ message }) {
  if (!message) return null;
  return (
    <div style={{
      position: "fixed", bottom: 32, left: "50%", transform: "translateX(-50%)",
      background: "var(--text-primary)", color: "#fff", padding: "10px 20px",
      borderRadius: "var(--r-full)", fontSize: 13, zIndex: 100,
      animation: "toast-in 0.2s ease"
    }}>
      {message}
    </div>
  );
}
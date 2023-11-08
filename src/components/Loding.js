import React, { useEffect } from "react";

const Loading = () => {
  // Simulating a delay to showcase the loading state
  useEffect(() => {
    const timeout = setTimeout(() => {}, 5000); // Change the time according to your preference

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "24px",
      }}
    >
      Loading...
    </div>
  );
};

export default Loading;

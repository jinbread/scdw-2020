import React from "react";

export function Page({ children, center }) {
  return (
    <div className={center ? "container-center-page" : "container-full-page"}>
      <div style={{ marginTop: 40, marginBottom: 40, width: "100%" }}>
        {children}
      </div>
    </div>
  );
}

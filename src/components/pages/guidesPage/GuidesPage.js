import React from "react";

export const GuidesPage = ({ searchFlag }) => {
  return (
    <div
      className="body-container"
      style={{ marginTop: searchFlag ? "50px" : "" }}
    >
      <main className="main-body">
        <h1>Guides</h1>
        <p className="about">
          Whatever you're building, these guides are designed to get you
          productive as quickly as possible – using the latest Spring project
          releases and techniques as recommended by the{" "}
          <strong>Spring team</strong>.
        </p>
      </main>
    </div>
  );
};

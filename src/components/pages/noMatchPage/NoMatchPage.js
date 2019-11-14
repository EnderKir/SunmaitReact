import React from "react";

export const NoMatchPage = ({ searchFlag }) => {
  return (
    <div
      className="body-container"
      style={{ marginTop: searchFlag ? "50px" : "" }}
    >
      <main className="main-body">
        <h1>404</h1>
        <p className="about">
          <strong>Страница не найдена</strong>.
        </p>
      </main>
    </div>
  );
};

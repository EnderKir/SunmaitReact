import React from "react";

export const TrainingPage = ({ searchFlag }) => {
  return (
    <div
      className="body-container"
      style={{ marginTop: searchFlag ? "50px" : "" }}
    >
      <main className="main-body">
        <h1>Spring Training</h1>
        <p className="about">
          In conjunction with its partners, Pivotal offers training courses for
          developers, architects, system administrators, and technical managers.
          Learn more about the various Spring courses available using one of the
          links below:
          <br />
          <strong>Core Spring Training</strong>
          <br />
          <strong>Spring Boot Developer Training</strong>
          <br />
          <strong>Spring Cloud Data Flow Developer Training</strong>
          <br />
          <strong>Spring Cloud Developer Training</strong>
        </p>
      </main>
    </div>
  );
};

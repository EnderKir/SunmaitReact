import React from "react";

export const HomePage = ({ searchFlag }) => {
  return (
    <div
      className="body-container"
      style={{ marginTop: searchFlag ? "50px" : "" }}
    >
      <main className="main-body">
        <h1>Spring: the source for modern java</h1>
        <h2 color="green">Spring Boot</h2>
        <p className="about">
          Spring Boot is designed to get you up and running as quickly as
          possible, with minimal upfront configuration of Spring. Spring Boot
          takes an opinionated view of building production-ready applications..
        </p>
        <h2 color="green">Spring Cloud</h2>
        <p className="about">
          Built directly on Spring Boot's innovative approach to enterprise
          Java, Spring Cloud simplifies distributed, microservice-style
          architecture by implementing proven patterns to bring resilience,
          reliability, and coordination to your microservices.
        </p>
        <h2 color="green">Spring Cloud Data Flow</h2>
        <p className="about">
          Connect the Enterprise to the Internet of Anything—mobile devices,
          sensors, wearables, automobiles, and more. Spring Cloud Data Flow
          provides a unified service for creating composable data microservices
          that address streaming and ETL-based data processing patterns.
        </p>
      </main>
    </div>
  );
};

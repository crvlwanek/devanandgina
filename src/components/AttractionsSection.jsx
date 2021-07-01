import * as React from "react";

import data from "../data.js";

import { Card } from "./Card";

const styles = {
  link: {
    textDecoration: "none",
  },
  header: {
    color: "rgb(17, 17, 17)",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 300,
    boxShadow:
      "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
    fontSize: "3.75rem",
    margin: "0 auto 20px",
    width: "fit-content",
    borderRadius: "10px",
    background: "white",
    padding: "10px 20px",
  },
  cardHolder: {
    maxWidth: "1300px",
    margin: "auto",
    marginBottom: "30px",
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 330px)",
    alignItems: "center",
    justifyContent: "center",
  },
};

const TravelSection = () => {
  return (
    <section id="attractions" style={{ background: "var(--theme1)" }}>
      <a
        target="_blank"
        rel="noreferrer"
        style={styles.link}
        href={data.links.local_attractions}
      >
        <h1 style={styles.header}>Local Attractions</h1>
      </a>

      <div style={styles.cardHolder}>
        {data?.attractions?.map((item) => (
          <Card
            heading={item.heading}
            bodyText={item.description}
            buttonText="Website"
            image={item.image}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default TravelSection;

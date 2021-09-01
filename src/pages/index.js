import * as React from "react";
import Layout from "../layout/layout";
import "../styles/index.scss";

const headingAccentStyles = {
  color: "#555",
};

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 style={headingAccentStyles}>Abakus er best</h1>
    </Layout>
  );
};

export default IndexPage;

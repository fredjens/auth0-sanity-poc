import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import { useAuth0 } from "../hooks/auth0";

import useData from "../hooks/use-data";

const Home = props => {
  const { user: { token } = {} } = useAuth0();
  const { data } = useData(token);
  console.log("data", data);

  return (
    <Fragment>
      <Hero />
      <hr />
      <Content />
    </Fragment>
  );
};

export default Home;

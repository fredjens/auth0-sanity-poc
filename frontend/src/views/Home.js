import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import { useAuth0 } from "../react-auth0-spa";

import useData from "../hooks/use-data";

const Home = props => {
  const { user } = useAuth0();
  const { data } = useData(user.token);
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

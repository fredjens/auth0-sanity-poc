import React, { Fragment } from "react";

import Hero from "../components/Hero";
import Content from "../components/Content";
import { useAuth0 } from "../hooks/auth0";
import Highlight from "../components/Highlight";

import useData from "../hooks/use-data";

const Home = props => {
  const { user: { token } = {} } = useAuth0();
  const { data } = useData(token);

  return (
    <Fragment>
      <Hero />
      {data && (
        <Highlight>
          Sanity
          <br />
          {JSON.stringify(data, null, 2)}
        </Highlight>
      )}
      <hr />
      <Content />
    </Fragment>
  );
};

export default Home;

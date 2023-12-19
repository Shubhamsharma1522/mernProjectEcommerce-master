import React from "react";
import Helmet from "react-helmet";

const MetaData = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default MetaData;
 
// jis bhi page me component import krenge to us page ka title wahi rhega jo hm isme pass krenge
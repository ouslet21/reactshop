import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To M-Ouesleti",
  description: "Nous vendons les meilleurs produits à bas prix",
  keywords: "électronique, acheter de l'électronique, électroincs pas cher",
};

export default Meta;

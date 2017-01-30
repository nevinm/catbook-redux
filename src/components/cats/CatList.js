import React, { PropTypes, Component } from "react";

const CatList = ({ cats }) => {
  const cat = cats.map(cat => <li className="list-group-item" key={cat.id}>{cat.title}</li>);

  return (
    <ul className="list-group">
      {cat}
    </ul>
  );
};

CatList.propTypes = {
  cats: PropTypes.array,
};

export default CatList;

import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

const CatList = ({ cats }) => {
  const cat = cats.map(cat =>
    <Link  key={cat.id} to={'/cats/' + cat.id}>
      <li className="list-group-item">
        {cat.title}
      </li>
    </Link>
  );

  return (
    <ul className={styles['list-group']}>
      {cat}
    </ul>
  );
};

CatList.propTypes = {
  cats: PropTypes.array,
};

export default CatList;

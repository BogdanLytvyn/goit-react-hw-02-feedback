import React from 'react';
import PropTypes from 'prop-types';
import style from './section.module.css';

Section.defaultProps = {
  title: '',
};

export default function Section({ title, children }) {
  return (
    <section>
      {title && <h2 className={style.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

import React from 'react';
import { Link } from 'react-router';

import s from './Menu.css';

export default ({ links }) => (
  <nav className={s.wrapp}>
    <ul className={s.lists}>
      {links.map((link) => (
        <li className={s.list} key={link.link}>
          <Link
            to={link.link}
            className={s.link}
            onlyActiveOnIndex={true}
            activeClassName={s.linkActive}
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

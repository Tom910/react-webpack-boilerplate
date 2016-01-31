import React from 'react';
import s from './Header.css';
import { Menu } from '../';
import { menuLink } from '../../menu';

export default () => (
  <header className={s.head}>
    <Menu links={menuLink} />
  </header>
);

import React from 'react';
import s from './Footer.css';
import { Menu } from '../';
import { menuLink } from '../../menu';

export default () => (
  <footer className={s.footer}>
    <div className={s.logo}></div>
    <Menu links={menuLink} />
    <div></div>
  </footer>
);

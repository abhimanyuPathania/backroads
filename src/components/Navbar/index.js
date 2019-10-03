import React, { useState } from 'react';
import { FaAlignRight } from 'react-icons/fa';
import classnames from 'classnames';
import { Link } from 'gatsby';

import links from '../../constants/links';
import socialIcons from '../../constants/social-icons';
import logo from '../../images/logo.svg';
import styles from './styles.module.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const ulClassName = classnames(styles.navLinks, {
    [styles.showNav]: isNavOpen,
  });

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img src={logo} alt="backroads logo" />
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul className={ulClassName}>
          {links.map(item => (
            <li key={item.text}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

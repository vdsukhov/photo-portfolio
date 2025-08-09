import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-header">
      <h1 className="logo"><Link to="/">Photo Portfolio</Link></h1>
      <nav className="nav">
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contacts</Link>
      </nav>
    </header>
  );
}

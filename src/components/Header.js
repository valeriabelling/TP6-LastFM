import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="navbar navbar-center navbar-dark bg-dark">
            <Link to="/topartistas" className="btn btn-dark">Top Artistas</Link>
            <Link to="/toptracks" className="btn btn-dark">Top Tracks</Link>
            <Link to="/albums" className="btn btn-dark">Top Albums</Link>
        </nav>
    </header>
)

export default Header;
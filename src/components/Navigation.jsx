import { Link } from 'react-router-dom';
import './Navigation.css';

const links = [
  { key: 'work', label: 'WORK', to: '/' },
  { key: 'art', label: 'ART', to: '/art' },
  { key: 'about', label: 'ABOUT', to: '/about' },
];

export default function Navigation({ current }) {
  return (
    <div className="nav">
      <Link to="/" className="nav-logo text-black upper">
        Katie Lee
      </Link>
      <div className="nav-links">
        <div className="nav-links-text text-black upper">
          {links.map((link) =>
            link.key === current ? (
              <p key={link.key} className="nav-current" aria-current="page">
                {link.label}
              </p>
            ) : (
              <Link key={link.key} to={link.to}>
                {link.label}
              </Link>
            )
          )}
          <p className="nav-resume">RESUME</p>
        </div>
        <div className="nav-icons">
          <a
            className="nav-icon"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/images/nav-social-icons.svg" alt="" />
          </a>
          <a className="nav-icon" href="mailto:katielee157@gmail.com" aria-label="Email">
            <img src="/images/nav-linkedin.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

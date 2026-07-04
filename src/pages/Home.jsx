import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './Home.css';

const projects = [
  {
    key: 'duckweather',
    title: 'DUCKWEATHER',
    subtitle: 'creative weather app',
    image: '/images/thumb-duckweather.png',
    imageClass: 'contain',
    to: '/duckweather',
  },
  {
    key: 'regional-roots',
    title: 'REGIONAL ROOTS',
    subtitle: 'pollinator protection project',
    image: '/images/thumb-regional-roots.png',
  },
  {
    key: 'night-to-remember',
    title: 'A NIGHT TO REMEMBER',
    subtitle: 'alcohol awareness project',
    placeholder: true,
  },
  {
    key: 'caws',
    title: 'CAWS (Creative art works)',
    subtitle: 'character design',
    image: '/images/thumb-caws.png',
    to: '/caws',
  },
];

export default function Home() {
  return (
    <div className="page-scroll">
      <div className="page home-page">
        <Navigation current="work" />

        <div className="hero">
          <img src="/images/hero-dino.svg" alt="A small illustrated dinosaur" />
        </div>
        <button className="scroll-arrow" aria-label="Scroll down">
          <img src="/images/scroll-arrow.svg" alt="" />
        </button>

        <div className="work-header">
          <p className="text-black upper">
            WORK / <span className="text-black italic">PROJECTS</span>
          </p>
          <p className="text-black upper work-header-right">
            A <span className="text-black italic" style={{ color: '#736a68' }}>COLLECTION</span>{' '}
            OF MY WORK
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => {
            const CardTag = project.to ? Link : 'div';
            return (
              <CardTag
                key={project.key}
                to={project.to}
                className={`project-card${project.to ? ' project-card-link' : ''}`}
              >
                <div className={`project-thumb${project.placeholder ? ' placeholder' : ''}`}>
                  {project.image && (
                    <img
                      src={project.image}
                      alt=""
                      className={project.imageClass === 'contain' ? 'contain' : ''}
                    />
                  )}
                </div>
                <p className="project-title text-black upper">{project.title}</p>
                <p className="project-subtitle text-black upper">{project.subtitle}</p>
              </CardTag>
            );
          })}
        </div>

        <div className="home-divider" />
        <Footer style={{ left: 279, top: 1413 }} />
      </div>
    </div>
  );
}

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import './StubPage.css';

export default function About() {
  return (
    <div className="page-scroll">
      <div className="page stub-page">
        <Navigation current="about" />
        <div className="stub-content">
          <p className="text-black upper">coming soon</p>
        </div>
        <Footer style={{ left: 279, top: 700 }} />
      </div>
    </div>
  );
}

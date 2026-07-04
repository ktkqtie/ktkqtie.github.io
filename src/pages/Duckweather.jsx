import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';
import './Duckweather.css';

const DUCK_URL = 'https://ktkqtie.github.io/final_project/';

const sketches = [
  { src: 'dw-sketch-7', left: 586, top: 0, w: 202, h: 240 },
  { src: 'dw-sketch-1', left: 9, top: 41, w: 149, h: 202 },
  { src: 'dw-sketch-5', left: 368, top: 47, w: 209, h: 196 },
  { src: 'dw-sketch-4', left: 158, top: 72, w: 187, h: 146 },
  { src: 'dw-sketch-8', left: 466, top: 229, w: 210, h: 255 },
  { src: 'dw-sketch-9', left: 0, top: 240, w: 166, h: 258 },
  { src: 'dw-sketch-2', left: 656, top: 252, w: 162, h: 224 },
  { src: 'dw-sketch-6', left: 298, top: 264, w: 180, h: 227 },
  { src: 'dw-sketch-3', left: 157, top: 261, w: 150, h: 230 },
];

const colorDucks = [
  { src: 'dw-color-4', left: 584, top: 0, w: 191, h: 247 },
  { src: 'dw-color-1', left: 0, top: 18, w: 180, h: 250 },
  { src: 'dw-color-3', left: 386, top: 18, w: 191, h: 235, objectPosition: 'top' },
  { src: 'dw-color-2', left: 187, top: 21, w: 191, h: 247 },
];

const dwSteps = [
  { id: 'dw-sketching', label: 'initial process: sketching & concept' },
  { id: 'dw-color', label: 'adding color' },
  { id: 'dw-demo', label: 'demo' },
  { id: 'dw-progress', label: 'currently in progress' },
];

export default function Duckweather() {
  return (
    <div className="page-scroll">
      <div className="page dw-page">
        <Navigation current="work" />

        <div className="dw-container">
          <div className="dw-header-row">
            <div>
              <h1 className="text-black upper">DUCKWEATHER</h1>
              <p className="dw-subtitle text-black upper">creative weather app</p>
            </div>
            <span className="dw-wip-pill text-bold">WIP</span>
          </div>

          <div className="dw-hero">
            <img src="/images/dw-hero.png" alt="Duckweather mascot ducks illustration" />
          </div>

          <div className="dw-meta">
            <div className="dw-meta-col dw-meta-timeline">
              <p className="dw-meta-label label upper">timeline</p>
              <p className="dw-meta-value text-black upper">IN PROGRESS</p>
            </div>
            <div className="dw-meta-col dw-meta-tools">
              <p className="dw-meta-label label upper">tools</p>
              <p className="dw-meta-value text-black upper">procreate, figma, HTML, CSS</p>
            </div>
            <div className="dw-meta-col dw-meta-achievement">
              <p className="dw-meta-label label upper" aria-hidden="true">&nbsp;</p>
              <p className="dw-achievement text-black italic upper">Personal design project</p>
            </div>
          </div>

          <h2 className="dw-overview-heading label upper">overview</h2>

          <div className="dw-info-row">
            <div className="dw-info-box">
              <h3 className="dw-info-heading text-black italic upper">what is duckweather?</h3>
              <p className="text-bold italic">
                Duckweather is a creative web application that makes checking the forecast fun.
                Instead of standard weather icons, the interface features a dynamic cast of ducks
                whose outfits change based on the user's local weather conditions.
              </p>
              <a className="dw-cta text-bold upper" href={DUCK_URL} target="_blank" rel="noreferrer">
                duckweather
                <img src="/images/caws-link-arrow.svg" alt="" />
              </a>
            </div>
            <div className="dw-info-box">
              <h3 className="dw-info-heading text-black italic upper">my role</h3>
              <p className="text-bold italic">
                Conceptualized and illustrated the app's interface, character designs using
                Procreate. I also partnered closely with a software engineer to build the front-end
                interface, successfully organizing and handing off design assets to be implemented
                via HTML and CSS.
              </p>
            </div>
          </div>

          <TimelineSection heading="initial process: sketching & concept" steps={dwSteps} stepIndex={0}>
            <div className="dw-sketch-collage">
              {sketches.map((s) => (
                <img
                  key={s.src}
                  src={`/images/${s.src}.png`}
                  alt="Duck character concept sketch"
                  style={{ left: s.left, top: s.top, width: s.w, height: s.h }}
                />
              ))}
            </div>
            <p className="dw-copy text-bold italic">
              The conceptualization phase focused on designing a dynamic mascot that could visually
              communicate the forecast. Using Procreate, I sketched out multiple variations of the
              duck character, brainstorming specific outfits to correspond with different weather
              conditions. Exploring through these rough concepts helped ensure the character remained
              expressive and recognizable across different climate states before moving into final
              coloring.
            </p>
          </TimelineSection>

          <TimelineSection heading="adding color" steps={dwSteps} stepIndex={1}>
            <div className="dw-color-collage">
              {colorDucks.map((s) => (
                <img
                  key={s.src}
                  src={`/images/${s.src}.png`}
                  alt="Colored duck character for a weather state"
                  style={{
                    left: s.left,
                    top: s.top,
                    width: s.w,
                    height: s.h,
                    objectPosition: s.objectPosition || 'center',
                  }}
                />
              ))}
            </div>
            <p className="dw-copy text-bold italic">
              I brought the initial sketches to life using a vibrant, high contrast color palette.
              Each duck's outfit was fully rendered to distinctly represent different weather
              conditions, ensuring the illustrations were both expressive and easy to read on a
              screen. These finalized color variations served as the core visual assets for the
              front-end implementation.
            </p>
          </TimelineSection>

          <TimelineSection heading="demo" steps={dwSteps} stepIndex={2}>
            <div className="dw-demo">
              <img src="/images/dw-demo.png" alt="Duckweather app demo interface" />
            </div>
            <div className="dw-demo-footer">
              <p className="dw-copy dw-demo-caption text-bold italic">
                Here is a quick demo of duckweather!
              </p>
              <a className="dw-cta text-bold upper" href={DUCK_URL} target="_blank" rel="noreferrer">
                duckweather
                <img src="/images/caws-link-arrow.svg" alt="" />
              </a>
            </div>
          </TimelineSection>

          <TimelineSection heading="currently in progress!" steps={dwSteps} stepIndex={3} />

          <div className="dw-more-work">
            <h2 className="dw-more-heading text-black upper">more work :)</h2>
            <Link to="/art" className="dw-art-star" aria-label="See more art">
              <img src="/images/dw-art-star.svg" alt="" />
              <span className="text-black">art</span>
            </Link>
          </div>

          <div className="dw-related-grid">
            <Link to="/" className="dw-related-card">
              <div className="dw-related-thumb">
                <img src="/images/dw-regional-roots.png" alt="" />
              </div>
              <p className="dw-related-title text-black upper">REGIONAL ROOTS</p>
              <p className="dw-related-sub text-black upper">pollinator protection project</p>
            </Link>
            <Link to="/" className="dw-related-card">
              <div className="dw-related-thumb dw-related-placeholder" />
              <p className="dw-related-title text-black upper">A NIGHT TO REMEMBER</p>
              <p className="dw-related-sub text-black upper">alcohol awareness project</p>
            </Link>
          </div>

          <div className="dw-divider" />
        </div>

        <div className="dw-footer-wrap">
          <Footer variant="static" />
        </div>
      </div>
    </div>
  );
}

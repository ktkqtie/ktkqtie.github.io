import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import TimelineSection from '../components/TimelineSection';
import './Caws.css';

const CAWS_URL = 'https://www.creativeartworks.org/2023-character-design-program';

const cawsSteps = [
  { id: 'caws-sketching', label: 'initial process: sketching & concept' },
  { id: 'caws-landscape', label: 'the process: landscape & environment' },
  { id: 'caws-final', label: 'final delivery' },
];

export default function Caws() {
  return (
    <div className="page-scroll">
      <div className="page caws-page">
        <Navigation />

        <div className="caws-container">
          <div className="caws-header-row">
            <div>
              <h1 className="text-black upper">CAWS (Creative art works)</h1>
              <p className="caws-subtitle text-black upper">character design</p>
            </div>
            <a
              className="caws-cta-pill text-bold"
              href={CAWS_URL}
              target="_blank"
              rel="noreferrer"
            >
              CAWS
              <img src="/images/caws-link-arrow.svg" alt="" />
            </a>
          </div>

          <div className="caws-hero">
            <img src="/images/caws-hero.jpg" alt="AEON character design sheet" />
          </div>

          <div className="caws-meta-row">
            <div className="meta-item">
              <p className="label upper">timeline</p>
              <p className="meta-value text-black">feb - may 2023</p>
            </div>
            <div className="meta-item">
              <p className="label upper">tools</p>
              <p className="meta-value text-black">photoshop, illustrator, procreate</p>
            </div>
          </div>

          <div className="caws-achievement">
            <span className="v-line" />
            <div>
              <p className="label upper">achievement</p>
              <p className="achievement-value text-black italic upper">Finalist for best character design</p>
            </div>
          </div>

          <h2 className="overview-heading label upper">overview</h2>

          <div className="caws-info-row">
            <div className="info-box">
              <h3 className="info-box-heading text-black italic upper">what is caws?</h3>
              <p className="text-bold italic">
                Creative Art Works (CAWS) is a New York City-based nonprofit organization that
                empowers young people through visual and multimedia arts. By providing youth
                employment programs and creative internships, CAWS equips emerging artists with
                essential technical skills, confidence, and career opportunities.
              </p>
              <a className="info-box-cta text-bold upper" href={CAWS_URL} target="_blank" rel="noreferrer">
                visit caws here
                <img src="/images/caws-link-arrow.svg" alt="" />
              </a>
            </div>
            <div className="info-box">
              <h3 className="info-box-heading text-black italic upper">my role</h3>
              <p className="text-bold italic">
                As a Character Designer, I was tasked with conceptualizing and illustrating an
                original character from scratch. I developed the complete visual identity and
                backstory for my character using Photoshop, Illustrator, and Procreate. My final
                character sheet was evaluated by gaming industry professionals and recognized as a
                Finalist for Best Character Design in the 2023 showcase.
              </p>
            </div>
          </div>

          <TimelineSection heading="initial process: sketching & concept" steps={cawsSteps} stepIndex={0}>
            <div className="sketch-grid">
              <img className="sg-portrait" src="/images/caws-sketch3.png" alt="Pencil sketch of the character's face" />
              <img className="sg-photoshop" src="/images/caws-sketch2.png" alt="Digital sketch and color palette in Photoshop" />
              <img className="sg-poses" src="/images/caws-sketch5.png" alt="Pencil sketches of full-body poses" />
              <img className="sg-journal" src="/images/caws-sketch1.jpg" alt="Sketchbook journal page with character notes" />
              <img className="sg-final" src="/images/caws-sketch4.png" alt="Final colored character portrait" />
            </div>
            <p className="section-copy text-bold italic">
              The conceptualization phase started in my sketchbook, where I brainstormed my
              character's narrative and explored various poses and outfit ideas. This was done
              through traditional pencil drawings. Once her backstory and general aesthetic were
              established, I transitioned to digital sketching to refine her expressive features,
              test out her distinct color palette, and set a solid foundation before moving into
              final rendering.
            </p>
          </TimelineSection>

          <TimelineSection heading="the process: landscape & environment" steps={cawsSteps} stepIndex={1}>
            <div className="landscape-image">
              <img src="/images/caws-frame36.png" alt="Environment concept art" />
            </div>
            <div className="landscape-row">
              <img src="/images/caws-frame33.jpg" alt="Environment sketch detail" />
              <img src="/images/caws-frame34.jpg" alt="Environment sketch detail" />
              <img src="/images/caws-frame35.jpg" alt="Environment sketch detail" />
            </div>
            <p className="section-copy text-bold italic">
              Designing the landscape was a highly collaborative, world-building effort across our
              entire design cohort. Because we were building a shared universe, the environment had
              to logically accommodate the diverse living styles and narratives of everyone's unique
              characters. This required constant communication and adaptability&mdash;whenever fellow
              designers introduced a new architectural element or environmental shift, the rest of
              the team had to pivot and integrate those changes to ensure the world remained cohesive
              for all our characters to coexist.
            </p>
          </TimelineSection>

          <TimelineSection heading="final delivery" steps={cawsSteps} stepIndex={2}>
            <div className="final-image">
              <img src="/images/caws-final-delivery.jpg" alt="Final cohort illustration" />
            </div>
            <p className="section-copy text-bold italic">
              For the final delivery, we compiled our fully rendered designs into a massive cohort
              illustration. This collective piece concluded with a collaborative group illustration
              featuring every designer's original character. Integrating Aeon into this final shared
              space was incredibly rewarding and served as the ultimate visual payoff for months of
              careful planning, adapting, and world-building alongside my creative team.
            </p>
          </TimelineSection>

          <h2 className="more-work-heading text-black upper">more work :)</h2>
          <div className="caws-divider" />

          <div className="related-grid">
            <Link to="/duckweather" className="related-card">
              <div className="related-thumb">
                <img src="/images/thumb-duckweather.png" alt="" className="contain" />
              </div>
              <p className="project-title text-black upper">DUCKWEATHER</p>
              <p className="project-subtitle text-black upper">creative weather app</p>
            </Link>
            <Link to="/" className="related-card">
              <div className="related-thumb placeholder" />
              <p className="project-title text-black upper">BRAND DESIGN</p>
              <p className="project-subtitle text-black upper">pollinator protection project</p>
            </Link>
          </div>
        </div>

        <div className="caws-footer-wrap">
          <Footer variant="static" />
        </div>
      </div>
    </div>
  );
}

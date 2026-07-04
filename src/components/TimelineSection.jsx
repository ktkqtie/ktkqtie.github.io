import './TimelineSection.css';

export default function TimelineSection({ heading, children, steps, stepIndex }) {
  return (
    <section className="timeline-section" id={steps[stepIndex].id}>
      <div className="timeline-rail">
        {steps.map((step, i) => (
          <div className="timeline-rail-step" key={step.id}>
            <a
              href={`#${step.id}`}
              className={`timeline-dot-link${i === stepIndex ? ' active' : ''}`}
              aria-label={`Go to ${step.label}`}
              aria-current={i === stepIndex ? 'true' : undefined}
            >
              <span className="timeline-dot" />
            </a>
            {i < steps.length - 1 && <span className="timeline-line" />}
          </div>
        ))}
      </div>
      <div className="timeline-content">
        <p className="timeline-heading text-black italic upper">{heading}</p>
        {children}
      </div>
    </section>
  );
}

import './Footer.css';

export default function Footer({ style, variant = 'absolute' }) {
  return (
    <div className={`footer footer-${variant}`} style={style}>
      <p className="footer-name text-black upper">Katie Lee</p>
      <p className="footer-updated text-black upper">Last updated July, 2026</p>
      <div className="footer-email">
        <img src="/images/footer-mail-icon.svg" alt="" />
        <a href="mailto:katielee157@gmail.com" className="text-black upper">
          katielee157@gmail.com
        </a>
      </div>
    </div>
  );
}

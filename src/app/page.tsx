import { projects } from "@/data/projects";

const email = "damian_l@hotmail.es";
const phone = "+54 11 2819-7638";
const whatsappUrl = "https://wa.me/541128197638?text=Hola%20Dami%C3%A1n%2C%20vi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20una%20edici%C3%B3n.";

export default function Home() {
  return (
    <main id="inicio">
      <nav className="nav shell" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Damian Larocca, inicio">
          <span className="brand-mark">DL</span>
          <span className="brand-name">DAMIAN LAROCCA<span className="brand-period">.</span></span>
        </a>
        <div className="nav-links">
          <a href="#trabajos">Trabajos</a>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos <span>↗</span></a>
      </nav>

      <section className="hero shell">
        <div className="hero-main">
          <div className="eyebrow"><span className="status-dot" /> VIDEO EDITOR <span className="eyebrow-divider">/</span> REELS & SHORT FORM</div>
          <h1>Edición que<br /><span>detiene el scroll.</span></h1>
          <div className="hero-bottom">
            <p className="hero-copy">Transformo ideas y material grabado en videos verticales dinámicos, claros y listos para redes.</p>
            <a className="round-link" href="#trabajos" aria-label="Ver trabajos">↓</a>
          </div>
        </div>
        <aside className="hero-aside" aria-label="Especialidad">
          <div className="vertical-mark">
            <div className="vertical-mark-inner"><span>9:16</span><i /></div>
          </div>
          <span className="aside-caption">FORMATO VERTICAL<br />CONTENIDO SHORT-FORM</span>
        </aside>
        <div className="hero-rule" />
        <div className="hero-meta"><span>EDICIÓN · MONTAJE · SUBTÍTULOS · MOTION</span><span>BUENOS AIRES, ARGENTINA</span></div>
      </section>

      <section className="work-section shell" id="trabajos">
        <div className="section-heading">
          <div><span className="kicker">01 / PORTFOLIO</span><h2>Reels & videos<span className="muted"> cortos.</span></h2></div>
          <p>Una selección de piezas en formato<br />vertical 9:16 para redes y campañas.</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-visual">
                <iframe
                  className="project-embed"
                  src={project.embedUrl}
                  title={`Reel ${project.id} — ${project.title}`}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="project-info">
                <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>
        <p className="placeholder-note"><span>↗</span> Ocho reels embebidos desde Jumpshare. Los videos se reproducen directamente en su marco vertical.</p>
      </section>

      <section className="services-section" id="servicios">
        <div className="shell services-inner">
          <div className="services-intro"><span className="kicker">02 / SERVICIOS</span><h2>Contenido breve.<br /><span className="muted">Impacto claro.</span></h2><p>Edición enfocada en el lenguaje y el ritmo de las plataformas sociales.</p></div>
          <div className="service-list">
            {[
              ["01", "Edición de reels", "Montaje, ritmo y narrativa para videos verticales."],
              ["02", "Subtítulos & gráficos", "Textos dinámicos, recursos visuales y animaciones."],
              ["03", "Videos para anuncios", "Piezas y variantes adaptadas a campañas digitales."],
              ["04", "Audio & acabado", "Música, ajustes de sonido y exportación final."],
            ].map(([number, title, description]) => (
              <div className="service-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><b>↗</b></div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section shell" id="contacto">
        <span className="kicker">03 / CONTACTO</span>
        <h2>Hagamos algo<br />que <span className="accent">se mueva.</span></h2>
        <div className="contact-bottom">
          <div className="contact-details">
            <p>¿Tenés material para editar o una idea para desarrollar?<br />Escribime y contame sobre tu proyecto.</p>
            <a href={`mailto:${email}`}>{email}</a>
            <a href={`tel:+541128197638`}>{phone}</a>
          </div>
          <div className="contact-actions">
            <a className="contact-link primary-contact" href={whatsappUrl} target="_blank" rel="noreferrer">Contactar por WhatsApp <span>↗</span></a>
            <a className="contact-link" href={`mailto:${email}`}>Enviar un email <span>↗</span></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <a className="footer-brand" href="#inicio">DAMIAN LAROCCA<span>.</span></a>
        <span>VIDEO EDITOR · REELS & SHORT FORM</span>
        <a href="#inicio">VOLVER ARRIBA ↑</a>
      </footer>

    </main>
  );
}

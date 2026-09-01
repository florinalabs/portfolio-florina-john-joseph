import Image from "next/image";
import GitHubPortfolio from "./components/GitHubPortfolio";

const skills = [
  { title: "Frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML5 / CSS3", "Tailwind", "Vite"] },
  { title: "Mobile", items: ["React Native", "Expo", "NativeWind"] },
  { title: "Backend", items: ["Node.js", "Express", "FastAPI", "PHP", "Laravel"] },
  { title: "APIs & Data", items: ["REST", "GraphQL", "Webhooks", "SQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"] },
  { title: "Cloud & DevOps", items: ["Google Cloud Platform", "AWS", "Terraform", "Server Infrastructure", "Deployment", "CI/CD", "Docker | Podman"] },
  { title: "AI & Automation", items: ["Azure AI", "LLM", "RAG", "n8n", "Workflow Automation", "API Integration"] },
  { title: "CMS & Commerce", items: ["WordPress", "WooCommerce", "Shopify", "SEO"] },
  { title: "3D & Creative", items: ["Blender", "3D Modeling", "3D Visualization", "Product Rendering", "Photoshop"] },
];

const projects = [
  {
    index: "01",
    label: "Mobile + Marketplace",
    title: "Lalaba",
    description:
      "A customer and merchant laundry platform with booking, order tracking, service workflows and mobile-first experiences backed by production APIs and cloud services.",
    tech: ["React Native", "Expo", "APIs", "Payments", "Cloud"],
    links: [
      { label: "Open Lalaba", href: "https://app.lalaba.ph/" },
      { label: "App Store", href: "https://apps.apple.com/ph/app/lalaba/id6757118750" },
    ],
  },
  {
    index: "02",
    label: "Full-Stack + Education",
    title: "Chess Learning Academy",
    description:
      "A full-stack web experience for an online chess academy, presenting structured learning programs, coaching, trial booking, academy information and digital brand experiences for students and parents.",
    tech: ["Full-Stack", "Web Platform", "UI / UX", "3D Assets", "Integrations"],
    links: [
      { label: "Visit Chess Learning Academy", href: "https://chesslearningacademy.com/" },
    ],
  },
  {
    index: "03",
    label: "Web + Mobile",
    title: "Kwyky",
    description:
      "A web and mobile product integrating application workflows, backend services and APIs. This project is retained as a legacy case study from my previous portfolio.",
    tech: ["Web", "Mobile", "REST APIs", "Integration"],
    links: [
      { label: "Legacy case study", href: "https://kwyky.ph" },
    ],
  },
  {
    index: "04",
    label: "AI SaaS",
    title: "Puppeteer.cloud",
    description:
      "A no-code AI agent platform focused on workflow automation, multi-agent coordination and business process execution through configurable agent experiences.",
    tech: ["AI Agents", "Automation", "SaaS", "APIs", "LLM"],
    links: [
      { label: "Visit Puppeteer.cloud", href: "https://www.puppeteer.cloud/" },
    ],
  },
  {
    index: "05",
    label: "Backend + Payments",
    title: "FindXnY Payment Gateway",
    description:
      "Backend and integration work around secure payment processing, transaction workflows, webhooks and application-to-service communication.",
    tech: ["Backend", "Payments", "Webhooks", "Security", "APIs"],
    links: [
      { label: "Visit FindXnY", href: "https://findxny.ph/" },
    ],
  },
  {
    index: "06",
    label: "Automation",
    title: "n8n Workflow Integrations",
    description:
      "Workflow automation connecting APIs, webhooks and application services to reduce repetitive work and orchestrate business processes.",
    tech: ["n8n", "Webhooks", "REST APIs", "Automation", "AI"],
    links: [],
  },
];

const wordpressProjects = [
  {
    index: "WP-01",
    title: "C&J Sunset View Resort",
    domain: "cjsunsetview.com",
    description:
      "Hospitality and resort website with accommodation discovery, booking and reservation flows, room details, events, gallery, account and checkout experiences.",
    tech: ["WordPress", "Booking", "Responsive UI", "SEO"],
    href: "https://cjsunsetview.com/",
  },
  {
    index: "WP-02",
    title: "GWP Engagement Solutions",
    domain: "gwpengage.com",
    description:
      "Corporate engagement website presenting consulting, reward and recognition, event production, webinars and other services with clear lead-generation and contact flows.",
    tech: ["WordPress", "Corporate Website", "Lead Generation", "Responsive UI"],
    href: "https://gwpengage.com/",
  },
  {
    index: "WP-03",
    title: "Captain Ron's Window Cleaning",
    domain: "captainronsaz.com",
    description:
      "Service-business website for window cleaning, sunscreens, outdoor shades and screen-door services, structured around service pages, quote calls-to-action, blog content and FAQs.",
    tech: ["WordPress", "Service Pages", "Local SEO", "Lead Generation"],
    href: "https://captainronsaz.com/",
  },
];

const threeDWorks = [
  {
    kind: "video",
    src: "/3d/product-animation.mp4",
    poster: "/3d/product-animation-poster.jpg",
    title: "Product Animation",
    subtitle: "Modeling · Materials · Lighting · Animation",
    className: "wide featured",
  },
  {
    kind: "image",
    src: "/3d/cerave-product.webp",
    title: "CeraVe Product Visualization",
    subtitle: "Product modeling · Label work · Studio lighting",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/chess-robot.webp",
    title: "Chess Learning Academy Robot",
    subtitle: "Character design · Hard surface · Product visualization",
    className: "square feature-tall",
  },
  {
    kind: "image",
    src: "/3d/isometric-room.webp",
    title: "Isometric Room",
    subtitle: "Environment modeling · Lighting · Composition",
    className: "square",
  },
  {
    kind: "image",
    src: "/3d/mechanical-keyboard.webp",
    title: "Mechanical Keyboard",
    subtitle: "Hard-surface modeling · Materials · Lighting",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/pokeball-material-study.webp",
    title: "Material & Weathering Study",
    subtitle: "Texturing · Surface detail · Environment lighting",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/chessboard-study.webp",
    title: "Chessboard Motion Study",
    subtitle: "Modeling · Depth of field · Cinematic composition",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/neon-location-mark.webp",
    title: "Neon Location Mark",
    subtitle: "3D logo visualization · Emissive materials",
    className: "square",
  },
  {
    kind: "image",
    src: "/3d/chess-academy-logo-1.webp",
    title: "CLA Identity Study I",
    subtitle: "3D brand exploration",
    className: "tall",
  },
  {
    kind: "image",
    src: "/3d/chess-academy-logo-2.webp",
    title: "CLA Identity Study II",
    subtitle: "3D typography · Chess forms",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/chess-academy-logo-3.webp",
    title: "CLA Identity Study III",
    subtitle: "Emblem design · 3D composition",
    className: "wide",
  },
  {
    kind: "image",
    src: "/3d/chess-academy-logo-4.webp",
    title: "CLA Identity Study IV",
    subtitle: "Minimal mark · Brand visualization",
    className: "wide",
  },
];

const experience = [
  {
    period: "2024 — 2026",
    company: "FindXnY Solutions Inc.",
    role: "Chief Technology Officer | Full-Stack & DevOps",
    details: [
      "Built and shipped production-ready web and mobile applications using React Native (Expo), Next.js, TypeScript, Electron, FastAPI, Vite and GCP.",
      "Integrated REST/GraphQL APIs and databases for reliable, scalable application and data workflows.",
      "Managed server infrastructure, application deployment and cloud environments on Google Cloud Platform.",
      "Designed a Next.js/TypeScript knowledge-management platform and cross-platform Electron tooling with an emphasis on performance and maintainability.",
    ],
  },
  {
    period: "2018 — 2023",
    company: "Freelance",
    role: "WordPress Developer | Full-Stack Developer | 3D Artist",
    details: [
      "Delivered client projects across WordPress, full-stack web development and 3D visualization, balancing technical implementation with visual requirements.",
    ],
  },
  {
    period: "2022",
    company: "Project Assistant",
    role: "WordPress Developer",
    details: [
      "Developed and maintained responsive, SEO-friendly WordPress websites and custom themes/child themes using HTML, CSS, JavaScript and PHP.",
    ],
  },
  {
    period: "2016",
    company: "Department of Agriculture — Office of Operations",
    role: "Administrative Secretary IV",
    details: [
      "Provided administrative and operations support, prepared official documents, coordinated schedules and meetings, and handled records with accuracy and confidentiality.",
    ],
  },
];

const certifications = [
  {
    title: "Microsoft Artificial Intelligence Course: Azure AI Fundamentals",
    issuer: "TESDA Online Program",
    date: "",
  },
  {
    title: "Developing Designs for User Interface",
    issuer: "TESDA Online Program",
    date: "",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 5h5v5M19 5l-9 9M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 6.08c.85 0 1.7.12 2.5.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.95-2.35 4.81-4.58 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Primary navigation">
          <a href="#top" className="brand" aria-label="John Joseph Florina home">
            JJF<span>.</span>
          </a>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#work">Projects</a>
            <a href="#wordpress">WordPress</a>
            {/* <a href="#github">GitHub</a> */}
            <a href="#3d">3D</a>
            <a href="#experience">Experience</a>
          </div>
          <a className="nav-cta" href="mailto:florinajohnjoseph@gmail.com">Let&apos;s talk</a>
        </nav>
      </header>

      <section className="hero container" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Full-Stack · DevOps · AI · WordPress · 3D</div>
          <h1>
            I build digital products
            <span> from idea to infrastructure.</span>
          </h1>
          <p className="hero-lede">
            I&apos;m <strong>John Joseph Florina</strong>, a Full-Stack, DevOps and AI Engineer based in Metro Manila. I build web and mobile applications, cloud infrastructure, automation workflows, WordPress solutions and 3D experiences.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View selected work <ArrowIcon /></a>
            <a className="button ghost" href="#github">View GitHub <GitHubIcon /></a>
            <a className="button ghost" href="#3d">Explore 3D work <ArrowIcon /></a>
            <a className="button ghost" href="/John_Joseph_Florina_Resume.pdf" target="_blank" rel="noreferrer">Download résumé <ExternalIcon /></a>
          </div>
          <div className="hero-meta">
            <div><span>Based in</span><strong>Metro Manila, PH</strong></div>
            <div><span>Experience</span><strong>10+ years</strong></div>
            <div><span>Focus</span><strong>Build · Automate · Visualize</strong></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of John Joseph Florina">
          <div className="portrait-frame">
            <Image
              src="/john-joseph-florina.jpg"
              alt="John Joseph Florina"
              fill
              priority
              sizes="(max-width: 900px) 70vw, 420px"
              className="portrait"
            />
          </div>
          <div className="floating-card card-one"><span>01</span><strong>Web + Mobile</strong><small>Next.js · Expo</small></div>
          <div className="floating-card card-two"><span>02</span><strong>Cloud + DevOps</strong><small>GCP · Terraform</small></div>
          <div className="floating-card card-three"><span>03</span><strong>AI + Automation</strong><small>n8n · LLM · RAG</small></div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, group) => (
            <div className="marquee-group" key={group} aria-hidden={group === 1}>
              {["Full-Stack Development", "DevOps", "AI Engineering", "React Native / Expo", "WordPress / WooCommerce", "n8n Automation", "Blender / 3D"].map((item) => (
                <span key={`${group}-${item}`}>{item}<b>✦</b></span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section container about" id="about">
        <div className="section-label"><span>01</span> About</div>
        <div className="about-grid">
          <h2>One engineer.<br /><em>Multiple layers.</em></h2>
          <div className="about-copy">
            <p className="large-copy">
              I work across the full product stack — from interface and application logic to APIs, cloud infrastructure, automation and production deployment.
            </p>
            <p>
              My background spans full-stack development, WordPress and WooCommerce, React Native/Expo mobile development, Google Cloud Platform, server infrastructure, n8n automation, AI tooling and 3D visualization. I enjoy solving problems that sit between disciplines and turning complex requirements into practical products.
            </p>
            <div className="about-links">
              <a href="mailto:florinajohnjoseph@gmail.com">Email <ArrowIcon /></a>
              <a href="https://www.linkedin.com/in/john-joseph-florina-60398b18b" target="_blank" rel="noreferrer">LinkedIn <ExternalIcon /></a>
              <a href="https://github.com/orgs/florinalabs/repositories" target="_blank" rel="noreferrer">GitHub <GitHubIcon /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading project-heading">
            <div>
              <div className="section-label"><span>02</span> Full-stack + product work</div>
              <h2>Products I&apos;ve <em>worked on.</em></h2>
            </div>
            <p>
              Public links open the current live product or company surface where available. Some work was completed as part of a team or company engagement.
            </p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className="project-top">
                  <span className="project-index">{project.index}</span>
                  <span className="project-label">{project.label}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                {project.links.length > 0 && (
                  <div className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                        {link.label} <ExternalIcon />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section wordpress-section" id="wordpress">
        <div className="container">
          <div className="wordpress-heading">
            <div>
              <div className="section-label"><span>03</span> WordPress portfolio</div>
              <h2>Client sites built for <em>real businesses.</em></h2>
            </div>
            <p>
              WordPress projects across hospitality, corporate engagement and local services — focused on responsive experiences, content structure, conversion paths and maintainability.
            </p>
          </div>

          <div className="wordpress-grid">
            {wordpressProjects.map((project) => (
              <article className="wordpress-card" key={project.href}>
                <div className="browser-shell" aria-hidden="true">
                  <div className="browser-bar">
                    <span /><span /><span />
                    <div>{project.domain}</div>
                  </div>
                </div>
                <div className="wordpress-card-body">
                  <div className="wordpress-index">{project.index}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="wordpress-tags">
                    {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Visit live website <ExternalIcon />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* <GitHubPortfolio /> */}

      <section className="section three-d-section" id="3d">
        <div className="container">
          <div className="three-d-heading">
            <div>
              <div className="section-label"><span>05</span> 3D portfolio</div>
              <h2>Model. Texture.<br /><em>Light. Render.</em></h2>
            </div>
            <div className="three-d-intro">
              <p>
                A selection of my Blender work across product visualization, hard-surface modeling, character/brand concepts, environments, materials and motion.
              </p>
              <div className="three-d-tags">
                <span>Blender</span><span>Modeling</span><span>Texturing</span><span>Lighting</span><span>Rendering</span><span>Animation</span>
              </div>
            </div>
          </div>

          <div className="three-d-grid">
            {threeDWorks.map((item) => (
              <figure className={`three-d-card ${item.className}`} key={item.src}>
                {item.kind === "video" ? (
                  <video
                    className="three-d-media"
                    src={item.src}
                    poster={item.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  <a href={item.src} target="_blank" rel="noreferrer" className="three-d-image-link" aria-label={`Open ${item.title}`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 40vw"
                      className="three-d-media"
                    />
                  </a>
                )}
                <figcaption>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                  {item.kind === "image" && <ExternalIcon />}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" id="experience">
        <div className="section-heading split-heading">
          <div className="section-label"><span>06</span> Experience</div>
          <h2>Where I&apos;ve <em>worked.</em></h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.period}`}>
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-main">
                <h3>{item.company}</h3>
                <div className="timeline-role">{item.role}</div>
                <ul>
                  {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="container">
          <div className="section-heading split-heading">
            <div className="section-label"><span>07</span> Capabilities</div>
            <h2>Tools I use to <em>ship.</em></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container education-section">
        <div className="section-label"><span>08</span> Education + certifications</div>
        <div className="education-grid">
          <div className="education-primary">
            <span className="mini-label">Education</span>
            <h2>Bachelor of<br /><em>Information Technology</em></h2>
            <p>Informatics College</p>
            <span>2013 — 2016</span>
          </div>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <article className="cert" key={cert.title}>
                <span className="cert-num">0{index + 1}</span>
                <div>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <time>{cert.date}</time>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-grid">
          <div>
            <div className="section-label light"><span>09</span> Contact</div>
            <h2>Have something<br />worth <em>building?</em></h2>
          </div>
          <div className="contact-right">
            <p>I&apos;m open to full-stack, DevOps, AI/automation, WordPress, mobile and 3D/technical creative opportunities.</p>
            <a className="contact-email" href="mailto:florinajohnjoseph@gmail.com">
              florinajohnjoseph@gmail.com <ArrowIcon />
            </a>
            <div className="social-row">
              <a href="https://www.linkedin.com/in/john-joseph-florina-60398b18b" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://github.com/orgs/florinalabs/repositories" target="_blank" rel="noreferrer">GitHub</a>
              <a href="/John_Joseph_Florina_Resume.pdf" target="_blank" rel="noreferrer">Résumé</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-inner">
          <span>© 2026 John Joseph Florina</span>
          <span>Designed & built with Next.js</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}

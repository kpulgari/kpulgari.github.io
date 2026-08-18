import kpulgari from "./assets/kpulgari.jpeg";
import cohesity from "./assets/cohesity_logo.jpeg";
import schwab from "./assets/schwab.png";
import mortgage_connect from "./assets/mortgage_connect.jpeg";
import modulo from "./assets/modulo-dark.png";
import ifi from "./assets/ifi-terminal.jpg";
import wikipedia from "./assets/wikipedia-thumbnail.png";
import magellan from "./assets/magellan.png";
import illinois from "./assets/illinois.png";
import apple from "./assets/apple.jpg";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const links = [
  { name: "Email", icon: <Mail className="w-3.5 h-3.5" />, href: "mailto:kaushik.pulgari@gmail.com" },
  { name: "LinkedIn", icon: <FaLinkedinIn className="w-3.5 h-3.5" />, href: "https://www.linkedin.com/in/kpulgari" },
  { name: "GitHub", icon: <FaGithub className="w-3.5 h-3.5" />, href: "https://github.com/kpulgari" },
  { name: "Resume", icon: <span className="text-[9px] font-semibold tracking-wide">CV</span>, href: "/resume.pdf" },
];

const work = [
  {
    name: "Apple",
    href: "https://www.apple.com",
    role: "Software Engineer (Applied ML)",
    dates: "Oct 2025 - Present",
    location: "Austin, TX",
    description: "Building and scaling AI/ML systems and infrastructure for Apple's internal applications and products.",
    logo: apple,
    tags: ["Python", "Kubernetes", "vLLM", "Flux CD", "Prometheus", "Grafana"],
  },
  {
    name: "Cohesity",
    href: "https://www.cohesity.com",
    role: "Software Engineer (Distributed File Storage)",
    dates: "Jun - Oct 2025",
    location: "Santa Clara, CA",
    description:
      "Improved test infrastructure and reduced execution time through unit test refactoring and performance optimizations. Built a customer-facing dashboard for real-time monitoring of background scrubbing operations.",
    logo: cohesity,
    tags: ["C++", "RPC", "Distributed Systems"],
  },
  {
    name: "Cohesity",
    href: "https://www.cohesity.com",
    role: "Software Engineering Intern",
    dates: "May - Dec 2024",
    location: "San Jose, CA",
    description:
      "Built a Python microservice for cluster data ingestion and visualizations to identify performance bottlenecks. Managed release pipelines, delivered technical demos to leadership and company-wide audiences, and authored comprehensive documentation for developer onboarding and version control.",
    logo: cohesity,
    tags: ["Python", "PostgreSQL", "Grafana", "AWS RDS"],
  },
  {
    name: "Charles Schwab",
    href: "https://www.schwab.com",
    role: "Software Engineering Intern",
    dates: "Jun - Aug 2023",
    location: "St. Louis, MO",
    description:
      "Optimized critical applications serving 20K+ users per minute during the TD Ameritrade-Schwab merger. Integrated a logging framework and expanded unit testing to improve code coverage, reliability, and observability across full-stack applications.",
    logo: schwab,
    tags: ["ASP.NET", "Angular.js", "C#", "JavaScript"],
  },
  {
    name: "Mortgage Connect",
    href: "https://www2.mortgageconnectlp.com",
    role: "Software QA Intern",
    dates: "Jun - Aug 2022",
    location: "Remote",
    description:
      "Built an automated regression testing suite for API and UI validation. Implemented structured logging, annotations, and error handling to enhance test maintainability and debugging efficiency following automation best practices.",
    logo: mortgage_connect,
    tags: ["Java", "Selenium", "Postman", "TestNG"],
  },
];

const projects = [
  {
    name: "Magellan",
    liveUrl: "https://kpulgari.com/magellan/",
    githubUrl: "https://github.com/magellan-extension/magellan",
    screenshot: magellan,
    description:
      "Open-source Chrome extension for conversational AI-powered web browsing, featuring contextual Q&A, intelligent citations, semantic search, and seamless tab navigation.",
    tags: ["JavaScript", "OpenRouter", "Chrome API"],
  },
  {
    name: "Modulo",
    liveUrl: "https://projectmodulo.com/",
    screenshot: modulo,
    description:
      "Collaboration platform that features task management, roadmapping, and AI-powered communication tools for individual creators and distributed teams.",
    tags: ["Next.js", "JavaScript", "Vertex API", "Firebase", "shadcn"],
  },
  {
    name: "IFI Terminal",
    githubUrl: "https://github.com/kpulgari/ifi-terminal",
    screenshot: ifi,
    description:
      "Real-time financial data platform that integrates yFinance and Finnhub API with customizable dashboards and modular components for market analysis and insights.",
    tags: ["Python", "Rich Library"],
  },
  {
    name: "Linking Wikipedia Pages",
    githubUrl: "https://github.com/kpulgari/linking-wikipedia-pages",
    screenshot: wikipedia,
    description:
      "Page connection tool that uses BFS, IDDFS, and PageRank on SNAP Wikipedia dataset to compute shortest path between pages and analyze network connectivity.",
    tags: ["C++", "Catch2"],
  },
];

const Page = () => {
  return (
    <div className="site-shell">
      <aside className="sidebar">
        <img
          src={kpulgari}
          alt="Kaushik Pulgari"
          className="w-24 h-24 rounded-md object-cover mb-5"
        />
        <h1 className="text-[1.35rem] font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 leading-snug">
          Kaushik Pulgari
        </h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Software Engineer @ Apple
        </p>

        <nav className="sidebar-nav">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 mt-6 lg:mt-8">
          <ThemeToggle />
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </aside>

      <div className="content">
        <section id="about" className="section-block">
          <p className="section-label">About</p>
          <div className="section-body">
            <p>
              Hey! I&apos;m Kaushik, a Computer Science & Economics grad from UIUC.
            </p>
            <p>
              I&apos;m currently a software engineer on Apple&apos;s Applied Machine Learning team.
            </p>
            <p>
              In my free time, I enjoy building stuff like{" "}
              <a href="https://kpulgari.com/magellan/" target="_blank" rel="noopener noreferrer" className="text-link">
                Magellan
              </a>
              {" - "}a Chrome extension for conversational AI within tabs - and{" "}
              <a href="https://projectmodulo.com/" target="_blank" rel="noopener noreferrer" className="text-link">
                Modulo
              </a>
              , a project management & collaboration tool.
            </p>
            <p>
              Beyond code, I&apos;m a sports enthusiast, experimental cook, gym
              aficionado, and virtual globe-trotter via Google Maps.
            </p>
            <p>
              Feel free to connect on{" "}
              <a href="http://linkedin.com/in/kpulgari/" target="_blank" rel="noopener noreferrer" className="text-link">
                LinkedIn
              </a>
              {" or shoot me an "}
              <a href="mailto:kaushik.pulgari@gmail.com" className="text-link">
                email
              </a>
              .
            </p>
          </div>
        </section>

        <section id="education" className="section-block">
          <p className="section-label">Education</p>
          <div className="section-items">
            <article className="entry-row">
              <div className="entry-header">
                <div className="flex items-start gap-3">
                  <img src={illinois} alt="UIUC" className="w-8 h-8 rounded object-cover mt-0.5" />
                  <div>
                    <p className="font-medium text-zinc-900 dark:text-zinc-100 text-[0.9375rem]">
                      University of Illinois Urbana-Champaign
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      B.S. Computer Science & Economics
                    </p>
                  </div>
                </div>
                <div className="entry-meta">
                  <p>2021 - 2025</p>
                  <p className="mt-0.5 text-xs">GPA 3.98</p>
                </div>
              </div>
              <p className="entry-detail">
                Data Structures & Algorithms, Database Systems, Machine Learning, Distributed
                Systems, Cloud Computing
              </p>
              <div className="tags">
                {["Magna Cum Laude", "Phi Beta Kappa", "ACM", "Asha for Education"].map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="experience" className="section-block">
          <p className="section-label">Experience</p>
          <div className="section-items">
            {work.map((job) => (
              <article key={`${job.name}-${job.dates}`} className="entry-row">
                <div className="entry-header">
                  <div className="flex items-center gap-2.5">
                    <img src={job.logo} alt={job.name} className="w-7 h-7 rounded object-cover" />
                    <div>
                      <a
                        href={job.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[0.9375rem] text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-2"
                      >
                        {job.name}
                      </a>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.role}</p>
                    </div>
                  </div>
                  <div className="entry-meta">
                    <p>{job.dates}</p>
                    <p className="mt-0.5 text-xs">{job.location}</p>
                  </div>
                </div>
                <p className="entry-detail">{job.description}</p>
                {job.tags.length > 0 && (
                  <div className="tags">
                    {job.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-block">
          <p className="section-label">Projects</p>
          <div className="section-items">
            {projects.map((project) => (
              <article key={project.name} className="project-row">
                <div className="project-thumb">
                  <img src={project.screenshot} alt={project.name} />
                </div>
                <div className="entry-row">
                  <div className="project-title-row">
                    <h3 className="font-medium text-[0.9375rem] text-zinc-900 dark:text-zinc-100">
                      {project.name}
                    </h3>
                    {(project.liveUrl || project.githubUrl) && (
                      <span className="project-links">
                        {project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            site
                          </a>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            source
                          </a>
                        )}
                      </span>
                    )}
                  </div>
                  <p className="entry-detail">{project.description}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;

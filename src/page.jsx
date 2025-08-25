import kpulgari from "./assets/kpulgari.jpeg";
import cohesity from "./assets/cohesity_logo.jpeg";
import schwab from "./assets/schwab.png";
import mortgage_connect from "./assets/mortgage_connect.jpeg";
import modulo from "./assets/modulo-dark.png";
import ifi from "./assets/ifi-terminal.jpg";
import wikipedia from "./assets/wikipedia-thumbnail.png";
import magellan from "./assets/magellan.png";
import illinois from "./assets/illinois.png";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import InteractiveBackground from "./components/Background";

const buttons = [
  {
    name: "Email",
    icon: <Mail className="w-4 h-4" />,
    link: "mailto:kaushik.pulgari@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="w-4 h-4" />,
    link: "https://www.linkedin.com/in/kpulgari",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="w-4 h-4" />,
    link: "https://github.com/kpulgari",
  },
  {
    name: "Resume",
    icon: <span className="text-xs font-semibold">Resume</span>,
    link: "/resume.pdf",
  },
];

const work = [
  {
    name: "Cohesity",
    link: "https://www.cohesity.com",
    role: "Software Engineer (MTS I)",
    dates: "Jun. 2025 - Present",
    location: "Santa Clara, CA",
    description: "Working on distributed file systems.",
    image: <img src={cohesity} className="w-8 h-8 rounded-lg"></img>,
    tags: ["C++", "RPC"],
  },
  {
    name: "Cohesity",
    link: "https://www.cohesity.com",
    role: "Software Engineering Intern",
    dates: "May 2024 - Dec. 2024",
    location: "San Jose, CA",
    description:
      "Built a Python microservice for cluster data ingestion and Grafana visualization to identify performance bottlenecks. Managed release pipelines, delivered technical demos to leadership and company-wide audiences, and authored comprehensive documentation for developer onboarding and version control.",
    image: <img src={cohesity} className="w-8 h-8 rounded-lg"></img>,
    tags: ["Python", "PostgreSQL", "Grafana", "AWS RDS"],
  },
  {
    name: "Charles Schwab",
    link: "https://www.schwab.com",
    role: "Software Engineering Intern",
    dates: "Jun. 2023 - Aug. 2023",
    location: "St. Louis, MO",
    description:
      "Optimized ASP.NET and Angular.js applications handling 20K+ users/minute during the TDA-Schwab merger. Integrated logging framework and implemented comprehensive unit testing to improve code coverage and system reliability across full-stack applications.",
    image: <img src={schwab} className="w-8 h-8 rounded-lg"></img>,
    tags: ["ASP.NET", "Angular.js", "C#", "JavaScript"],
  },
  {
    name: "Mortgage Connect",
    link: "https://www2.mortgageconnectlp.com",
    role: "Software QA Intern",
    dates: "Jun. 2022 - Aug. 2022",
    location: "Remote",
    description:
      "Built automated regression testing suite using TestNG and Selenium for API and UI validation. Implemented structured logging, annotations, and error handling to enhance test maintainability and debugging efficiency following automation best practices.",
    image: <img src={mortgage_connect} className="w-8 h-8 rounded-lg"></img>,
    tags: ["Java", "Selenium", "Postman", "TestNG"],
  },
];

const projects = [
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Magellan</span>
        <div className="flex space-x-2">
          <a
            href="https://kpulgari.com/magellan/"
            target="_blank"
            rel="noopener noreferrer"
            className="pin-button p-1.5 rounded-md transition-colors flex items-center justify-center"
          >
            <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
          </a>
          <a
            href="https://github.com/magellan-extension/magellan"
            target="_blank"
            rel="noopener noreferrer"
            className="pin-button p-1.5 rounded-md transition-colors flex items-center justify-center"
          >
            <FaGithub className="w-4 h-4"></FaGithub>
          </a>
        </div>
      </div>
    ),
    screenshot: magellan,
    description:
      "Open-source Chrome sidebar extension that enables conversational AI for web browsing with contextual Q&A, intelligent citations, and seamless tab navigation.",
    tags: ["JavaScript", "Google Chrome API", "Gemini API", "HTML", "CSS"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Modulo</span>
        <a
          href="https://projectmodulo.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="pin-button p-1.5 rounded-md transition-colors flex items-center justify-center"
        >
          <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
        </a>
      </div>
    ),
    screenshot: modulo,
    description:
      "Global collaboration platform that features task management, roadmapping, and AI-powered communication tools for individual creators and distributed teams.",
    tags: ["Next.js", "JavaScript", "Vertex API", "Firebase", "shadcn"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>IFI Terminal</span>
        <a
          href="https://github.com/kpulgari/ifi-terminal"
          target="_blank"
          rel="noopener noreferrer"
          className="pin-button p-1.5 rounded-md transition-colors flex items-center justify-center"
        >
          <FaGithub className="w-4 h-4"></FaGithub>
        </a>
      </div>
    ),
    screenshot: ifi,
    description:
      "Real-time financial data platform that integrates yFinance and Finnhub API with customizable dashboards and modular components for market analysis and insights.",
    tags: ["Python", "Conda"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Linking Wikipedia Pages</span>
        <a
          href="https://github.com/kpulgari/linking-wikipedia-pages"
          target="_blank"
          rel="noopener noreferrer"
          className="pin-button p-1.5 rounded-md transition-colors flex items-center justify-center"
        >
          <FaGithub className="w-4 h-4"></FaGithub>
        </a>
      </div>
    ),
    screenshot: wikipedia,
    description:
      "Page connection tool that uses BFS, IDDFS, and PageRank on SNAP Wikipedia dataset to compute shortest path between pages and analyze network connectivity.",
    tags: ["C++", "Catch2"],
  },
];

const Page = () => {
  return (
    <div className="relative">
      <InteractiveBackground></InteractiveBackground>
      <main className="flex flex-col items-center min-h-screen relative z-10">
        <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
          <div className="w-full flex flex-row lg:justify-center md:justify-center justify-left items-center space-x-4 md:space-x-8 lg:space-x-10">
            <img
              src={kpulgari}
              className="rounded-full lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28 ring-4 ring-sky-200/50 dark:ring-gray-400/30"
              alt="Kaushik Pulgari"
            ></img>
            <div className="text-left space-y-3">
              <div className="space-y-1">
                <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">
                  Kaushik Pulgari
                </h1>
                <p className="lg:text-sm md:text-sm text-xs text-gray-600 dark:text-gray-400">
                  {"SWE @ Cohesity | CS + Econ @ UIUC"}
                </p>
              </div>
              <div className="flex flex-row items-center justify-left space-x-1 sm:space-x-2">
                <ThemeToggle></ThemeToggle>
                {buttons.map((button, index) => (
                  <a
                    key={index}
                    href={button.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pin-button p-2 rounded-md text-sm text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-fit h-4 text-center items-center justify-center flex">
                      {button.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold lg:text-2xl md:text-2xl text-xl text-gray-900 dark:text-white">
              About
            </h2>
            <div className="pin-card rounded-lg p-4">
              <div className="flex flex-row items-center justify-left text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                <div className="space-y-3">
                  <p>
                    {
                      "Hey! 👋 I'm Kaushik, a CS + Economics graduate from the University of Illinois Urbana-Champaign. "
                    }
                  </p>
                  <p>
                    {
                      "I'm currently working on the distributed file system team at "
                    }
                    <a
                      href="https://cohesity.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sky-blue-accent hover:underline underline-offset-2 font-medium"
                    >
                      Cohesity.
                    </a>
                  </p>
                  <p>
                    {"I enjoy building stuff like "}
                    <a
                      href="https://kpulgari.com/magellan/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sky-blue-accent hover:underline underline-offset-2 font-medium"
                    >
                      Magellan
                    </a>
                    {
                      " - a Chrome extension for conversational AI within tabs - and "
                    }
                    <a
                      href="https://projectmodulo.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sky-blue-accent hover:underline underline-offset-2 font-medium"
                    >
                      Modulo
                    </a>
                    {", a project management & collaboration tool."}
                  </p>
                  <p>
                    {
                      "Beyond code, I'm a sports enthusiast, experimental cook, gym aficionado, and virtual globe-trotter via Google Maps."
                    }
                  </p>
                  <p>
                    {"Feel free to connect with me on "}
                    <a
                      href="http://linkedin.com/in/kpulgari/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sky-blue-accent hover:underline underline-offset-2 font-medium"
                    >
                      LinkedIn
                    </a>
                    {" or shoot me an "}
                    <a
                      href="mailto:kaushik.pulgari@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sky-blue-accent hover:underline underline-offset-2 font-medium"
                    >
                      email!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold lg:text-2xl md:text-2xl text-xl text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="pin-card rounded-lg p-4">
              <div className="flex flex-col space-y-3">
                <div className="flex flex-col md:flex-row md:justify-between w-full md:items-start">
                  <div>
                    <div className="flex flex-row space-x-3 items-center">
                      <img
                        src={illinois}
                        className="w-8 h-8 rounded-lg"
                        alt="UIUC Logo"
                      />
                      <div>
                        <div className="font-bold lg:text-sm md:text-sm text-xs flex-row flex items-center space-x-2 text-gray-900 dark:text-white">
                          <div>University of Illinois Urbana-Champaign</div>
                          <a
                            href="https://illinois.edu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
                          >
                            <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
                          </a>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          B.S. Computer Science & Economics
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left md:text-right mt-2 md:mt-0">
                    <div className="text-xs lg:text-sm md:text-sm font-medium text-gray-900 dark:text-white">
                      Aug. 2021 - May 2025
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      GPA: 3.98/4.00
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Relevant Coursework: Data Structures & Algorithms, Database
                  Systems, ML, Distributed Systems, Cloud Computing, NLP
                </div>
                <div className="flex-wrap flex flex-row gap-2">
                  <div className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                    Magna Cum Laude
                  </div>
                  <div className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                    Phi Beta Kappa
                  </div>
                  <div className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                    ACM
                  </div>
                  <div className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                    Asha for Education
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold lg:text-2xl md:text-2xl text-xl text-gray-900 dark:text-white">
              Experience
            </h2>
            <div className="flex flex-col space-y-4">
              {work.map((w, index) => (
                <div key={index} className="pin-card rounded-lg p-4">
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between w-full md:items-start">
                      <div>
                        <div className="flex flex-row space-x-3 items-center">
                          {w["image"]}
                          <div>
                            <div className="font-bold lg:text-sm md:text-sm text-xs flex-row flex items-center space-x-2 text-gray-900 dark:text-white">
                              <div>{w["name"]}</div>
                              <a
                                href={w["link"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-400"
                              >
                                <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
                              </a>
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-400">
                              {w["role"]}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-left md:text-right mt-2 md:mt-0">
                        <div className="text-xs lg:text-sm md:text-sm font-medium text-gray-900 dark:text-white">
                          {w["dates"]}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {w["location"]}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {w["description"]}
                    </div>
                    <div className="flex-wrap flex flex-row gap-2">
                      {w["tags"].map((tag, tagIndex) => (
                        <div
                          key={tagIndex}
                          className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12 mb-16">
          <h2 className="font-bold lg:text-2xl md:text-2xl text-xl mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="pin-card flex flex-col rounded-lg overflow-hidden"
              >
                <div className="lg:h-56 md:h-80 h-64 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.screenshot}
                    alt={`${project.name} screenshot`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {project["name"]}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project["description"]}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project["tags"].map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="pin-tag px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="h-12"></section>
      </main>
    </div>
  );
};

export default Page;

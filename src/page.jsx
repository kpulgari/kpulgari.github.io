import kpulgari from "./assets/kpulgari.jpeg";
import cohesity from "./assets/cohesity_logo.jpeg";
import schwab from "./assets/schwab.png";
import mortgage_connect from "./assets/mortgage_connect.jpeg";
import modulo from "./assets/modulo-dark.png";
import ifi from "./assets/ifi-terminal.jpg";
import smartshopper from "./assets/smart-shopper.png";
import wikipedia from "./assets/wikipedia-thumbnail.png";
import magellan from "./assets/magellan.png";
import illinois from "./assets/illinois.png";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const buttons = [
  {
    name: "Email",
    icon: <Mail className="w-4 h-4" />,
    link: "mailto:kaushikpulgari@yahoo.com",
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
    role: "Software Engineering Intern",
    dates: "May 2024 - Dec. 2024",
    location: "San Jose, CA",
    description:
      "I developed a Python microservice that scrapes cluster data to create a comprehensive Grafana dashboard that highlights performance issues. I managed systematic release cycles, delivered technical demos to senior stakeholders (including a company-wide demo!), and wrote detailed documentation to facilitate smooth developer onboarding and version control.",
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
      "I improved the user experience during the TDA-Schwab merger by optimizing ASP.NET and Angular.js applications which handle over 20,000 users per minute. I integrated a new logging library and created unit tests to increase code coverage and reduce bugs in frontend and backend systems.",
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
      "I developed automation scripts for API and UI regression testing using TestNG and Selenium. By implementing TestNG logging, annotations, and error handling, I improved test script quality, maintainability, and debugging efficiency while adhering to automation best practices.",
    image: <img src={mortgage_connect} className="w-8 h-8 rounded-lg"></img>,
    tags: ["Java", "Selenium", "Postman", "HTML"],
  },
];

const projects = [
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Magellan</span>
        <a
          href="https://kpulgari.com/magellan/"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
        </a>
      </div>
    ),
    screenshot: magellan,
    description:
      "Chrome extension that lets you search pages using natural language, find relevant sentences, highlight them, and navigate seamlessly. No exact words needed. Just search how you think!",
    tags: ["JavaScript", "Flask", "Google Chrome API", "AWS EC2"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Modulo</span>
        <a
          href="https://projectmodulo.com/"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <FaExternalLinkAlt className="w-3 h-3"></FaExternalLinkAlt>
        </a>
      </div>
    ),
    screenshot: modulo,
    description:
      "Global collaboration platform with tools for task management, roadmapping, and AI-assisted communication. It streamlines work for individual creators and distributed teams.",
    tags: ["Next.js", "JavaScript", "Vertex API", "Firebase", "shadcn"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>SmartShopper</span>
        <a
          href="https://github.com/kpulgari/smart-shopper"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <FaGithub className="w-4 h-4"></FaGithub>
        </a>
      </div>
    ),
    screenshot: smartshopper,
    description:
      "AI-powered grocery shopping app featuring SmartSearch, which fetches related items for recipes and categories using natural language queries via OpenAI's API.",
    tags: [
      "React.js",
      "TypeScript",
      "Flask",
      "Tailwind CSS",
      "Supabase",
      "OpenAI API",
    ],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>IFI Terminal</span>
        <a
          href="https://github.com/kpulgari/ifi-terminal"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <FaGithub className="w-4 h-4"></FaGithub>
        </a>
      </div>
    ),
    screenshot: ifi,
    description:
      "Provides real-time financial data using APIs like yFinance and Finnhub. It displays customizable tables and modules for comprehensive market insights.",
    tags: ["Python", "Conda"],
  },
  {
    name: (
      <div className="flex flex-row items-center space-x-2">
        <span>Linking Wikipedia Pages</span>
        <a
          href="https://github.com/kpulgari/linking-wikipedia-pages"
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <FaGithub className="w-4 h-4"></FaGithub>
        </a>
      </div>
    ),
    screenshot: wikipedia,
    description:
      "Analyzes Wikipedia's connectivity with BFS, IDDFS, and PageRank algorithms using the SNAP Dataset. It demonstrates large-scale data processing and graph traversal algorithms.",
    tags: ["C++", "Catch2"],
  },
];

const Page = () => {
  return (
    <main className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
        <div className="w-full flex flex-row lg:justify-center md:justify-center justify-left items-center lg:space-x-10 md:space-x-10 space-x-8">
          <img
            src={kpulgari}
            className="rounded-full lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28 ring-4 ring-gray-200 dark:ring-gray-800"
          ></img>
          <div className="text-left space-y-3">
            <div className="space-y-1">
              <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-900 dark:text-white">
                Kaushik Pulgari
              </h1>
              <p className="lg:text-sm md:text-sm text-xs text-gray-600 dark:text-gray-400">
                {"CS + Economics @ UIUC '25"}
              </p>
            </div>
            <div className="flex flex-row items-center justify-left space-x-2">
              <ThemeToggle></ThemeToggle>
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md text-sm bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm transition-all duration-200"
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
          <div className="flex flex-row items-center justify-left text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <div className="space-y-3">
              <p>
                {
                  "Hey! 👋 I'm Kaushik, a CS + Economics grad from the University of Illinois Urbana-Champaign. "
                }
              </p>
              <p>
                {
                  "In my free time, I like to spend my time building stuff like "
                }
                <a
                  href="https://projectmodulo.com/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                >
                  Modulo
                </a>
                {
                  " - a project management & collaboration tool I developed with my friend "
                }
                <a
                  href="https://nicktrapp.com/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                >
                  Nick
                </a>
                .
              </p>
              <p>
                {
                  "Beyond code, I'm a sports enthusiast (although my favorite teams never seem to win!), experimental cook, gym aficionado, and virtual globe-trotter via Google Maps."
                }
              </p>
              <p>
                {
                  "If you want to get in touch, feel free to connect with me on "
                }
                <a
                  href="http://linkedin.com/in/kpulgari/"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                >
                  LinkedIn
                </a>
                {" or shoot me an "}
                <a
                  href="mailto:kaushikpulgari@yahoo.com"
                  target="_blank"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                >
                  email!
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-12">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold lg:text-2xl md:text-2xl text-xl text-gray-900 dark:text-white">
            Education
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col space-y-3">
              <div className="justify-between w-full flex items-center">
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
                          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
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
                <div className="text-right">
                  <div className="text-xs lg:text-sm md:text-sm font-medium text-gray-900 dark:text-white">
                    Aug. 2021 - May 2025
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    GPA: 3.98/4.00
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                Relevant Coursework: Data Structures & Algorithms, Computer
                Architecture, Database Systems, Machine Learning, Distributed
                Systems, Cloud Computing Applications
              </div>
              <div className="flex-wrap flex flex-row gap-2">
                <div className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                  Magna Cum Laude
                </div>
                <div className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                  Phi Beta Kappa
                </div>
                <div className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
                  ACM
                </div>
                <div className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300">
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
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex flex-col space-y-3">
                  <div className="justify-between w-full flex items-center">
                    <div>
                      <div className="flex flex-row space-x-3 items-center">
                        {w["image"]}
                        <div>
                          <div className="font-bold lg:text-sm md:text-sm text-xs flex-row flex items-center space-x-2 text-gray-900 dark:text-white">
                            <div>{w["name"]}</div>
                            <a
                              href={w["link"]}
                              target="_blank"
                              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
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
                    <div className="text-right">
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
                    {w["tags"].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300"
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
              className="flex flex-col border-lightAccent/25 border dark:border-gray-100/20 rounded-t-lg hover:shadow-md transition-shadow duration-200 overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="lg:h-56 md:h-80 h-64 flex items-center justify-center overflow-hidden">
                <img
                  src={project.screenshot}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg">{project["name"]}</h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {project["description"]}
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project["tags"].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-lightAccent/10 dark:bg-gray-200/10 px-2.5 py-1 font-medium rounded-md text-xs text-gray-700 dark:text-gray-300"
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
  );
};

export default Page;

import kpulgari from "./assets/kpulgari.jpeg";
import cohesity from "./assets/cohesity_logo.jpeg";
import schwab from "./assets/schwab.png";
import mortgage_connect from "./assets/mortgage_connect.jpeg";
import modulo from "./assets/modulo.png";
import ifi from "./assets/ifi-terminal.jpg";
import smartshopper from "./assets/smart-shopper.png";
import wikipedia from "./assets/wikipedia-thumbnail.png";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from "react-icons/fa";

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
    link: "https://drive.google.com/file/d/1R_bz7D0mY6owGwnKIOlEqJ0Qwzz4v9Gc/view",
  },
];

const work = [
  {
    name: "Cohesity",
    role: "SWE Intern",
    dates: "May 2024 - Present",
    location: "San Jose, CA",
    description:
      "I am currently developing a Python microservice for scraping data from multi-node clusters. Alongside this, I am building a Grafana dashboard with customizable panels aimed at reducing debugging time and enhancing developer productivity.",
    image: <img src={cohesity} className="w-8 h-8 rounded-lg"></img>,
    tags: ["Python", "PostgreSQL", "Grafana", "AWS RDS"],
  },
  {
    name: "Charles Schwab",
    role: "SWE Intern",
    dates: "Jun. 2023 - Aug. 2023",
    location: "St. Louis, MO",
    description:
      "I improved the user experience during the TDA-Schwab merger by optimizing ASP.NET and Angular.js applications which handle over 20,000 users per minute. I integrated a new logging library and created unit tests to increase code coverage and reduce bugs in frontend and backend systems.",
    image: <img src={schwab} className="w-8 h-8 rounded-lg"></img>,
    tags: ["ASP.NET", "Angular.js", "C#", "JavaScript"],
  },
  {
    name: "Mortgage Connect",
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
      "Modulo is a global collaboration platform with tools for task management, roadmapping, and AI-assisted communication. It streamlines work for individual creators and distributed teams.",
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
      "SmartShopper is an AI-powered grocery shopping app featuring SmartSearch, which fetches related items for recipes and categories using natural language queries.",
    tags: ["React.js", "TypeScript", "Flask", "Tailwind CSS", "Supabase"],
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
      "IFI Terminal provides real-time financial data using APIs like yFinance and Finnhub. It displays customizable tables and modules for comprehensive market insights.",
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
      "C++ program that analyzes Wikipedia's connectivity with BFS, IDDFS, and PageRank algorithms using the SNAP Dataset. It demonstrates large-scale data processing and graph traversal algorithms.",
    tags: ["C++", "Catch2"],
  },
];

const Page = () => {
  return (
    <main className="flex flex-col items-center mb-8">
      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-8">
        <div className="w-full flex flex-row justify-left items-center lg:space-x-16 md:space-x-12 space-x-8">
          <img
            src={kpulgari}
            className="rounded-full lg:w-36 lg:h-36 md:w-36 md:h-36 w-28 h-28"
          ></img>
          <div className="text-left space-y-2">
            <div className="space-y-1">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
                Kaushik Pulgari
              </h1>
              <p className="lg:text-sm md:text-sm text-xs">
                {"SWE Intern @ Cohesity | CS + Economics @ UIUC '25"}
              </p>
            </div>
            <div className="flex flex-row items-center justify-left space-x-2">
              {buttons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border p-2 rounded-md text-sm hover:bg-gray-200/40 transition-colors duration-200 cursor-pointer"
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
      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold lg:text-2xl md:text-2xl text-xl border border-b-1 border-l-0 border-t-0 border-r-0">
            About
          </h2>
          <div className="flex flex-row items-center justify-left text-sm">
            <div>
              <span>
                {
                  "Hey! 👋 I'm Kaushik, a senior studying Computer Science + Economics at the University of Illinois Urbana-Champaign with experience in developing and testing software. "
                }
              </span>
              <br /> <br />
              <span>
                {
                  "I am currently an intern on the Performance Team at Cohesity, where I'm building an internal tool to expedite the debugging process for developers. "
                }
              </span>
              <br /> <br />
              <span>
                {
                  "When I'm not busy with work or school, I like to spend my time building stuff like "
                }
                <a
                  href="https://projectmodulo.com/"
                  target="_blank"
                  className="underline underline-offset-2 font-semibold"
                >
                  Modulo
                </a>
                {
                  " - a project management & collaboration tool I developed with my friend "
                }
                <a
                  href="https://nicktrapp.com/"
                  target="_blank"
                  className="underline underline-offset-2 font-semibold"
                >
                  Nick
                </a>
                {" - which help creators connect with others across the world."}
              </span>
              <br /> <br />
              <span>
                {
                  "Beyond code, I'm a sports enthusiast (although my favorite teams never seem to win!), experimental cook, gym aficionado, and virtual globe-trotter via Google Maps. "
                }
              </span>
              <br /> <br />
              <span>
                {
                  "If you want to get in touch, feel free to connect with me on LinkedIn or shoot me a message via email!"
                }
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold lg:text-2xl md:text-2xl text-xl border border-b-1 border-l-0 border-t-0 border-r-0">
            Experience
          </h2>
          <div className="flex flex-row items-center justify-center flex-wrap space-y-2">
            {work.map((w, index) => (
              <div key={index} className="py-2 w-full rounded-md text-sm">
                <div className="flex flex-col space-y-2">
                  <div className="justify-between w-full flex items-center">
                    <div>
                      <div className="flex flex-row space-x-2 items-center">
                        {w["image"]}
                        <div>
                          <div className="font-bold">{w["name"]}</div>
                          <div className="text-xs text-gray-500 italic">
                            {w["role"]}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs lg:text-sm md:text-sm font-bold">
                        {w["dates"]}
                      </div>
                      <div className="text-xs text-gray-500 italic">
                        {w["location"]}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm">{w["description"]}</div>
                  <div className="flex-wrap flex flex-row gap-2 text-xs">
                    {w["tags"].map((tag, index) => (
                      <div
                        key={index}
                        className="bg-gray-200/75 px-2 py-1 rounded-md"
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
      <section className="lg:w-1/2 md:w-3/4 w-[90%] mt-8">
        <h2 className="font-bold lg:text-2xl md:text-2xl text-xl border border-b-1 border-l-0 border-t-0 border-r-0 mb-4">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg overflow-hidden"
            >
              <div className="lg:h-48 md:h-80 h-56we flex items-center justify-center p-2 bg-gray-200/75 rounded-lg">
                <img
                  src={project["screenshot"]}
                  alt="project screenshot"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex-1 mt-2">
                <h3 className="font-bold text-lg mb-2">{project["name"]}</h3>
                <p className="text-sm mb-4">{project["description"]}</p>
                <div className="flex flex-wrap gap-2">
                  {project["tags"].map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-200 px-2 py-1 rounded-md text-xs"
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
    </main>
  );
};

export default Page;

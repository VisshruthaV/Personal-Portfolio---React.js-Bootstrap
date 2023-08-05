import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

    const filters = {
    BDA: "Data & Business Analytics",
    SWE: "Software Engineering",
    PM: "Product Management & Design",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "OPMC Responsive Website",
      type: types.DOCUMENT,
      document: {
        projectInfo: "With most UWindsor clubs having club pages that social media account pages, I had set OPMC apart by creating, developing, and launching our very own responsive & analytics-integrated website that showcases the technological talent that we possess and want to attract. This website has helped OPMC become 1 of 5 official Product Management clubs in Canada, attracted 250+ members, and garnered the attention of Halight Inc.'s Director of Product Management, Sean Bridgeman!",
        client: "Odette Product Management Club UWindsor",
        technologies: "HTML5, CSS, JavaScript, Figma, Google Analytics, Kanban",
        industry: "Technology & IT Consulting",
        date: "Aug 2022 - Oct 2023",
        url: {
          name: "Github Project Repo",
          link: "https://github.com/VisshruthaV/Odette-PM-Club-Website",
        },

        sliderImages: [
          "images/projects/opmc_swe_slider.gif",
        ],
      },

      thumbImage: "images/projects/opmc_demo.gif",

      categories: [filters.SWE],
    },
    {
      title: "Acuitii Mobile App",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "As an SWE intern, I developed and optimized the frontend & backend of the Acuitii mobile app, an educational app that gamifies learning through quizzes, puzzles, and competitions. Among the many features found on the app, I contributed by:",
          projectInfo2: <ul>
              <li>Implementing the Original mode / Leitner mode toggle button to allow users to specify the mode in which they want to be quizzed on a set.</li>
              <li>Developing Leitner mode algorithms for quiz sets that the user combined together, also known as master sets. </li>
              <li>Optimizing the app to reduce load-time by 75% (2 seconds to 0.5 seconds).</li>
          </ul>,
        client: "Acuitii",
        technologies: "Dart, Flutter, Firebase Firestore Database, iOS, Android, Trello",
        industry: "Information Technology - Healthcare",
        date: "Sep 2021 - Dec 2021",
        url: {
          name: "Download the Acuitii Mobile App",
          link: "https://www.acuitii.life/app",

        },

        sliderImages: [
            "images/projects/acuitii_slider.gif",
          "images/projects/acuitii_mode.png",
        ],
       
      },

      thumbImage: "images/projects/acuitii_demo.gif",

      categories: [filters.SWE],
    },
    {
      title: "WSU Degree Scheduler Mobile App",
      type: types.DOCUMENT,
      document: {
        projectInfo: "Aiming to make class schedule plans and degree completion roadmaps more convenient for Wayne State University students, I created and developed the frontend & backend of the Degree Scheduler Mobile App, that imports course & counselor data from the WSU website to allow students to:",
        projectInfo2: <ul>
              <li>Create & authenticate an account</li>
              <li>Search for classes & class info </li>
              <li>Create multiple class schedules / plans</li>
              <li>Download class schedules onto their phones </li>
              <li>Contact & send emails to WSU counselors </li>
          </ul>,
        client: "Wayne State University Registrar",
        technologies: "Java, SQL, CSS, Firebase Authentication, Android, Miro",
        industry: "Information Technology - Education",
        date: "Jan 2021 - May 2021",
        url: {
          name: "Github Project Repo",
          link: "https://github.com/VisshruthaV/Java-SQL-Project---DegreeScheduler-Mobile-App",
        },

        sliderImages: [
          "images/projects/degsched_slider.gif",
        ],
      },
      thumbImage: "images/projects/degsched_demo.gif",

      categories: [filters.SWE],
    },
    {
      title: "R Project - Canadian Internet Use Analysis",
      type: types.DOCUMENT,
      document: {
        projectInfo: "Using R, I analyzed and created a Canadian Internet-Use Predictor by exploring the relationship between internet use and various Canadian demographic characteristics using exploratory, predictive, and statistical data analysis in order to predict the internet usage of a given Canadian person's profile. This project helped reinforce my skills in hypothesis testing, chi-squared testing, random forest modeling, decision tree modeling, correlation matrix modeling, data cleaning, and data visualization.",
        client: "Odette Consulting Group",
        technologies: "R, R Markdown, Excel",
        industry: "Analytics & Technology - Consulting",
        date: "Sep 2022 - Dec 2022",
        url: {
          name: "Github Project Repo",
          link: "https://github.com/VisshruthaV/R-Project---Canadian-Internet-Use-Analysis",
        },

        sliderImages: [
          "images/projects/r_slider.gif",
          "images/projects/r_ques.png",
          "images/projects/r_dec_tree.png",
          "images/projects/r_correlation.png",
        ],
      },

      thumbImage: "images/projects/r_demo.gif",
      categories: [filters.BDA],
    },
    {
      title: "Tableau Project - US Unemployment & Wage Analysis",
      type: types.DOCUMENT,
      document: {
        projectInfo: "Using Tableau, I analyzed large datasets to explore the relationship between minimum wage and unemployment rates by state in the U.S. using exploratory and predictive data analysis to predict the outcome of unemployment given a particular minimum wage rate.  I also used ETL / ELT techniques for two different data sources by web-scraping and transforming the data using R, leading to one focused dataset for cross-analysis. This project helped reinforce my skills in data cleaning, data visualization, dashboard reporting, and story-telling.",
        client: "Aspire Career UWindsor",
        technologies: "Tableau, R, Excel",
        industry: "Analytics & Technology - Consulting",
        date: "Sep 2022 - Dec 2022",
        url: {
          name: "Github Project Repo",
          link: "https://github.com/VisshruthaV/Tableau-Project---US-Unemployment-Analysis",
        },
        sliderImages: [
          "images/projects/tab_slider.gif",
          "images/projects/tab_intro.png",
          "images/projects/tab_trends.png",
          "images/projects/tab_conc.png",
          "images/projects/tab_ppt.png",
          "images/projects/tab_ppt2.png",
        ],
      },
      thumbImage: "images/projects/tab_demo.gif",
      categories: [filters.BDA],
    },
    {
      title: "OPMC Product Prototypes & Backlog Tracking",
      type: types.DOCUMENT,
      document: {
        projectInfo: "As Director of Technology & Product Owner, I took the OPMC website from a static product to an automated, data-driven, and dynamic product by creating and implementing Google Analytics functionalities. I also led the tech team (consisting of 4 other members) through the product development life-cycle with SDLC tools under an agile environment, leading to an 80% reduction in manual tracking and improved UI/UX. I worked on:",
        projectInfo2: <ul>
              <li>Product Prototyping (Figma wireframe & mock-ups)</li>
              <li>Product & Work Breakdown Structures / Roadmaps</li>
              <li>Product Backlog Tracking</li>
              <li>Metrics & KPI Analysis</li>
              <li>A/B & QA Testing</li>
              <li>Leading daily stand-ups, iteration planning, and sprint retrospective meetings</li>

          </ul>,
        client: "Odette Product Management Club UWindsor",
        technologies: "Figma, Notion, Google Analytics, Google Tag Manager, Hubspot API, Kanban",
        industry: "Technology & IT Consulting",
        date: "Oct 2022 - July 2023",
        url: {
          name: "OPMC Notion Page",
          link: "https://vi-velumani.notion.site/OPMC-Website-PBS-WBS-Metrics-2bf6ecbc728b488abcbb25241c447e91",
        },

        sliderImages: [
            "images/projects/opmc_pm_slider.gif",
            "images/projects/opmc_kanban.gif",
            "images/projects/opmc_PBS.png",
         
        ],
      },

      thumbImage: "images/projects/opmc_pm_demo.gif",

      categories: [filters.PM],
    },


  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            My Best Work
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className=""
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">{project?.categories}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;

import React from "react";
import resumeFile from "../documents/Resume_VisshruthaVelumani.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "Jan 2022 - May 2023",
      title: "Master of Management in Business Data Analytics",
      place: "University of Windsor",
      descHead: "Relevant Courses: ",
      desc:
            <ul>
                <li>Data Analytic Methods & Algorithms</li>
                <li>Data Acquisition & Management </li>
                <li>Predictive Modeling & Decision Making </li>
                <li>Quantitative & Statistical Analytics </li>
            </ul>,
      descHead2: "Clubs / Organizations ",
      desc2:
            <ul>
                <li>Odette Product Management Club</li>
                <ul>
                  <li>Founded and Established UWindsor's 1st Product Management Club</li>
                </ul>,
            </ul>,
    },
    {
      yearRange: "Sep 2018 - Dec 2021",
      title: "Bachelor of Science in Computer Science",
      place: "Wayne State University",
      descHead: "Relevant Courses: ",
      desc:
            <ul>
                <li>Software Engineering</li>
                <li>Data structures & algorithms </li>
                <li>Database Management (SQL & PHP)</li>
                <li>Operating Systems (Linux & Shell)</li>
                <li>Engineering Statistics, Calculus, & Linear Algebra</li>
            </ul>,
      descHead2: "Distinctions / Awards: ",
      desc2:
            <ul>
                <li>2019 WSU Dean's List</li>
                <li>2020 WSU Dean's List</li>
            </ul>,
    },
  ];

  {/* const certificationsDetails = [
        {
            yearRange: "Jan 2023",
            title: "Google Cloud Platform Digital Leader",
            org: "Google Cloud",
            pic:
                <a href="https://www.credential.net/633ea8e5-c007-4cdc-a3a2-26187d25f086?key=a5b78542116149999da23570c01a64069b152832361094514642bf1f58772f3b" target="_blank"><img
                    className="img-fluid wow heartBeat" data-wow-delay="1.3s"
                    src="images/gcp_badge.png"
                    title="GCP Badge"
                    alt="GCP Badge"
                />
                </a>,
        },
    ]; */}

    const experienceDetails = [
    {
      yearRange: "Jan 2024 - Present",
      title: "Product Manager",
      place: "Siemens Canada - RuggedCom",
      descHead: "Key Achievements: ",
      desc:
            <ul>
                <li>Globally managed the ROS software for Ruggedcom's Layer 2 devices </li>
                <li>Delivered 5 ROS SW release versions (1 major and 4 minor) </li>
                <li>Conducted life-cycle planning & product backlog grooming for the ROS product line </li>
                <li>Forecasted and oversaw Ruggedcom's component end-of-life processes </li>
                <li>Led and published ROS & ROX's IEC 62443-4-2 declaration of conformity documents </li>
            </ul>,
            
    },
    {
      yearRange: "Oct 2022 - Aug 2023",
      title: "Director of Technology & Product Owner",
      place: "Odette Product Management Club",
      descHead: "Key Achievements: ",
      desc:
            <ul>
                <li>Created and launched the club's data analytics functionalities</li>
                <li>Reduced manual website tracking by 80% </li>
                <li>Decreased customer churning by 40% </li>
                <li>Increased feature-release productivity from 1 a week to 2 a week </li>
                <li>Resolved painpoints by tracking product backlogs & conducting A/B testing</li>
            </ul>,
    },
    {
      yearRange: "Aug 2022 - Oct 2022",
      title: "Software Product Portfolio Consultant & Developer",
      place: "Odette Product Management Club",
      descHead: "Key Achievements: ",
      desc:
            <ul>
                <li>Created, developed, and launched the club website as the sole developer </li>
                <li>Skyrocketed club outreach rates by 400% in 2.5 weeks</li>
                <li>Improved UI/UX to maximize scroll and click rates </li>
                <li>Multiplied website traffic by 25%-35% each week </li>
                <li>Got promoted to the Director of Technology & Product Owner </li>
            </ul>,
    },
    {
      yearRange: "Sep 2021 - Dec 2021",
      title: "Software Engineering Intern",
      place: "Acuitii",
      descHead: "Key Achievements: ",
      desc:
           <ul>
                <li>Resolved 8 bugs and added 4 new game features in 4 months </li>
                <li>Optimized & reduced app run-time by 75% (2 sec. to 0.5 sec.)</li>
            </ul>,
    },
  ];

  const skills = [
    {
      name: "Python",
      percent: 85,
    },
    {
      name: "SQL",
      percent: 95,
    },
    {
      name: "R",
      percent: 75,
    },
    {
      name: "Java",
      percent: 80,
    },
    {
      name: "C++",
      percent: 75,
    },
    {
      name: "React.js",
      percent: 75,
      },
    {
      name: "Tableau",
      percent: 95,
    },
    {
      name: "Google Analytics",
      percent: 90,
    },
    {
      name: "Frontend & Backend Development",
      percent: 90,
    },
    {
      name: "Predictive Data Modeling",
      percent: 95,
    },
    {
      name: "SDLC Tools: Jira, Rally, Trello, Kanban",
      percent: 95,
    },
    {
      name: "Agile Product Development",
      percent: 95,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume / Skills</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A Shortened Summary Of My Resume
        </h2>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download My Detailed Resume
          </a>
        </p>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2"><span className="shadow-sm">My Education</span></h2>
            <div className="border-start border-3 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                        </p>
                    <p className="text-muted text-3">{value.descHead}</p>
                    <p className="text-muted text-1">{value.desc}</p>
                    <p className="text-muted text-3">{value.descHead2}</p>
                    <p className="text-muted text-1">{value.desc2}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
            {/* <h2 className="text-7 fw-600 mb-4 pb-2"><span className="shadow-sm">My Certifications</span></h2>
            <div className="border-start border-3 border-primary ps-3">
              {certificationsDetails.length > 0 &&
                certificationsDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title} - {value.yearRange}</h3>
                    <p className="text-center">{value.pic}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div> */}
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2"><span className="shadow-sm">My Experience</span></h2>
            <div className="border-start border-3 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                        </p>
                    <p className="text-muted text-3">{value.descHead}</p>
                    <p className="text-muted text-1">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        
      </div>
    </section>
  );
};

export default Resume;

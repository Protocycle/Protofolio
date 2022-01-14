import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AboutMe } from '../subcomponents/Bio/AboutMe';
import { Resume } from '../subcomponents/Bio/Resume';

export const About = () => {
  const sections = {
    about: 0,
    resume: 1,
  };
  const [tabSelected, tabSelection] = useState(sections.about);
  const [about, setAbout] = useState();
  const [resume, setResume] = useState();

  const loadAbout = async () => {
    let aboutData;
    if (sessionStorage.getItem("aboutData"))
      aboutData = JSON.parse(sessionStorage.getItem("aboutData"));

    else {
      aboutData = (await axios.get(`/api/bio/about/1`)).data;
      sessionStorage.setItem("aboutData", JSON.stringify(aboutData));
    }
    setAbout(aboutData);
  };

  const loadResume = async () => {
    let resumeData;
    if (sessionStorage.getItem("resumeData")) {
      resumeData = JSON.parse(sessionStorage.getItem("resumeData"));
    }

    else {
      resumeData = (await axios.get(`/api/bio/resume/1`)).data;
      sessionStorage.setItem("resumeData", JSON.stringify(resumeData));
    }

    setResume(resumeData);
  }


  // get about and resume data from database
  useEffect(() => {
    loadAbout();
    loadResume();
  }, []);

  return (
    <section id="About" className="container is-fullhd">
      <div className="tabs is-centered is-size-5">
        <ul>
          <li className={"border-bottom" + (tabSelected === sections.about ? " border-red text-red" : " border-silver text-white")}>
            <a onClick={() => tabSelection(sections.about)}>About</a>
          </li>

          <li className={"border-bottom" + (tabSelected === sections.resume ? " border-red text-red" : " border-silver text-white")}>
            <a onClick={() => tabSelection(sections.resume)}>Resume</a>
          </li>
        </ul>
      </div>

      {
        tabSelected === sections.about ?
          about && <AboutMe about={about} /> :
          resume && <Resume resume={resume} />
      }
    </section>
  );
}

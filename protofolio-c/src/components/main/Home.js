import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AboutMe } from '../subcomponents/Bio/AboutMe';
import { Resume } from '../subcomponents/Bio/Resume';

//const baseUrl = "http://localhost:9000";

export const Home = () => {
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
    <div className="container is-fullhd">
      <div className="tabs is-centered is-size-5">
        <ul>
          <li className={tabSelected === sections.about ? "is-active" : ""}><a onClick={() => tabSelection(sections.about)}>About</a></li>
          <li className={tabSelected === sections.resume ? "is-active" : ""}><a onClick={() => tabSelection(sections.resume)}>Resume</a></li>
        </ul>
      </div>
      
      <div className="tab-content box has-text-black">
        {
          tabSelected === sections.about
          ?
          about && <AboutMe about={about} />
          :
          resume && <Resume resume={resume}/>
        }
      </div>
    </div>
  );
}

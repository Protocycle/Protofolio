import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AboutMe } from '../subcomponents/AboutMe';
import { Apps } from '../subcomponents/Apps';
import { Resume } from '../subcomponents/Resume';

const baseUrl = "http://localhost:9000";

export const Home = () => {
  const sections = {
    about: 0,
    resume: 1,
    apps: 2
  };
  const [tabSelected, tabSelection] = useState(sections.about);
  const [about, setAbout] = useState();
  const [resume, setResume] = useState();

  const loadAbout = async () => {
    const aboutData = (await axios.get(`${baseUrl}/api/bio/about/1`)).data;
    setAbout(aboutData);
  };

  const loadResume = async () => {
    const resumeData = (await axios.get(`${baseUrl}/api/bio/resume/1`)).data;
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
          <li className={tabSelected === sections.apps ? "is-active" : ""}><a onClick={() => tabSelection(sections.apps)}>Apps</a></li>
        </ul>
      </div>
      <div className="tab-content box has-text-black">
        {
          tabSelected === sections.about
          ?
          about && <AboutMe about={about} />
          :
          tabSelected === sections.resume
          ?
          resume && <Resume resume={resume}/>
          : 
          <Apps />
        }
      </div>
    </div>
  );
}
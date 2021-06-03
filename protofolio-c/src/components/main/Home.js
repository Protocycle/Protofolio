import React, { useState } from 'react';
import { AboutMe } from '../subcomponents/AboutMe';
import { Apps } from '../subcomponents/Apps';
import { Resume } from '../subcomponents/Resume';
const sections = {
  about: <AboutMe />,
  resume: <Resume />,
  apps: <Apps />
};
export const Home = () => {
  const [tabSelected, tabSelection] = useState(sections.about);
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
          tabSelected
        }
      </div>
    </div>
  );
}
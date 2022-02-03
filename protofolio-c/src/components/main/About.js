import React, { useEffect, useState } from 'react';

import { AboutMe } from '../subcomponents/Bio/AboutMe';
import { Resume } from '../subcomponents/Bio/Resume';

const url = "http://nassirdajer.xyz"

export const About = () => {
  const sections = {
    about: {
      id: "About",
      scene: AboutMe
    },
    resume: {
      id: "Resume",
      scene: Resume
    }
  };
  const [view, setView] = useState(sections.about);



  return (
    <section id="about" className="container is-fullhd is-align-self-flex-start">
      <div className="tabs is-centered is-size-5">
        <ul>
          {Object.values(sections).map(section => (
            <li key={section.id} className={"border-bottom" + (view.id === section.id ? " border-red text-red" : " border-silver text-white")}>
              <a onClick={() => setView(section)}>{section.id}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="is-align-self-center">
        {<view.scene url={url}/>}
      </div>
    </section>
  );
}

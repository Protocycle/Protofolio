import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AboutMe = (props) => {
  const [about, setAbout] = useState(null);
  const {url} = props;

  const loadAbout = async () => {
    let aboutData = sessionStorage.getItem("aboutData");
    if (aboutData)
      aboutData = JSON.parse(sessionStorage.getItem("aboutData"));

    else {
      aboutData = (await axios.get(`${url}/api/bio/about/1`)).data;
      if (aboutData)
        sessionStorage.setItem("aboutData", JSON.stringify(aboutData));
    }

    if (aboutData) {
      Object.values(aboutData.summary).forEach((val) => val.sort((line1, line2) => line1[0] > line2[0]));
      setAbout(aboutData);
    }
  };

  useEffect(() => {
    loadAbout();
  }, [])

  return (
    <div className="box background-transparent">
      {about &&
        <div className="columns text-white">
          <div className="column">
            <img style={{ borderRadius: "6px" }} src={about.summary.profile} alt="Nassir Dajer" />
          </div>

          <div className="column has-text-justified is-three-fifths">
            {(about.summary.intro && about.summary.content && about.summary.conclusion) &&
              <div className="about-container is-size-5">
                <div className="about-intro">
                  <p>
                    {about.summary.intro.map((p) => (
                      <span key={p[0]}>{p[1]} <br /></span>
                    ))}
                  </p>
                </div>

                <br />

                <div className="about-content">
                  <p>
                    {about.summary.content.map((p) => (
                      <span key={p[0]}>{p[1]} <br /><br /></span>
                    ))}
                  </p>

                </div>

                <div className="about-conclusion">
                  <p>
                    {about.summary.conclusion.map((p) => (
                      <span key={p[0]}>{p[1]} <br /><br /></span>
                    ))}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>
      }
   </div>
  )
}
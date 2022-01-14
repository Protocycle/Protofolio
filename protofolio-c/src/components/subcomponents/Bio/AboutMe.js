import React from 'react';

export const AboutMe = (props) => {
  const intro = [...props.about.summary.intro].sort((line1, line2) => line1[0] > line2[0]);
  const content = [...props.about.summary.content].sort((line1, line2) => line1[0] > line2[0]);
  const conclusion = [...props.about.summary.conclusion].sort((line1, line2) => line1[0] > line2[0]);
  const profile = props.about.pp;
  // const person = {
  //   name: props.about.name,
  //   dob: props.about.dob,
  //   pob: props.about.pob,
  //   nationality: props.about.nationality
  // }

  return (
    <div className="columns text-white">

      {profile &&
        <div className="column">
          <img style={{ borderRadius: "6px" }} src={profile} alt="Nassir Dajer" />
        </div>
      }

      <div className="column has-text-justified is-three-fifths">
        {(intro && content && conclusion) &&
          <div className="about-container is-size-5">
            <div className="about-intro">
              <p>
                {intro.map((p) => (
                  <span key={p[0]}>{p[1]} <br /></span>
                ))}
              </p>
            </div>

            <br />

            <div className="about-content">
              <p>
                {content.map((p) => (
                  <span key={p[0]}>{p[1]} <br /><br /></span>
                ))}
              </p>

            </div>

            <div className="about-conclusion">
              <p>
                {conclusion.map((p) => (
                  <span key={p[0]}>{p[1]} <br /><br /></span>
                ))}
              </p>
            </div>
          </div>
        }
      </div>
    </div>
  )
}
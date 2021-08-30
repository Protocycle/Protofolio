import React from 'react';
export const Resume = (props) => {
  const contact = props.resume.contact;
  const education = props.resume.education;
  const skills = props.resume.skills;
  const headline = props.resume.headline;

  return (
    <div className="box has-background-info-light px-6 container is-max-desktop">
      <br />

      {(contact && education && skills && headline) &&
        <main>
          <section title="Contact Info">
            <div className="has-text-centered">
              <div>
                <label className="is-size-2">{contact.name}</label>
              </div>

              <div className="columns is-centered">
                <span className="icon-text column is-narrow" title="E-mail">
                  <span className="icon is-medium">
                    <i className="fas fa-envelope fa-lg"></i>
                  </span>
                  <span>{contact.email}</span>
                </span>

                <span className="icon-text column is-narrow" title="Location">
                  <span className="icon is-medium">
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                  </span>
                  <span>{contact.location}</span>
                </span>

                <span className="icon-text column is-narrow" title="Phone">
                  <span className="icon is-medium">
                    <i className="fas fa-mobile-alt fa-lg"></i>
                  </span>
                  <span>{contact.phone}</span>
                </span>

                <span className="icon-text column is-narrow" title="Languages">
                  <span className="icon is-medium">
                    <i className="fas fa-globe-americas fa-lg"></i>
                  </span>
                  <span>{contact.languages.join(" - ")}</span>
                </span>

                <span className="icon-text column is-narrow" title="GitHub">
                  <a className="links" target="_blank" href={contact.links.github}>
                    <span className="icon is-medium">
                      <i className="fab fa-github fa-lg"></i>
                    </span>
                    <span>GitHub</span>
                  </a>
                </span>
              </div>
            </div>
          </section>


          <br />

          <section title="Summary">
            <div className="has-text-centered">
              <span className="icon-text">
                <span className="icon">
                  <i className="fas fa-user-tie fa-lg"></i>
                </span>
                <label className="is-size-4">Summary</label>
              </span>
            </div>
            <p className="pt-3">
              {headline}
            </p>
          </section>

          <br />

          <section title="Education">
            <div className="has-text-centered">
              <span className="icon-text">
                <span className="icon">
                  <i className="fas fa-user-graduate fa-lg"></i>
                </span>
                <label className="is-size-4">Education</label>
              </span>
            </div>
            {education.schools.map(school => (
              <div title={school.institution} key={school.institution} className="pt-3">
                <label>
                  <b>{school.institution} | {school.date} | <i>{school.location}</i></b>
                </label>

                <ul className="px-6">
                  <li className="py-1">
                    {school.degree}
                  </li>
                  <li className="py-1">
                    <i>{school.distinction}</i> - GPA: {school.gpa}
                  </li>
                  <li className="py-1">
                    <b>Relevant Coursework</b>
                    <ul className="px-6">
                      {school.coursework.map(course => (
                        <li className="py-1" key={course}>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </div>
            ))}

            {education.bootcamps.map(bootcamp => (
              <div title={bootcamp.institution} key={bootcamp.institution} className="pt-3">
              <label>
                <b>{bootcamp.institution} | {bootcamp.date} | <i>{bootcamp.location}</i></b>
              </label>

              <ul className="px-6">
                <li className="py-1">
                  {bootcamp.degree}
                </li>

                <li className="py-1">
                  GPA: {bootcamp.gpa}
                </li>

                <li className="py-1">
                  <b>Relevant Coursework</b>
                  <ul className="px-6">
                    {bootcamp.coursework.map(course => (
                      <li className="py-1" key={course}>
                        {course}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            ))}
          </section>

          <br />

          <section title="Computer Skills">
            <div className="has-text-centered">
              <span className="icon-text">
                <span className="icon">
                  <i className="fas fa-code fa-lg"></i>
                </span>
                <label className="is-size-4">Computer Skills</label>
              </span>
            </div>
            <div className="columns pt-3 has-text-centered">
              <div title="Languages" className="column">
                <label>
                  <b>Languages</b>
                </label>

                <ul>
                  <li className="py-1">
                    {skills.technical.languages.programming.join(" - ")}
                  </li>

                  <li className="py-1">
                    {skills.technical.languages.web.join(" - ")}
                  </li>

                  <li className="py-1">
                    {skills.technical.languages.data.join(" - ")}
                  </li>
                </ul>
              </div>

              <div title="Frameworks" className="column">
                <label>
                  <b>Frameworks/Libraries/Platforms</b>
                </label>

                <ul>
                  {skills.technical.libraries.map(flp => (
                    <li className="py-1" key={flp}>
                      {flp}
                    </li>
                  ))}
                </ul>
              </div>

              <div title="Software" className="column">
                <label>
                  <b>Software</b>
                </label>

                <ul>
                  <li className="py-1">
                    {skills.technical.softwares.databases.join(" - ")}
                  </li>

                  <li className="py-1">
                    {skills.technical.softwares.platforms.join(" - ")}
                  </li>

                  <li className="py-1">
                    {skills.technical.softwares.ides.join(" - ")}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <br />
          <br />
        </main>
      }
    </div>
  )
}
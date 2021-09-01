import React from 'react';
export const Resume = (props) => {
  const contact = props.resume.contact;
  const education = props.resume.education;
  const skills = props.resume.skills;
  const headline = props.resume.headline;
  const jobs = props.resume.jobs;

  return (
    <div className="box has-background-info-light px-6 container is-max-desktop">
      <br />

      {(contact && skills && contact.name) &&
        <main>
          <section title="Contact Info">
            <div className="has-text-centered">
              {contact.name &&
                <div>
                  <label className="is-size-2">{contact.name}</label>
                </div>
              }

              <div className="columns is-centered">
                {contact.email &&
                  <span className="icon-text column is-narrow" title="E-mail">
                    <span className="icon is-medium">
                      <i className="fas fa-envelope fa-lg"></i>
                    </span>
                    <label>{contact.email}</label>
                  </span>
                }

                {contact.location &&
                  <span className="icon-text column is-narrow" title="Location">
                    <span className="icon is-medium">
                      <i className="fas fa-map-marker-alt fa-lg"></i>
                    </span>
                    <label>{contact.location}</label>
                  </span>
                }

                {contact.phone &&
                  <span className="icon-text column is-narrow" title="Phone">
                    <span className="icon is-medium">
                      <i className="fas fa-mobile-alt fa-lg"></i>
                    </span>
                    <label>{contact.phone}</label>
                  </span>
                }

                {contact.languages &&
                  <span className="icon-text column is-narrow" title="Languages">
                    <span className="icon is-medium">
                      <i className="fas fa-globe-americas fa-lg"></i>
                    </span>
                    <label>{contact.languages.join(" - ")}</label>
                  </span>
                }

                {contact.links.github &&
                  <span className="icon-text column is-narrow" title="GitHub">
                    <a className="links" target="_blank" href={contact.links.github}>
                      <span className="icon is-medium">
                        <i className="fab fa-github fa-lg"></i>
                      </span>
                      <label>GitHub</label>
                    </a>
                  </span>
                }
              </div>
            </div>
          </section>


          <br />

          {headline &&
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
          }

          <br />

          {(education && (education.schools || education.bootcamps)) &&
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
                school.institution && (
                  <div title={school.institution} key={school.institution} className="pt-3">
                    <label>
                      <b>{[school.institution, school.date, school.location].join(" | ")}</b>
                    </label>

                    <ul className="px-6">
                      <li className="py-1">
                        {school.degree}
                      </li>

                      <li className="py-1">
                        <i>{school.distinction}</i> {(school.distinction && school.gpa) && "-"} {school.gpa && `GPA: ${school.gpa}`}
                      </li>

                      {school.coursework &&
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
                      }
                    </ul>
                  </div>
                )
              ))}

              {education.bootcamps.map(bootcamp => (
                bootcamp.institution && (
                  <div title={bootcamp.institution} key={bootcamp.institution} className="pt-3">
                    <label>
                      <b>{[bootcamp.institution, bootcamp.date, bootcamp.location].join(" | ")}</b>
                    </label>

                    {(bootcamp.degree || bootcamp.coursework) &&
                      <ul className="px-6">
                        {bootcamp.degree &&
                          <li className="py-1">
                            {bootcamp.degree}
                          </li>
                        }

                        {bootcamp.coursework &&
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
                        }
                      </ul>
                    }
                  </div>
                )
              ))}
            </section>
          }

          <br />

          {(jobs && (jobs.freelance || jobs.employee)) &&
            <section title="Work Experience">
              <div className="has-text-centered">
                <span className="icon-text">
                  <span className="icon">
                    <i className="fas fa-briefcase fa-lg"></i>
                  </span>
                  <label className="is-size-4">Work Experience</label>
                </span>
              </div>

              {jobs.freelance.map(fl => (
                fl.entity && (
                  <div title={fl.entity} key={fl.entity} className="pt-3">
                    <label>
                      <b>{[fl.entity, fl.position, fl.date, fl.location].join(" | ")}</b>
                    </label>

                    {fl.activities &&
                      <ul className="px-6">
                        {fl.activities.map(activity => (
                          <li className="py-1">
                            {activity}
                          </li>
                        ))}
                      </ul>
                    }
                  </div>
                )
              ))}
            </section>
          }

          <br />

          {skills.technical &&
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
                {skills.technical.languages &&
                  <div title="Languages" className="column">
                    <label>
                      <b>Languages</b>
                    </label>

                    <ul>
                      {skills.technical.languages.programming &&
                        <li className="py-1">
                          {skills.technical.languages.programming.join(" - ")}
                        </li>
                      }

                      {skills.technical.languages.web &&
                        <li className="py-1">
                          {skills.technical.languages.web.join(" - ")}
                        </li>
                      }

                      {skills.technical.languages.data &&
                        <li className="py-1">
                          {skills.technical.languages.data.join(" - ")}
                        </li>
                      }
                    </ul>
                  </div>
                }

                {skills.technical.libraries &&
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
                }

                {skills.technical.software &&
                  <div title="Software" className="column">
                    <label>
                      <b>Software</b>
                    </label>

                    <ul>
                      <li className="py-1">
                        {skills.technical.software.databases.join(" - ")}
                      </li>

                      <li className="py-1">
                        {skills.technical.software.platforms.join(" - ")}
                      </li>

                      <li className="py-1">
                        {skills.technical.software.ides.join(" - ")}
                      </li>
                    </ul>
                  </div>
                }
              </div>
            </section>
          }

          <br />

        </main>
      }

      <br />

    </div>
  )
}
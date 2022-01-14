import React from 'react';
export const Resume = (props) => {
  const contact = props.resume.contact;
  const education = props.resume.education;
  const skills = props.resume.skills;
  const summary = props.resume.summary;
  const jobs = props.resume.jobs;
  const title = props.resume.title;
  const subtitles = props.resume.subtitles;

  return (
    <div className="container is-max-desktop">
      <div className="box text-white background-resume px-6">
        <ul className="social-media-icons">
          <li>
            <a className="button is-medium is-github" target="_blank" rel="noreferrer" href={contact.links.github}>
              <span className="icon">
                <i className="fab fa-github fa-lg"></i>
              </span>
            </a>
          </li>

          <li>
            <a className="button is-medium is-linkedin" target="_blank" rel="noreferrer" href={contact.links.linkedin}>
              <span className="icon">
                <svg class="svg-inline--fa fa-linkedin-in fa-w-14 fa-lg" aria-hidden="true" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 480H7.4V180.9h92.9V480zM53.8 140.1C24.1 140.1 0 115.5 0 85.8 0 56.1 24.1 32 53.8 32c29.7 0 53.8 24.1 53.8 53.8 0 29.7-24.1 54.3-53.8 54.3zM448 480h-92.7V334.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V480h-92.8V180.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V480z"></path></svg>
              </span>
            </a>
          </li>
        </ul>

        <br />

        {(Object.keys(contact).length > 0 && title.length > 0) &&
          <main>
            <section title="Contact Info">
              <div className="has-text-centered">
                {contact.name &&
                  <label className="is-size-2">{contact.name}</label>
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
                </div>
              </div>
            </section>

            <br />

            {(summary && title) &&
              <section title="Summary">
                <p className="has-text-centered has-text-weight-bold">
                  <label className="is-size-4 has-text-info">{title}<br /></label>
                  <label className="is-size-5">{subtitles.join(" | ")}</label>
                </p>

                <p className="pt-3">
                  {summary.headline}
                </p>

                <p className="pt-3 has-text-centered has-text-weight-bold">
                  {summary.general_skills.map(skill => (
                    <label>{skill.join(" - ")}<br /></label>
                  ))}
                </p>
              </section>
            }

            <br />

            {(skills.core.length > 0 && education) &&
              <section title="Education &amp; Training">
                <div className="has-text-centered has-text-info has-text-weight-bold">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fas fa-book-reader fa-lg"></i>
                    </span>
                    <label className="is-size-4">Education &amp; Training</label>
                  </span>
                </div>

                <div className="py-2 has-text-centered">
                  {education.schools.map(school => (
                    <div>
                      <label>
                        <span className="has-text-weight-bold">{school.degree}</span>
                        <span>, {school.institution}</span>
                        <span>, {school.location}</span>
                        <span className="is-italic">, GPA {school.gpa} ({school.distinction})</span>
                      </label>
                    </div>
                  ))}
                </div>

                <div className="py-2 has-text-centered background-know">
                  <div className="has-text-weight-bold"><label>Core Knowledge</label></div>
                  <p className="has-text-weight-semibold">
                    {skills.core.map(skill => (
                      <span>{skill.join(", ")}<br /></span>
                    ))}
                  </p>
                </div>

                <div className="py-2 mt-1 has-text-centered background-certs">
                  <div className="has-text-weight-bold">
                    <label>Certification &amp; Badges</label>
                  </div>
                  <p className="has-text-weight-semibold">
                    {education.certifications.map(cert => (
                      [`${cert.institution} ${cert.degree}`]
                    )).join(", ")}
                  </p>
                  <p className="has-text-weight-semibold">
                    LinkedIn Skill Assessments: {education.linkedin.join(", ")}
                  </p>
                </div>
              </section>
            }

            <br />

            {jobs.length > 0 &&
              <section title="Professional Experience">
                <div className="has-text-centered has-text-info has-text-weight-bold">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fas fa-briefcase fa-lg"></i>
                    </span>
                    <label className="is-size-4">Professional Experience</label>
                  </span>
                </div>

                {jobs.map(job => (
                  <div title={job.title} key={job.title} className="pt-3 has-text-justified">
                    <label className="has-text-weight-bold is-pulled-left">{job.title}</label>
                    <label className="has-text-weight-bold is-pulled-right">{job.date}</label>
                    <br />

                    <label className="has-text-info has-text-weight-semibold">{job.companies.join(" | ")}</label>
                    <br />

                    {job.headline && <span className="is-italic">{job.headline}</span>}
                    <br />

                    <div className="pt-1"><span>{job.description}</span></div>

                    {job.details && (
                      <ul className="px-6 pt-2">
                        {job.details.map(detail => (
                          <li>{detail}</li>
                        ))}
                      </ul>
                    )}

                    {job.timeline.length > 0 && (
                      job.timeline.map(tl => (
                        <ul className="px-6 pt-1">
                          <li className="pt-1">
                            <span className="has-text-weight-bold">{tl.position}</span>
                            <span>&nbsp;({tl.date})</span>
                          </li>
                          <li>{tl.company}</li>
                          <li className="is-italic">{tl.description}</li>
                        </ul>
                      ))
                    )}
                  </div>
                ))}
              </section>
            }

            <br />

          </main>
        }

        <br />
      </div>
    </div>
  )
}
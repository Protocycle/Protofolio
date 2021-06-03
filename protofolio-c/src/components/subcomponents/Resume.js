import React from 'react';
export const Resume = () => {
  return (
    <div className="box has-background-info-light px-6 container is-max-desktop">
      <br />
      <section title="Contact Info">
        <div className="has-text-centered">
          <div><span className="is-size-2">Nassir Dajer</span></div>
          <div className="columns is-centered">
            <span className="icon-text column is-narrow" title="E-mail">
              <span className="icon is-medium">
                <i className="fas fa-envelope fa-lg"></i>
              </span>
              <span>nassirdajer@gmail.com</span>
            </span>

            <span className="icon-text column is-narrow" title="Location">
              <span className="icon is-medium">
                <i class="fas fa-map-marker-alt fa-lg"></i>
              </span>
              <span>Austin, TX 78717</span>
            </span>

            <span className="icon-text column is-narrow" title="Phone">
              <span className="icon is-medium">
                <i className="fas fa-phone fa-lg"></i>
              </span>
              <span>786-474-5516</span>
            </span>

            <span className="icon-text column is-narrow" title="Languages">
              <span className="icon is-medium">
                <i className="fas fa-globe-americas fa-lg"></i>
              </span>
              <span>Spanish &amp; English</span>
            </span>
          </div>
        </div>
      </section>

      <br />

      <section title="Summary">
        <div className="has-text-centered">
          <span className="icon-text">
            <span className="icon">
              <i class="fas fa-user-tie"></i>
            </span>
            <span className="is-size-4">Summary</span>
          </span>
        </div>
        <p className="pt-3">
          B.S. in Information Technology graduate with a focus on software development.
          Extremely fast learner.
          Seeking to utilize my current knowledge, as well as expand it, to thrive as a software engineer.
        </p>
      </section>

      <br />
      <br />

      <section title="Education">
        <div className="has-text-centered">
          <span className="icon-text">
            <span className="icon">
              <i className="fa fa-university"></i>
            </span>
            <span className="is-size-4">Education</span>
          </span>
        </div>
        <div title="Florida International University" className="pt-3">
          <span><strong>Florida International University | Jan 2018 &mdash; Dec 2019 | <em>Miami, Florida</em></strong></span>
          <ul className="px-6">
            <li className="py-1">
              B.S. in Information Technology
            </li>
            <li className="py-1">
              <em>Summa Cum Laude</em> - GPA 3.9/4.0
            </li>
            <li className="py-1">
              <strong>Relevant Coursework</strong>
              <ul className="px-6">
                <li className="py-1">
                  Intermediate Java
                </li>
                <li className="py-1">
                  Website Construction and Management (HTML, CSS, JavaScript, SQL)
                </li>
                <li className="py-1">
                  Component-Based Software Development (Python)
                </li>
                <li className="py-1">
                  UNIX System Admin (CentOS 7)
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <br />

      <section title="Computer Skills" className="pt-3">
        <div className="has-text-centered">
          <span className="icon-text">
            <span className="icon">
              <i className="fas fa-code"></i>
            </span>
            <span className="is-size-4">Computer Skills</span>
          </span>
        </div>
        <div title="Languages" className="pt-3">
          <span><strong>Languages</strong></span>
          <ul className="px-6">
            <li className="py-1">
              Python - JavaScript - Java
            </li>
            <li className="py-1">
              HTML - CSS
            </li>
            <li className="py-1">
              JSON - SQL
            </li>
          </ul>
        </div>

        <div title="Frameworks" className="pt-3">
          <span><strong>Frameworks</strong></span>
          <ul className="px-6">
            <li className="py-1">
              ReactJS
            </li>
            <li className="py-1">
              ExpressJS
            </li>
          </ul>
        </div>

        <div title="Software" className="pt-3">
          <span><strong>Software</strong></span>
          <ul className="px-6">
            <li className="py-1">
              Databases: MySQL
            </li>
            <li className="py-1">
              Platforms: Windows 7/10 and Ubuntu
            </li>
            <li className="py-1">
              IDEs: Visual Studio Code, Visual Studio
            </li>
          </ul>
        </div>
      </section>

      <br />
      <br />

    </div>
  )
}
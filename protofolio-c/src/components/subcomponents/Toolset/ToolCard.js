import React from 'react';

export const ToolCard = (props) => {
  const { name, purpose, language, type, location, site, logo } = props.tools;

  console.log(logo);

  return (
    <div className="toolcard has-background-dark" style={{backgroundImage:`url(${logo})`}}>
      <div className="toolcard-header">
        <div className="columns is-vcentered is-flex">
          <div className="column"><label className="is-size-4">{name}</label></div>
          <div className="column has-text-right"><label>{location}</label></div>
        </div>

      </div>
      <div className="toolcard-body">

        <div className="toolcard-description">
          <div>
            <label>{language}</label>
          </div>

          <div>
            <label>{purpose}</label>
          </div>
        </div>
      </div>

      <div className="toolcard-footer">
        <a className="button background-transparent" href={site} target="_blank" rel="noreferrer">Visit {name}</a>
      </div>
    </div>
  );
}
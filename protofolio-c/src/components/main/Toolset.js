import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToolCard } from '../subcomponents/Toolset/ToolCard';
export const Toolset = () => {

  const baseUrl = "http://localhost:8080";

  const [toolset, setToolset] = useState();
  const loadToolset = async () => {
    let toolsetData;
    if (sessionStorage.getItem("toolsetData"))
      toolsetData = JSON.parse(sessionStorage.getItem("toolsetData"));

    else {
      toolsetData = (await axios.get(`${baseUrl}/api/toolset/1`)).data;
      sessionStorage.setItem("toolsetData", JSON.stringify(toolsetData));
    }
    setToolset(toolsetData);
    console.log(toolset)
  }

  // get toolset data from database
  useEffect(() => {
    loadToolset();
  }, []);


  return (
    <div className="container has-text-white maxw-1600 is-flex-touch is-flex-direction-column is-align-items-center px-4">
      {/* CONVERT TO CAROUSEL */}
      <section title="Frameworks" className="mt-4">
        <div className="mb-2">
          <label className="is-size-3">Frameworks</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.frameworks.map(fw => (
            <div key={fw.name}>
              <ToolCard tools={fw} />
            </div>
          ))}
        </div>
      </section>

      <section title="Libraries" className="mt-4">
        <div className="mb-2">
          <label className="is-size-3">Libraries</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.libraries.map(lb => (
            <div key={lb.name}>
              <ToolCard tools={lb} />
            </div>
          ))}
        </div>
      </section>

      <section title="Databases" className="mt-4">
        <div className="mb-2">
          <label className="is-size-3">Databases</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.databases.map(db => (
            <div key={db.name}>
              <ToolCard tools={db} />
            </div>
          ))}
        </div>
      </section>

      <section title="APIs" className="my-4">
        <div className="mb-2">
          <label className="is-size-3">APIs</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.apis.map(api => (
            <div key={api.name}>
              <ToolCard tools={api} />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
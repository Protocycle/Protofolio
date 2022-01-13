import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ToolCard } from '../subcomponents/Toolset/ToolCard';
export const Toolset = () => {

  const [toolset, setToolset] = useState();
  const loadToolset = async () => {
    let toolsetData;
    if (sessionStorage.getItem("toolsetData"))
      toolsetData = JSON.parse(sessionStorage.getItem("toolsetData"));

    else {
      toolsetData = (await axios.get(`/api/toolset/1`)).data;
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
            <ToolCard key={fw.name} tools={fw} />
          ))}
        </div>
      </section>

      <section title="Libraries" className="mt-4">
        <div className="mb-2">
          <label className="is-size-3">Libraries</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.libraries.map(lb => (
            <ToolCard key={lb.name} tools={lb} />
          ))}
        </div>
      </section>

      <section title="Databases" className="mt-4">
        <div className="mb-2">
          <label className="is-size-3">Databases</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.databases.map(db => (
            <ToolCard key={db.name} tools={db} />
          ))}
        </div>
      </section>

      <section title="APIs" className="my-4">
        <div className="mb-2">
          <label className="is-size-3">APIs</label>
        </div>

        <div className="toolcard-container">
          {toolset && toolset.apis.map(api => (
            <ToolCard key={api.name} tools={api} />
          ))}
        </div>
      </section>
    </div>
  )
}
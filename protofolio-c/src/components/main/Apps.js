import React, { useState } from 'react';
import { PokeRPS } from '../subcomponents/Apps/PokeRPS';

const apps = {
  "pokerps": <PokeRPS />,
}

export const Apps = () => {
  const [appSelected, appSelection] = useState(apps.pokerps)

  return (
    <section id="apps" className="container is-fullhd is-align-self-flex-start">
      <div className="tabs is-centered is-size-5">
        <ul>
          <li className={"border-bottom" + (appSelected === apps.pokerps ? " border-red text-red" : " border-silver text-white")}><a onClick={() => appSelection(apps.pokerps)}>PokeRPS</a></li>
        </ul>
      </div>

      {
        appSelected
      }
    </section>
  )
}
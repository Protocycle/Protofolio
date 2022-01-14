import React, { useState } from 'react';
import { PokeRPS } from '../subcomponents/Apps/PokeRPS';

const apps = {
  "pokerps": <PokeRPS />,
}

export const Apps = () => {
  const [appSelected, appSelection] = useState(apps.pokerps)

  return (
    <section id="Apps" className="container is-fullwidth">
      <div className="tabs is-centered is-size-5">
        <ul>
          <li className={"border-bottom" + (appSelected === apps.pokerps ? " border-red text-red" : " border-silver text-white")}><a onClick={() => appSelection(apps.pokerps)}>PokeRPS</a></li>
        </ul>
      </div>

      <div className="container background-transparent">
        {
          appSelected
        }
      </div>
    </section>
  )
}
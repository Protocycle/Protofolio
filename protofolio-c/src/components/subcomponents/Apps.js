import React, { useState } from 'react';
import { PokeRPS } from './Apps/PokeRPS';

const apps = {
  "pokerps": <PokeRPS />,
}

export const Apps = () => {
  const [appSelected, appSelection] = useState(apps.pokerps)
  
  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          <li className={appSelected === apps.pokerps ? "is-active" : ""}><a onClick={() => appSelection(apps.pokerps)}>PokeRPS</a></li>
        </ul>
      </div>
      <div className="tab-content">
        {
          appSelected
        }
      </div>
    </div>
  )
}
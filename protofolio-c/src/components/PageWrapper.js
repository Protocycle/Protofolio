import React from 'react';

export const PageWrapper = (props) => {
  return (
    <div>
      <nav className="navbar">PageWrapper: create navbar here</nav>
      {props.children}
    </div>
  )
}
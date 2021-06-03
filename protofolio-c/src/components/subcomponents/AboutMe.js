import React from 'react';
import me from '../../assets/images/me.jpg'

export const AboutMe = () => {
  return (
    <div className="box has-background-info-light">
      <div className="columns">
        <div className="column is-two-fifths">
          <img src={me} />
        </div>
        <div className="column has-text-justified">
          Hello and thanks for visiting! My name is Nassir Dajer, I am a {age()}-year-old Entry-Level Software Developer.
          I was born and finished H.S. in the Dominican Republic, then I went to Florida International University where I obtained my B.S. in Information Technology on December 2019.<br/><br/>

          You might wonder why I chose to study IT but presented myself as a Software Developer... well... I <strong>DID</strong> want to become an IT <em>at first</em>,
          but halfway through my career I took many programming courses as part of the curriculum and ended up loving coding more than being an IT! Silly, right?<br/>
          So I started to focus more on those courses but... they were lacking.
          As such, to compensate for that, I began taking courses on sites like Udemy (where I learned React and Express),
          and have been using HackerRank and LeetCode to improve my logical thinking!<br/><br />
          
          I want to become a great developer and learn as much as I can =)
        </div>
      </div>
    </div>
  )
}

const age = () => {
  const ageDifMs = Date.now() - new Date("01/01/1996").getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
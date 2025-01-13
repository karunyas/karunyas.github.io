import React from 'react';
import Scroll from '../common/Scroll';

const Introduction = () =>
  <section id="intro" className="wrapper style1 fullscreen fade-up">
    <div className="inner">
      <h1>Karunya Sethuraman</h1>
      <p>
        Hi, my name is Karunya Sethuraman, and I graduated from MIT with a S.B. & M.Eng in computer science in 2020. I currently work as a software engineer at Notion,
        In my spare time, I also sculpt.
        </p>
      <ul className="actions">
        <li>
          <Scroll type="id" element="one">
            <a href="#one" className="button">
              See More
            </a>
          </Scroll>
        </li>
      </ul>
    </div>
  </section>


export default Introduction;

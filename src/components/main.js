import React from 'react';
import SideBar from './sidebar';

const Main = () => (
  <div className="section">
    <div className="columns">
      <SideBar />
      <section className="column is-three-quarters">
        <div>Hello world!</div>
      </section>
    </div>
  </div>
);

export default Main;

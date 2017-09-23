import React from 'react';
import SideBar from './sidebar';
import Card from './card';

const Main = () => (
  <div className="section">
    <div className="columns">
      <SideBar />
      <div className="column is-three-quarters">
        <div className="columns is-multiline">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  </div>
);

export default Main;

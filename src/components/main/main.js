import React from 'react';
import Navbar from './navbar/navbar'
import Capacity from './capacity/capacity'
import Revenue from './revenue/revenue'
import Errors from './errors/errors'
import Followers from './followers/followers'
import Performance from './performance/performance'

function Main() {
  return (
    <div className="main-panel">
      <Navbar />
      <div className="content">

        <div className="row">
          <Capacity />
          <Revenue />
          <Errors />
          <Followers />


        </div>
        <div className="row">
        <Performance />

        </div>
      </div>
    </div>

  );

}

export default Main; 
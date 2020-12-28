import React from 'react';
import Navbar from './navbar/navbar'
import Capacity from './capacity/capacity'
import Revenue from './revenue/revenue'
import Errors from './errors/errors'
import Followers from './followers/followers'
import Performance from './performance/performance'
import Statistics from './statistics/statistics'
import Points from './point-model/points-model'

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
        <div className="row">
        <Statistics />
        <Points />

        </div>
      </div>
    </div>

  );

}

export default Main; 
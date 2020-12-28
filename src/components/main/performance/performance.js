import React from 'react';
import ChartComponent from './chart/chart'

function Performance() {
  return (
    <div  className="col-md-12">
    <div  className="card ">
      <div  className="card-header ">
        <h5  className="card-title">Users Behavior</h5>
        <p  className="card-category">24 Hours performance</p>
      </div>
      <div  className="card-body ">
        <ChartComponent/>
      </div>
      <div  className="card-footer ">
        <hr/>
        <div  className="stats">
          <i  className="fa fa-history"></i> Updated 3 minutes ago
        </div>
      </div>
    </div>
  </div>

  );

}

export default Performance; 
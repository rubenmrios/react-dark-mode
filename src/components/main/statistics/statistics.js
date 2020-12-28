import React from 'react';
import ChartComponent from './chart/chart'

function Statistics() {
  return (
    <div  className="col-md-4">
    <div  className="card ">
      <div  className="card-header ">
        <h5  className="card-title">Email Statistics</h5>
        <p  className="card-category">Last Campaign Performance</p>
      </div>
      <div  className="card-body ">
        <ChartComponent/>
      </div>
      <div  className="card-footer ">
      <div className="legend">
                  <i className="fa fa-circle text-primary"></i> Opened
                  <i className="fa fa-circle text-warning"></i> Read
                  <i className="fa fa-circle text-danger"></i> Deleted
                  <i className="fa fa-circle text-gray"></i> Unopened
                </div>
                <hr/>
                <div className="stats">
                  <i className="fa fa-calendar"></i> Number of emails sent
                </div>
      </div>
    </div>
  </div>

  );

}

export default Statistics; 
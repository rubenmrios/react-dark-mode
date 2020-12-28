import React from 'react';
import ChartComponent from './chart/chart'

function Points() {
  return (
    <div  className="col-md-8">
    <div  className="card ">
      <div  className="card-header ">
        <h5  className="card-title">NASDAQ: AAPL</h5>
        <p  className="card-category">Line Chart with Points</p>
      </div>
      <div  className="card-body ">
        <ChartComponent/>
      </div>
      <div className="card-footer">
                <div className="chart-legend">
                  <i className="fa fa-circle text-info"></i> Tesla Model S
                  <i className="fa fa-circle text-warning"></i> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check"></i> Data information certified
                </div>
              </div>
    </div>
  </div>

  );

}

export default Points; 
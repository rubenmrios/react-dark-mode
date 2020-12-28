import React from 'react';

function Capacity() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row ">
            <div className="col-5 col-md-4">
              <div className="icon-big text-center icon-warning">
              <i className="fa fa-globe" aria-hidden="true"></i>

              </div>
            </div>
            <div className="col-7 col-md-8">
              <div className="numbers">
              <p className="card-category">Capacity</p>
                      <p className="card-title">150GB</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer ">
          <hr />
          <div className="stats">
          <i className="fa fa-refresh" aria-hidden="true"></i>
       Update Now
                </div>
        </div>
      </div>
    </div>

  );

}

export default Capacity; 
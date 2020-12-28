import React from 'react';

function Revenue() {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div className="card card-stats">
        <div className="card-body ">
          <div className="row ">
            <div className="col-5 col-md-4">
              <div className="icon-big text-center icon-warning">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-cash-stack" viewBox="0 0 16 16">
  <path d="M1 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1H1zm7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/>
  <path d="M0 5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V7a2 2 0 0 1-2-2H3z"/>
</svg>
              </div>
            </div>
            <div className="col-7 col-md-8">
              <div className="numbers">
              <p className="card-category">Revenue</p>
                      <p className="card-title">$ 1,345</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer ">
          <hr />
          <div className="stats">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  className="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>        Last day
                </div>
        </div>
      </div>
    </div>

  );

}

export default Revenue; 
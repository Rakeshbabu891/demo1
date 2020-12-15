import React from "react";

const CardPreview = ({ user }) => (
  <div className="col-sm-6 col-md-4 mb-4">
    <div className="card  h-100">
      <div className="card-header">{user.username}</div>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
        <p className="card-text">{user.company.catchPhrase}</p>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
);

export default CardPreview;

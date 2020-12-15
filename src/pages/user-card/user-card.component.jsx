import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectUsers } from "../../redux/home/home.selectors";

import CardPreview from "../../components/card-preview/card-preview.component";

const UserCard = ({ users }) => (
  <div className="container mt-5">
    <div className="row">
      {users.map((user) => (
        <CardPreview key={user.id} user={user} />
      ))}
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
});

export default connect(mapStateToProps)(UserCard);

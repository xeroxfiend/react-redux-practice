import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";

function Characters(props) {
  return (
    <div className="characters">
      <Link to="/">
        <button>Home</button>
      </Link>
      <p>You're logged in as {props.username}!</p>
    </div>
  );
}

const mapStateToProps = globalState => {
  const {username} = globalState.userReducer
  const {characters, loading} = globalState.swapiReducer
  return {username, characters, loading};
};

export default connect(mapStateToProps)(Characters);

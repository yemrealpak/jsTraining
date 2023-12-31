import React from "react";
import PropTypes from "prop-types";

function Users({ name, surname, isLoged, family }) {
  return (
    <>
      {isLoged ? (
        <h1>
          Hoşgeldin {name} {surname}
        </h1>
      ) : (
        <h1>Please log in</h1>
      )}

      <h1>
        Aile Üyeleri:
        {family.map((name, i) => (
          <div key={i}>
            <li>
              {i + 1}-{name}
            </li>
          </div>
        ))}
      </h1>
    </>
  );
}

Users.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  isLoged: PropTypes.bool,
  family: PropTypes.array,
};

export default Users;

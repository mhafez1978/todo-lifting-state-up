import React from "react";

const Card = (props) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Mark Complete</button>
            <button className="btn btn-warning">Delete Todo</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

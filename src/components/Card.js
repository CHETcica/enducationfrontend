import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Card = ({ coursename, image, group_type, link_youtube }) => {
  const disPatch = useDispatch();

  return (
    <div className="card shadow-sm bg-accent text-accent-content">
      <figure>
        <img src={image ||"https://picsum.photos/id/1005/400/250"} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{coursename}</h2>
        <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p>
        <div className="card-actions">
          <button className="btn btn-secondary">More info</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
